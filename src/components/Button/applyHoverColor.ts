import { TypesButton } from '../../types/constantsButtonTypes';
import { colors } from '../../constants/colors';
import { ButtonProps } from './index';

const hoverByType: Record<string, string> = {
    [TypesButton.TERTIARY]: colors.blueDark,
};

const colorByType: Record<string, string> = {
    [TypesButton.TERTIARY]: colors.blueMedium3,
};

export const applyHoverColor = ({ color, disabled }: Pick<ButtonProps, 'color' | 'disabled'>) => (`
  &:hover {
    color: ${disabled ? colorByType[color] : hoverByType[color]};
  }
`);
