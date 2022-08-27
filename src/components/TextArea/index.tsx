import React, { ChangeEvent } from 'react';
import styled, { css } from 'styled-components';
import {units} from '../../helpers/styles/units';
import {typography} from '../../helpers/styles/typography';
import {colors} from '../../constants/colors';


interface TextAreaProps {
  name?: string;
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  value?: string;
  placeholder?: string;
  maxLength?: number;
  className?: string;
  disabled?: boolean;
  readOnly?: boolean;
  error?: boolean;
  resize?: boolean;
}

const StyledRoot = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const StyledTextArea = styled.textarea<Pick<TextAreaProps, 'resize' | 'error' | 'readOnly'>>`
  width: 100%;
  height: 100%;
  min-height: ${units(32)};
  min-width: ${units(32)};
  padding: ${units(5)};
  box-sizing: border-box;

  border: 1px solid ${({ error }) => error ? colors.redDark : colors.greyMedium1};
  border-radius: 8px;

  ${({ resize }) => !resize && 'resize: none'};
  outline: none;

  font-family: inherit;
  font-style: normal;
  color: ${({ error }) => error ? colors.redDark : colors.black};
  font-weight: 500;

  ${({ readOnly, error }) => !readOnly && (css`
    &:hover {
      border-color: ${error ? colors.redDark : colors.blueMedium1};
    }

    &:focus {
      border-color: ${error ? colors.redDark : colors.blueMedium3};
    }
  `)};
  
  &::placeholder {
    color: ${({ error }) => error ? colors.redDark : colors.greyDark1};
  }

  ${typography(5)};
`;

const StyledCountValue = styled.p`
  position: absolute;
  bottom: 0;
  right: ${units(2)};
  padding: ${units(2)};
  border-radius: ${units(4)};;
  background: radial-gradient(${colors.clearWhite}, transparent);
  

  color: ${colors.greyDark2};
  font-style: normal;

  ${typography(0)};
`;

export const TextArea = ({
  name,
  onChange,
  value,
  placeholder,
  disabled,
  readOnly,
  error,
  className,
  resize,
  maxLength = 200,
}: TextAreaProps) => (
  <StyledRoot className={className}>
    <StyledTextArea
      name={name}
      onChange={onChange}
      value={value}
      disabled={disabled}
      placeholder={placeholder}
      readOnly={readOnly}
      maxLength={maxLength}
      resize={resize}
      error={error}
      wrap='hard'
      autoFocus
    />
    {!error && !readOnly && <StyledCountValue>{`${value?.length}/${maxLength}`}</StyledCountValue>}
  </StyledRoot>
);
