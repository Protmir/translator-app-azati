import { SizeDropDownOptions } from '../../../constants/SizeDropDownOptions';

const sizeOptions: Record<SizeDropDownOptions, string> = {
    [SizeDropDownOptions.XS]: 'right: 0;',
    [SizeDropDownOptions.S]: 'left: 40%; right: 0;',
    [SizeDropDownOptions.M]: 'left: 0; right: 0;',
    [SizeDropDownOptions.L]: 'left: -20%; right: 0;',
};

export const applySizeOptions = ({ size = SizeDropDownOptions.M }: { size?: SizeDropDownOptions }) => sizeOptions[size];
