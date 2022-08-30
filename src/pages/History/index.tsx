import styled from 'styled-components';
import { useAction } from '../../hooks/useAction';
import { useTypeSelector } from '../../hooks/useTypeSelector';
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

export const History = () => {
    const { removeHistory } = useAction();
    const { history } = useTypeSelector(state => state.history);

    return (
        <>
            <h1>History</h1>
            {history.length
                ? history.map(el => (
                    <StyledFavouriteWrapper key={getId()()}>
                        <h4>
                            {el.source}
                            {' => '}
                            {el.target}
                        </h4>
                    </StyledFavouriteWrapper>
                ))
                : <h4>Empty!</h4>}
            <StyledButton color={TypesButton.PRIMARY} onClick={removeHistory}>
                Clear all history
            </StyledButton>
        </>
    );
};
