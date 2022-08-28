import { css } from 'styled-components';
import { TypesSelect } from '../../../constants/TypesSelect';
import { OptionsProps } from './index';

export const applyBorderRadiusByDirectionOpen = ({
    openedDown,
    selectType,
}: Pick<OptionsProps, 'openedDown' | 'selectType'>) => {
    if (selectType === TypesSelect.OUTLINE) {
        return css`
          &:first-of-type {
            border-bottom-left-radius: inherit;
            border-bottom-right-radius: inherit;
          }

          &:last-of-type {
            border-top-left-radius: inherit;
            border-top-right-radius: inherit;
          }
        `;
    }

    if (openedDown) {
        return css`
          &:last-of-type {
            border-bottom-left-radius: inherit;
            border-bottom-right-radius: inherit;
          }
        `;
    }

    return css`
      &:last-of-type {
        border-radius: inherit;
      }
    ;
    `;
};
