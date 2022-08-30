import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { SizesButton } from '../../types/constantsSizeButton';
import { TypesButton } from '../../types/constantsButtonTypes';
import { units } from '../../helpers/styles/units';
import { typography } from '../../helpers/styles/typography';
import { applyHoverColor } from './applyHoverColor';
import { applyWidth } from './applyWidth';
import { applyBgColor } from './applyBgColor';
import { applyColor } from './applyColor';
import { applyHoverBgColor } from './applyHoverBgColor';
import { applySizePadding } from './applySizePadding';
import { applyBorder } from './applyBorder';
import { applyHoverOpacity } from './applyHoverOpacity';

export interface ButtonProps {
  onClick?: (event?: unknown) => void;
  color: TypesButton;
  size?: SizesButton;
  disabled?: boolean;
  className?: string;
}

const StyledButton = styled.button <Pick<ButtonProps, 'color' | 'size' | 'disabled'>>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;

  border-radius: ${({ color }) => (color === TypesButton.ROUND ? '50%' : '8px')};

  ${({ color }) => color !== TypesButton.TERTIARY && `height: ${units(12)};`};

  font-weight: 600;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  ${({ color }) => color === TypesButton.TERTIARY && 'text-decoration: underline;'}

  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  opacity: ${({ disabled }) => (disabled ? '0.2' : '1')};

  ${typography(5)};
  ${applyColor};
  ${applyBgColor};
  ${applyHoverBgColor};
  ${applySizePadding};
  ${applyBorder};
  ${applyHoverOpacity};
  ${applyHoverColor};
  ${applyWidth};
`;

export const Button = ({
    children,
    onClick,
    color,
    size = SizesButton.S,
    disabled,
    ...props
}: PropsWithChildren<ButtonProps>) => (
    <StyledButton
        disabled={disabled}
        onClick={onClick}
        color={color}
        size={size}
        type="button"
        {...props}
    >
        {children}
    </StyledButton>
);
