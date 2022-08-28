import styled from 'styled-components';
import { TextArea } from '../../components/TextArea';
import { units } from '../../helpers/styles/units';
import { DropDown } from '../../components/DropDown';
import { OptionProps } from '../../components/DropDown/Options';

const StyledTextAreaWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledTextArea = styled(TextArea)`
  max-width: ${units(150)};
  
  :first-child {
    margin-right: ${units(3)};
  }
`;

export const Translator = () => {
    const userOptions: OptionProps[] = [
        {
            key: 'profile',
            // nameOption: t('profile:sentences.myProfile'),
            // onClick: () => history.push(routes.profile),
        },
        {
            key: 'settings',
            // nameOption: t('profile:sentences.mySettings'),
            // onClick: () => history.push(routes.settings),
        },
        {
            key: 'logout',
            // nameOption: t('profile:sentences.logout'),
            // onClick: () => dispatch(logout()),
        },
    ];

    return (
        <>
            <h1>Translator</h1>
            <StyledTextAreaWrapper>
                <StyledTextWrapper>
                    <StyledTextArea name="TranslationText" maxLength={1000} />
                    <DropDown options={userOptions} />
                </StyledTextWrapper>
                <StyledTextWrapper>
                    <StyledTextArea name="TranslatedText" readOnly maxLength={1000} />
                    <DropDown options={userOptions} />
                </StyledTextWrapper>
            </StyledTextAreaWrapper>
        </>
    );
};
