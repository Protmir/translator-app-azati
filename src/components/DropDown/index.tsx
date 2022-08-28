import React, {
    PropsWithChildren,
    ReactNode,
    useCallback,
    useRef,
    useState,
} from 'react';
import styled from 'styled-components';
import { colors } from '../../constants/colors';
import { units } from '../../helpers/styles/units';
import { PositionDropDown } from '../../constants/PositionDropDown';
import { OptionProps, Options } from './Options';
import { BreakPoints } from '../../constants/styles/breakPoints';
import { SizeDropDownOptions } from '../../constants/SizeDropDownOptions';
import { useOutSideClick } from '../../hooks/useOutSideClick';
import { TypesIcon } from '../../constants/TypesIcon';
import { Icon } from '../Icon';

export interface DropDownProps {
  options: OptionProps[];
  headerPrefix?: ReactNode;
  height?: number;
  position?: PositionDropDown;
  isClickOnHeader?: boolean;
  isHideIcon?: boolean;
  isOverflowHidden?: boolean;
  className?: string;
  isDisable?: boolean;
  size?: SizeDropDownOptions;
  opened?: boolean
}

const StyledRoot = styled.div`
  display: flex;
  justify-content: space-between;
  
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;

const StyledHeader = styled.div<Pick<DropDownProps, 'isHideIcon' | 'isClickOnHeader' | 'isDisable' | 'opened'>>`
  display: flex;
  align-items: center;
  justify-content: ${({ isHideIcon }) => (isHideIcon ? 'flex-end' : 'space-between')};
  background: ${({ opened }) => (opened ? colors.blueLight1 : 'none')};
  ${({ opened }) => opened && `& svg {fill: ${colors.blueMedium3}}`};
  
  padding: ${units(4)} ${units(6)};
  
  cursor: ${({ isClickOnHeader, isDisable }) => (isClickOnHeader && !isDisable ? 'pointer' : 'not-allowed')};
  
  @media (min-width: ${BreakPoints.MD}) {
    :hover {
      background: ${colors.blueLight1};
    }

    border-radius: ${units(4)};
  }

  @media (max-width: ${BreakPoints.MD}) {
    :active {
      background: ${colors.blueLight1}
    }
  }
`;

const StyledIcon = styled(Icon)<Pick<DropDownProps, 'isDisable'>>`
  cursor: ${({ isDisable }) => (isDisable ? 'not-allowed' : 'pointer')};
`;

export const DropDown = ({
    options,
    headerPrefix,
    position,
    isClickOnHeader,
    isHideIcon,
    height,
    isOverflowHidden,
    className,
    isDisable,
    size,
}: PropsWithChildren<DropDownProps>) => {
    const [isOpen, setIsOpen] = useState(false);
    const refDropDown = useRef<HTMLDivElement>(null);
    const typeIcon = isOpen ? TypesIcon.ARROW_UP : TypesIcon.ARROW_DOWN;
    const optionsHeight = height ?? refDropDown.current?.offsetHeight;

    const handleClick = useCallback(() => {
        if (isDisable) {
            return;
        }
        setIsOpen(!isOpen);
    }, [isDisable, isOpen]);

    const handleOutSideClick = useCallback((event: Event) => {
        if (!refDropDown.current?.contains(event.target as Node)) {
            setIsOpen(false);
        }
    }, [refDropDown]);

    useOutSideClick(refDropDown, handleOutSideClick);

    const handleClickHeader = isClickOnHeader ? handleClick : () => {};

    return (
        <StyledRoot
            ref={refDropDown}
            className={className}
        >
            <StyledHeader
                isHideIcon={isHideIcon}
                isClickOnHeader={isClickOnHeader}
                className="dropDownHeader"
                isDisable={isDisable}
                onClick={handleClickHeader}
                opened={isOpen}
            >
                {headerPrefix}
                {isHideIcon || (
                    <StyledIcon
                        type={typeIcon}
                        onClick={handleClick}
                        isDisable={isDisable}
                        color={colors.blueMedium3}
                        fill={colors.blueMedium3}
                    />
                )}
            </StyledHeader>
            {isOpen && (
                <Options
                    position={position}
                    height={optionsHeight}
                    options={options}
                    isOverflowHidden={isOverflowHidden}
                    onCloseClick={handleClick}
                    size={size}
                    className="dropDownOptions"
                />
            )}
        </StyledRoot>
    );
};
