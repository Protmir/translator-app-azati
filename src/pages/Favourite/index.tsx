import { useEffect } from 'react';
import styled from 'styled-components';
import { useAction } from '../../hooks/useAction';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { Loader } from '../../components/Loader';
import { Button } from '../../components/Button';
import { TypesButton } from '../../types/constantsButtonTypes';
import { units } from '../../helpers/styles/units';
import { getId } from '../../helpers/generateId';

const StyledFavouriteWrapper = styled.div`
  max-width: ${units(150)};
  display: flex;
  justify-content: space-between;
`;

const StyledButton = styled(Button)`
  width: max-content;
  margin-top: ${units(5)};
`;

export const Favourite = () => {
    const { getFavourite, removeFavourite } = useAction();
    const { loading, favourite } = useTypeSelector(state => state.favourites);

    useEffect(() => {
        getFavourite();
    }, []);

    if (loading) {
        return <Loader />;
    }

    return (
        <>
            <h1>Favourite</h1>
            {favourite.length
                ? favourite.map(el => (
                    <StyledFavouriteWrapper key={getId()()}>
                        <h4>
                            {el.source}
                            {' => '}
                            {el.target}
                        </h4>
                    </StyledFavouriteWrapper>
                ))
                : <h4>Empty!</h4>}
            <StyledButton color={TypesButton.PRIMARY} onClick={removeFavourite}>
                Clear all favourites
            </StyledButton>
        </>
    );
};
