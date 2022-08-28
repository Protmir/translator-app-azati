import { ReactNode } from 'react';
import { SelectOption } from './SelectOption';
import { TypesSelect } from '../constants/TypesSelect';

export interface SelectProps {
  name: string;
  description?: string;
  options: SelectOption[];
  prefix?: ReactNode;
  label?: string;
  className?: string;
  onClick?: (field: string, value?: string, shouldValidate?: boolean) => void;
  value?: string | number;
  selectType: TypesSelect;
  disabled?: boolean;
  opened?: boolean;
  openedDown?: boolean;
  readonly?: boolean;
}
