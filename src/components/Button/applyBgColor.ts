import { TypesButton } from '../../types/constantsButtonTypes';
import { colors } from '../../constants/colors';

const colorBgByType: Record<string, string> = {
    [TypesButton.PRIMARY]: colors.blueMedium3,
    [TypesButton.OUTLINE]: 'transparent',
    [TypesButton.COLORED]: colors.black,
    [TypesButton.TRANSPARENT]: 'transparent',
    [TypesButton.WHITE]: colors.white,
    [TypesButton.TEXT]: 'transparent',
    [TypesButton.ROUND]: colors.black,
    [TypesButton.TERTIARY]: 'transparent',
};

export const applyBgColor = ({ color }: {color: TypesButton}) => `background: ${colorBgByType[color]}`;
