import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { TextArea } from '../../components/TextArea';
import { units } from '../../helpers/styles/units';
import { useAction } from '../../hooks/useAction';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { Loader } from '../../components/Loader';
import { Select } from '../../components/Select';
import { TypesSelect } from '../../constants/TypesSelect';
import { SelectOption } from '../../types/SelectOption';

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
    const { fetchLanguages } = useAction();
    const { languages, loading } = useTypeSelector(state => state.languages);
    const { loading: loadingTranslate } = useTypeSelector(state => state.translate);
    const [selectedLanguage, setSelectedLanguage] = useState({ source: 'ru', target: 'en' });

    useEffect(() => {
        fetchLanguages();
    }, []);

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

    return (
        <>
            <h1>Translator</h1>
            <StyledTextAreaWrapper>
                <StyledTextWrapper>
                    <TextArea name="TranslationText" maxLength={1000} />
                    <Select
                        name="source"
                        selectType={TypesSelect.DEFAULT}
                        options={languageOptions}
                        onClick={handleSelectLanguage}
                        value={selectedLanguage.source}
                    />
                </StyledTextWrapper>
                <StyledTextWrapper>
                    {loadingTranslate || (
                        <>
                            <TextArea name="TranslatedText" readOnly maxLength={1000} />
                            <Select
                                name="target"
                                selectType={TypesSelect.DEFAULT}
                                options={languageOptions}
                                onClick={handleSelectLanguage}
                                value={selectedLanguage.target}
                            />
                        </>
                    )}
                </StyledTextWrapper>
            </StyledTextAreaWrapper>
        </>
    );
};
