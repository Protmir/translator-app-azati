import { FlattenSimpleInterpolation, css } from 'styled-components';
import { SizesButton } from '../../types/constantsSizeButton';
import { units } from '../../helpers/styles/units';

const paddingSize: Record<string, FlattenSimpleInterpolation> = {
    [SizesButton.SM]: css`padding: 0;`,
    [SizesButton.S]: css`padding: ${units(4)} ${units(6)};`,
    [SizesButton.XS]: css`padding: ${units(3)} ${units(3)};`,
    [SizesButton.M]: css`padding: ${units(4)} ${units(8)};`,
    [SizesButton.L]: css`padding: ${units(4)} ${units(9)};`,
};

export const applySizePadding = ({ size = SizesButton.S }: { size?: SizesButton }) => paddingSize[size];
