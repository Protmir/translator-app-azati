import { FlattenSimpleInterpolation, css } from 'styled-components';
import {BreakPoints} from '../../constants/styles/breakPoints';

const fontSize: Record<number, FlattenSimpleInterpolation> = {
  0: css`font-size: 12px; line-height: 14px;`,
  5: css`font-size: 14px; line-height: 18px;`,
  10: css`font-size: 16px; line-height: 20px;`,
  15: css`font-size: 18px; line-height: 22px;`,
  20: css`font-size: 20px; line-height: 24px;`,
  25: css`font-size: 24px; line-height: 26px;`,
  30: css`font-size: 28px; line-height: 30px;`,
  35: css`
    font-size: 34px;
    line-height: 36px;

    @media only screen and (max-width: ${BreakPoints.SM}) {
      font-size: 22px;
      line-height: 20px;
    }
  `,
  40: css`font-size: 36px; line-height: 38px;`,

  // Удалить после обновления дизайна
  115: css`font-size: 126px; line-height: 90px;`,
};

export const typography = (step: number) => fontSize[step];
