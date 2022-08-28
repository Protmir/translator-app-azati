import { PositionDropDown } from '../../../constants/PositionDropDown';

const positionDropDownOptions: Record<PositionDropDown, string> = {
    [PositionDropDown.TOP]: 'bottom',
    [PositionDropDown.BOTTOM]: 'top',
};

export const applyPositionDropDown = ({ height = 0, position }: { height?: number, position?: PositionDropDown }) => (
    position ? `${positionDropDownOptions[position]}: ${height}px` : `top: ${height}px`
);
