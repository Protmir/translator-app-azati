import React, { Dispatch, useCallback } from 'react';
import styled from 'styled-components';
import { TypesButton } from '../../types/constantsButtonTypes';
import { Button } from '../Button';
import { units } from '../../helpers/styles/units';
import { Favourite } from '../../types/favourite/favouriteState';

interface SwitchLanguageButtonProps {
    selectedLanguages: Favourite,
    onChangeLanguages: Dispatch<React.SetStateAction<Favourite>>
    onChangeTextArea: Dispatch<React.SetStateAction<string>>,
    newValueForTextArea: string
}

const StyledButton = styled(Button)`
  width: max-content;
  margin: 0 ${units(5)};

  @media (max-width: 1024px) {
    margin: ${units(3)} 0
  }
`;

export const SwitchLanguageButton = ({
    selectedLanguages,
    onChangeLanguages,
    onChangeTextArea,
    newValueForTextArea,
}: SwitchLanguageButtonProps) => {
    const handleAddToFavourite = useCallback(() => {
        onChangeLanguages({
            source: selectedLanguages.target,
            target: selectedLanguages.source,
        });
        onChangeTextArea(newValueForTextArea);
    }, [selectedLanguages, onChangeLanguages]);

    return (
        <StyledButton color={TypesButton.PRIMARY} onClick={handleAddToFavourite}>
            Switch languages
        </StyledButton>
    );
};
