import { FlattenSimpleInterpolation, css } from 'styled-components';
import { TypesSelect } from '../../constants/TypesSelect';
import { colors } from '../../constants/colors';
import { typography } from '../../helpers/styles/typography';
import { SelectProps } from '../../types/SelectProps';

const stylesOptionName: Record<TypesSelect, FlattenSimpleInterpolation> = {
    [TypesSelect.TRANSPARENT]: css`
    color: ${colors.white};
    font-weight: 500;
    ${typography(5)}
  `,
    [TypesSelect.DEFAULT]: css`
    color: ${colors.black};
    font-weight: 600;
    ${typography(5)};
  `,
    [TypesSelect.OUTLINE]: css`
    color: ${colors.black};
    font-weight: 600;
    ${typography(10)}
  `,
};

const stylesDisabledOptionName: Record<TypesSelect, FlattenSimpleInterpolation> = {
    [TypesSelect.TRANSPARENT]: css`
    color: ${colors.greyDark1};
    font-weight: 500;
    ${typography(5)}
  `,
    [TypesSelect.DEFAULT]: css`
    color: ${colors.greyDark1};
    font-weight: 600;
    ${typography(5)};
  `,
    [TypesSelect.OUTLINE]: css`
    color: ${colors.greyDark1};
    font-weight: 600;
    ${typography(10)};
  `,
};

export const applyStyleOptionNameByType = ({ selectType, disabled }: Pick<SelectProps, 'selectType' | 'disabled'>) => {
    if (disabled) {
        return stylesDisabledOptionName[selectType];
    }

    return stylesOptionName[selectType];
};
