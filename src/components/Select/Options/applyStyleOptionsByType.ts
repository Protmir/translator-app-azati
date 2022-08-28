import { FlattenSimpleInterpolation, css } from 'styled-components';
import { TypesSelect } from '../../../constants/TypesSelect';
import { units } from '../../../helpers/styles/units';
import { colors } from '../../../constants/colors';
import { OptionsProps } from './index';

const stylesOpenDownOptions: Record<TypesSelect, FlattenSimpleInterpolation> = {
    [TypesSelect.TRANSPARENT]: css`
    position: absolute;
    left: -2px;
    bottom: ${units(10)};
    
    background-color: transparent;
    border: none;
    border-top-left-radius: ${units(2)};
    border-top-right-radius: ${units(2)};
  `,
    [TypesSelect.DEFAULT]: css`
    position: absolute;
    left: -2px;
    bottom: ${units(10)};
    
    background-color: ${colors.white};
    border: 2px solid ${colors.blueMedium1};
    border-radius: 8px 8px 0 0;
    border-bottom: none;
  `,
    [TypesSelect.OUTLINE]: css`
    position: absolute;
    left: -2px;
    bottom: ${units(17)};
    
    border: 2px solid ${colors.blueMedium1};
    border-radius: ${units(4)};
  `,
};

export const applyStyleOptionsByType = ({
    openedDown, selectType, opened,
}: Pick<OptionsProps, 'openedDown' | 'selectType' | 'opened'>) => {
    if (!openedDown && selectType === TypesSelect.TRANSPARENT) {
        return (
            css`
        position: absolute;
        left: -2px;
        bottom: ${units(10)};

        border: 2px solid ${colors.blueLight2};
        border-radius: ${units(2)};
      `
        );
    }

    if (!openedDown && opened) {
        return stylesOpenDownOptions[selectType];
    }

    if (openedDown && opened && selectType === TypesSelect.OUTLINE) {
        return (
            css`
        position: absolute;
        left: -2px;
        top: ${units(17)};
    
        border: 2px solid ${colors.blueMedium1};
        border-radius: ${units(4)};
      `
        );
    }

    if (!openedDown && selectType === TypesSelect.OUTLINE) {
        return (
            css`
        position: absolute;
        left: -2px;
        bottom: ${units(17)};

        border: 2px solid ${colors.blueLight2};
        border-radius: ${units(4)};
      `
        );
    }

    if (!openedDown) {
        return (
            css`
        position: absolute;
        left: -2px;
        bottom: ${units(10)};

        border: 2px solid ${colors.blueLight2};
        border-bottom: transparent;
        border-top-left-radius: ${units(2)};
        border-top-right-radius: ${units(2)};
      `
        );
    }

    if (selectType === TypesSelect.TRANSPARENT) {
        return (
            css`
        position: static;
        
        border: 2px solid ${colors.blueLight2};
        border-radius: ${units(2)};
      `
        );
    }

    return (
        css`
      position: static;
      
      border: none;
    `
    );
};
