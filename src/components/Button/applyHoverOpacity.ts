import { TypesButton } from '../../types/constantsButtonTypes';

const hoverBgByType: Record<string, string> = {
    [TypesButton.PRIMARY]: '1',
    [TypesButton.OUTLINE]: '1',
    [TypesButton.COLORED]: '0.8',
};

export const applyHoverOpacity = ({ color, disabled }: { color: TypesButton, disabled?: boolean }) => (`
  &:hover {
    opacity: ${disabled ? '0.2' : hoverBgByType[color]}
  }
`);
