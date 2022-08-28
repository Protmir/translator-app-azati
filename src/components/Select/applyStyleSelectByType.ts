import { FlattenSimpleInterpolation, css } from 'styled-components';
import { TypesSelect } from '../../constants/TypesSelect';
import { colors } from '../../constants/colors';
import { SelectProps } from '../../types/SelectProps';

const stylesSelect: Record<TypesSelect, FlattenSimpleInterpolation> = {
    [TypesSelect.TRANSPARENT]: css`
    background-color: transparent;
    border: none;
  `,
    [TypesSelect.DEFAULT]: css`
    background-color: ${colors.white};
    border: 2px solid ${colors.blueLight2};
  `,
    [TypesSelect.OUTLINE]: css`
    background-color: transparent;
    border: 2px solid ${colors.blueLight2};
  `,
};

const stylesOpenSelect: Record<TypesSelect, FlattenSimpleInterpolation> = {
    [TypesSelect.TRANSPARENT]: css`
    background-color: transparent;
    border: none;
  `,
    [TypesSelect.DEFAULT]: css`
    background-color: ${colors.white};
    border: 2px solid ${colors.blueMedium1};
  `,
    [TypesSelect.OUTLINE]: css`
    background-color: transparent;
    border: 2px solid ${colors.blueMedium1};
  `,
};

const styleReadonlySelect: Record<TypesSelect, FlattenSimpleInterpolation> = {
    [TypesSelect.TRANSPARENT]: css`
    background-color: transparent;
  `,
    [TypesSelect.DEFAULT]: css`
    background-color: ${colors.white};
  `,
    [TypesSelect.OUTLINE]: css`
    background-color: transparent;
    border: 2px solid ${colors.blueLight2};
  `,
};

export const applyStyleSelectByType = ({ selectType, readonly, opened }: Pick<SelectProps, 'selectType' | 'readonly' | 'opened'>) => {
    if (readonly) {
        return styleReadonlySelect[selectType];
    }

    if (opened) {
        return stylesOpenSelect[selectType];
    }

    return stylesSelect[selectType];
};
