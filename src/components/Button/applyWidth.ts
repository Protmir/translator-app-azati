import { TypesButton } from '../../types/constantsButtonTypes';
import { ButtonProps } from './index';
import { units } from '../../helpers/styles/units';

const widthByType: Record<string, string> = {
    [TypesButton.PRIMARY]: '100%',
    [TypesButton.OUTLINE]: '100%',
    [TypesButton.COLORED]: '100%',
    [TypesButton.TRANSPARENT]: '100%',
    [TypesButton.WHITE]: '100%',
    [TypesButton.TEXT]: '100%',
    [TypesButton.ROUND]: units(12),
    [TypesButton.TERTIARY]: 'max-content',
};

export const applyWidth = ({ color }: Pick<ButtonProps, 'color'>) => `width: ${widthByType[color]}`;
