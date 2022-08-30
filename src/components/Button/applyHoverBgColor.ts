import { TypesButton } from '../../types/constantsButtonTypes';
import { colors } from '../../constants/colors';

const hoverBgByType: Record<string, string> = {
    [TypesButton.PRIMARY]: colors.blueDark,
    [TypesButton.OUTLINE]: colors.blueLight1,
};

const colorBgByType: Record<string, string> = {
    [TypesButton.PRIMARY]: colors.blueMedium3,
    [TypesButton.OUTLINE]: 'transparent',
    [TypesButton.COLORED]: colors.black,
};

export const applyHoverBgColor = ({ color, disabled }: { color: TypesButton, disabled?: boolean }) => (`
  &:hover {
    background: ${disabled ? colorBgByType[color] : hoverBgByType[color]};
  }
`);
