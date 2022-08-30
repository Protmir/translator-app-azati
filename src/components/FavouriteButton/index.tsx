import React, { useCallback } from 'react';
import styled from 'styled-components';
import { TypesButton } from '../../types/constantsButtonTypes';
import { Button } from '../Button';
import { units } from '../../helpers/styles/units';
import { useAction } from '../../hooks/useAction';
import { useTypeSelector } from '../../hooks/useTypeSelector';

const StyledButton = styled(Button)`
  width: max-content;
  margin-top: ${units(5)};
`;

export const FavouriteButton = ({ source }: {source: string}) => {
    const { updateFavourite } = useAction();
    const { translatedText } = useTypeSelector(state => state.translate);

    const handleAddToFavourite = useCallback(() => {
        if (source) {
            updateFavourite({ source, target: translatedText });
            alert('You added the translation to your favorites');
            return;
        }
        alert('One of the text fields is empty');
    }, [source, translatedText]);

    return (
        <StyledButton color={TypesButton.PRIMARY} onClick={handleAddToFavourite}>
            Add to favourite
        </StyledButton>
    );
};
