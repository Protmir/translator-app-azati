import styled from 'styled-components';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { TextArea } from '../../components/TextArea';
import { units } from '../../helpers/styles/units';
import { useAction } from '../../hooks/useAction';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { Loader } from '../../components/Loader';
import { Select } from '../../components/Select';
import { TypesSelect } from '../../constants/TypesSelect';
import { SelectOption } from '../../types/SelectOption';
import { FavouriteButton } from '../../components/FavouriteButton';

const StyledTextAreaWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledTextWrapper = styled.div`
  width: ${units(150)};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  :first-child {
    margin-right: ${units(3)};
  }
`;

export const Translator = () => {
    const { fetchLanguages, translateText } = useAction();
    const { languages, loading } = useTypeSelector(state => state.languages);
    const { loading: isLoadingTranslate, translatedText } = useTypeSelector(state => state.translate);
    const [selectedLanguage, setSelectedLanguage] = useState({ source: 'ru', target: 'en' });
    const [textAreaValue, setTextAreaValue] = useState('');

    useEffect(() => {
        fetchLanguages();
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (textAreaValue) {
                translateText({
                    q: textAreaValue || '',
                    target: selectedLanguage.target,
                    source: selectedLanguage.source,
                });
            }
        }, 1000);

        return () => clearTimeout(timer);
    }, [textAreaValue, selectedLanguage]);

    const languageOptions: SelectOption[] = languages.map(({ language, name }): SelectOption => ({
        id: language,
        key: language,
        name,
    }));

    if (loading && !languages?.length) {
        return <Loader />;
    }

    const handleSelectLanguage = (field: string, value = '') => {
        setSelectedLanguage((prevState => ({
            ...prevState,
            [field]: value,
        })));
    };

    const handleTextAreaValue = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setTextAreaValue(event.target.value);
    };

    const isLoadingTranslatedText = () => (
        isLoadingTranslate
            ? <Loader />
            : (
                <>
                    <TextArea
                        name="TranslatedText"
                        readOnly
                        maxLength={1000}
                        value={translatedText}
                    />
                    <Select
                        name="target"
                        selectType={TypesSelect.DEFAULT}
                        options={languageOptions}
                        onClick={handleSelectLanguage}
                        value={selectedLanguage.target}
                    />
                </>
            )
    );

    return (
        <>
            <h1>Translator</h1>
            <StyledTextAreaWrapper>
                <StyledTextWrapper>
                    <TextArea
                        name="TranslationText"
                        maxLength={1000}
                        onChange={handleTextAreaValue}
                        value={textAreaValue}
                    />
                    <Select
                        name="source"
                        selectType={TypesSelect.DEFAULT}
                        options={languageOptions}
                        onClick={handleSelectLanguage}
                        value={selectedLanguage.source}
                    />
                </StyledTextWrapper>
                <StyledTextWrapper>
                    {isLoadingTranslatedText()}
                </StyledTextWrapper>
            </StyledTextAreaWrapper>
            <FavouriteButton source={textAreaValue} />
        </>
    );
};
