import { TypesButton } from '../../types/constantsButtonTypes';
import { colors } from '../../constants/colors';

const colorByType: Record<string, string> = {
    [TypesButton.PRIMARY]: colors.white,
    [TypesButton.OUTLINE]: colors.blueMedium3,
    [TypesButton.COLORED]: colors.white,
    [TypesButton.TEXT]: colors.blueMedium3,
    [TypesButton.ROUND]: colors.white,
    [TypesButton.TERTIARY]: colors.blueMedium3,
};

export const applyColor = ({ color }: {color: TypesButton}) => `color: ${colorByType[color]}`;
