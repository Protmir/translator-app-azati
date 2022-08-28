import { SelectProps } from '../../types/SelectProps';

export const applyStyleCursor = ({ disabled, readonly }: Pick<SelectProps, 'disabled' | 'readonly'>) => {
    switch (true) {
        case disabled:
            return 'cursor: not-allowed';
        case readonly:
            return 'cursor: default';
        default:
            return 'cursor: pointer';
    }
};
