import { useMemo } from 'react';
import { SelectOption } from '../types/SelectOption';

export const useActiveOption = (options: SelectOption[], activeId: unknown) => useMemo(() => options.find(({ id }) => String(id) === String(activeId)), [activeId, options]);
