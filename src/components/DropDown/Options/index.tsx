import React, {
    ComponentType,
    PropsWithChildren,
    ReactNode,
    useCallback,
} from 'react';
import styled from 'styled-components';
import { applySizeOptions } from './applySizeOptions';
import { DropDownProps } from '../index';
import { colors } from '../../../constants/colors';
import { units } from '../../../helpers/styles/units';
import { typography } from '../../../helpers/styles/typography';
import { applyPositionDropDown } from './applyPositionDropDown';

export interface OptionProps {
  nameOption?: string;
  prefix?: ReactNode;
  onClick?: () => void;
  Component?: ComponentType<any>;
  isOverflowHidden?: boolean;
  key?: ReactNode;
  onCloseClick?: () => void;
  componentProps?: Record<string, string>;
  className?: string;
}

interface OptionsProps extends DropDownProps {
  onCloseClick?: () => void;
}

const StyledDropDown = styled.div<Pick<DropDownProps, 'height' | 'position' | 'isOverflowHidden' | 'size'>>`
  position: absolute;
  padding-left: 0;
  box-sizing: border-box;
  margin-top: 0;
  z-index: 100;

  overflow: ${({ isOverflowHidden }) => (isOverflowHidden ? 'hidden' : 'visible')};

  background-color: ${colors.white};
  backdrop-filter: blur(48px);
  border: 2px solid ${colors.blueLight2};
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);

  ${applyPositionDropDown};
  ${applySizeOptions};
`;

const StyledOption = styled.div`
  display: flex;
  align-items: center;

  box-sizing: border-box;
  color: ${colors.black};
  font-weight: 600;
  letter-spacing: 0.02em;
  padding: ${units(3)} ${units(7)};

  cursor: pointer;

  &:hover {
    background: ${colors.blueLight1};
  }

  ${typography(5)}
`;

const StyledPrefix = styled.div`
  display: flex;
  margin-right: ${units(4)};
`;

const Option = ({
    nameOption,
    prefix,
    onClick,
    onCloseClick,
}: PropsWithChildren<OptionProps>) => {
    const handleClick = useCallback(() => {
        if (onClick) {
            onClick();
        }

        if (onCloseClick) {
            onCloseClick();
        }
    }, [onClick, onCloseClick]);

    return (
        <StyledOption onClick={handleClick}>
            {prefix && <StyledPrefix>{prefix}</StyledPrefix>}
            <span>{nameOption}</span>
        </StyledOption>
    );
};

export const Options = ({
    options,
    height,
    position,
    onCloseClick,
    isOverflowHidden = true,
    size,
    className,
}: PropsWithChildren<OptionsProps>) => (
    <StyledDropDown
        height={height}
        position={position}
        isOverflowHidden={isOverflowHidden}
        size={size}
        className={className}
    >
        {options?.map(({
            nameOption,
            prefix,
            Component,
            onClick,
            key,
            componentProps,
            ...props
        }: OptionProps) => (
            Component ? (
                <Component
                    key={key}
                    onCloseClick={onCloseClick}
                    {...componentProps}
                    {...props}
                />
            ) : (
                <Option
                    onClick={onClick}
                    key={nameOption}
                    nameOption={nameOption}
                    prefix={prefix}
                    onCloseClick={onCloseClick}
                />
            )
        ))}
    </StyledDropDown>
);
