import { TypesButton } from '../../types/constantsButtonTypes';
import { colors } from '../../constants/colors';

const borderBgByType: Record<string, string> = {
    [TypesButton.PRIMARY]: 'none',
    [TypesButton.OUTLINE]: `2px solid ${colors.blueMedium3}`,
    [TypesButton.COLORED]: `2px solid ${colors.black}`,
    [TypesButton.TRANSPARENT]: 'none',
    [TypesButton.WHITE]: 'none',
    [TypesButton.TEXT]: 'none',
    [TypesButton.ROUND]: 'none',
    [TypesButton.TERTIARY]: 'none',
};

export const applyBorder = ({ color }: {color: TypesButton}) => `border: ${borderBgByType[color]}`;
