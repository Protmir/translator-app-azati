import React, { ReactNode } from 'react';
import { TypesSelect } from '../constants/TypesSelect';

export interface SelectOption {
  id: string;
  name: string;
  field?: string;
  label?: string;
  selected?: boolean;
  disabled?: boolean;
  opened?: boolean;
  readonly?: boolean;
  openedDown?: boolean;
  key?: string;
  prefix?: ReactNode;
  postfix?: ReactNode;
  selectType?: TypesSelect;
  onClick?: (field: string, value: string, shouldValidate?: boolean) => void;
  onClose?: (event: React.MouseEvent, id: SelectOption['id']) => void;
}
