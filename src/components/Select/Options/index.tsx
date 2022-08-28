import React, { PropsWithChildren, SyntheticEvent, useCallback } from 'react';
import styled from 'styled-components';
import { units } from '../../../helpers/styles/units';
import { colors } from '../../../constants/colors';
import { applyBorderRadiusByDirectionOpen } from './applyBorderRadiusByDirectionOpen';
import { typography } from '../../../helpers/styles/typography';
import { applyStyleOptionsByType } from './applyStyleOptionsByType';
import { SelectProps } from '../../../types/SelectProps';
import { TypesSelect } from '../../../constants/TypesSelect';
import { SelectOption } from '../../../types/SelectOption';

export interface OptionsProps {
  options: SelectProps['options'];
  field?: string;
  onClick?: SelectProps['onClick']
  opened: SelectProps['opened'];
  openedDown?: SelectProps['openedDown'];
  selectType: SelectProps['selectType'];
  onChange?: (event?: SyntheticEvent) => void;
}

const StyledOption = styled.div<Pick<OptionsProps, 'openedDown' | 'selectType'>>`
  box-sizing: border-box;
  display: flex;
  align-items: flex-start;
  align-content: center;
  padding: ${units(3)} ${units(4)};

  color: ${colors.black};
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background: ${colors.blueLight1};
  }

  ${applyBorderRadiusByDirectionOpen};
  ${typography(5)};
`;

const StyledPrefix = styled.div`
  margin-right: ${units(4)};
`;

const StyledPostfix = styled.div`
`;

const StyledOptions = styled.div<Pick<OptionsProps, 'openedDown' | 'opened' | 'selectType'>>`
  display: flex;
  flex-direction: ${({ openedDown }) => (openedDown ? 'column' : 'column-reverse')};
  overflow-y: auto;

  max-height: ${units(75)};
  height: auto;
  width: 100%;
  min-width: max-content;

  background: ${colors.white};
  border-bottom: none;
  border-radius: inherit;

  ::-webkit-scrollbar {
    width: ${units(1)};
    height: ${units(1)};
  }

  ::-webkit-scrollbar-thumb {
    height: ${units(12)};
    background-color: ${colors.blueMedium3};
    border-radius: 3px;
  }

  ${applyStyleOptionsByType};
`;

const StyledNameOption = styled.p<Pick<SelectOption, 'selected'>>`
  margin: 0;
  font-weight: bold;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  color: ${({ selected }) => (selected ? colors.blueMedium3 : colors.black)};

  ${typography(5)};
`;

const StyledLabelOption = styled.p`
  margin: 0;

  font-weight: 500;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  ${typography(0)};
`;

const Option = ({
    id,
    name,
    field,
    label,
    selected,
    prefix,
    postfix,
    onClick,
    openedDown,
    selectType = TypesSelect.DEFAULT,
}: PropsWithChildren<SelectOption>) => {
    const handleClick = useCallback(() => {
        if (onClick && field) {
            onClick(field, id, false);
        }
    }, [onClick, field, id]);

    return (
        <StyledOption
            onClick={handleClick}
            openedDown={openedDown}
            selectType={selectType}
        >
            {prefix && <StyledPrefix>{prefix}</StyledPrefix>}
            <div>
                <StyledNameOption selected={selected}>{name}</StyledNameOption>
                <StyledLabelOption>{label}</StyledLabelOption>
            </div>
            {postfix && <StyledPostfix>{postfix}</StyledPostfix>}
        </StyledOption>
    );
};

export const Options = ({
    options,
    onClick,
    field,
    openedDown,
    opened,
    selectType = TypesSelect.DEFAULT,
}: PropsWithChildren<OptionsProps>) => (
    <StyledOptions openedDown={openedDown} selectType={selectType} opened={opened}>
        {options?.map(({ key, ...option }: SelectOption) => (
            <Option
                selectType={selectType}
                openedDown={openedDown}
                onClick={onClick}
                key={key}
                field={field}
                {...option}
            />
        ))}
    </StyledOptions>
);
