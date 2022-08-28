import React, {
    PropsWithChildren,
    useCallback,
    useEffect,
    useRef,
    useState,
} from 'react';
import styled from 'styled-components';
import { Options } from './Options';
import { SelectOption } from '../../types/SelectOption';
import { units } from '../../helpers/styles/units';
import { applyStyleCursor } from './applyStyleCursor';
import { SelectProps } from '../../types/SelectProps';
import { TypesSelect } from '../../constants/TypesSelect';
import { applyStyleSelectByType } from './applyStyleSelectByType';
import { colors } from '../../constants/colors';
import { typography } from '../../helpers/styles/typography';
import { applyStyleOptionNameByType } from './applyStyleOptionNameByType';
import { Icon } from '../Icon';
import { numberUnits } from '../../helpers/styles/numberUnits';
import { TypesIcon } from '../../constants/TypesIcon';
import { useOutSideClick } from '../../hooks/useOutSideClick';
import { useOnScreen } from '../../hooks/useOnScreen';
import { useActiveOption } from '../../hooks/useActiveOption';

const StyledRoot = styled.div<Pick<SelectOption, 'disabled' | 'readonly'>>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  box-sizing: border-box;
  width: 100%;
  height: ${units(12)};
  margin: 0 auto;

  ${applyStyleCursor};
`;

const StyledSelect = styled.div <Pick<SelectProps, 'readonly' | 'selectType' | 'opened' | 'disabled'>>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: ${({ opened }) => (opened ? 'relative' : 'static')};
  align-items: ${({ selectType }) => (selectType === TypesSelect.TRANSPARENT ? 'flex-start' : 'stretch')};

  box-sizing: border-box;
  border-radius: ${({ selectType }) => (selectType === TypesSelect.OUTLINE ? '16px' : '8px')};

  width: 100%;
  height: ${({ opened, selectType }) => (opened && selectType !== TypesSelect.OUTLINE ? 'max-content' : '100%')};

  z-index: ${({ opened }) => (opened ? 110 : 105)};

  ${applyStyleSelectByType};
`;

const StyledSelectHeader = styled.div<{ hasLabel?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;

  box-sizing: border-box;
  padding: ${({ hasLabel }) => (hasLabel ? `${units(1.5)} ${units(4)} ${units(2.5)}` : `${units(3)} ${units(4)} ${units(2.5)}`)};
`;

const StyledTitle = styled.div`
  width: 100%;
  min-width: fit-content;
`;

const StyledLabel = styled.p`
  font-weight: 500;
  letter-spacing: 0.02em;
  color: ${colors.blueMedium3};

  opacity: 0.5;

  margin: 0;

  ${typography(0)};
`;

const StyledName = styled.p<Pick<SelectProps, 'disabled' | 'selectType'>>`
  display: -webkit-box;
  width: 100%;
  
  overflow: hidden;
  text-overflow: ellipsis;
  letter-spacing: 0.02em;
  
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  ${applyStyleOptionNameByType};
`;

const StyledDescription = styled.p<Pick<SelectProps, 'disabled'>>`
  letter-spacing: 0.02em;

  margin: 0;

  color: ${({ disabled }) => (disabled ? colors.greyDark1 : colors.black)};
  font-weight: 500;
  ${typography(0)};
`;

const StyledPrefix = styled.div<Pick<SelectProps, 'disabled'>>`
  margin-right: ${units(4)};

  & svg {
    ${({ disabled }) => disabled && `fill: ${colors.blueLight2}`};
  }
`;

const StyledIcon = styled(Icon)<Pick<SelectProps, 'disabled'>>`
  min-width: ${units(6)};

  ${({ disabled }) => disabled && `
    fill: ${colors.blueLight2};
    stroke: ${colors.blueLight2};
  `};
`;

export const Select = ({
    options,
    prefix,
    label,
    onClick,
    className,
    value,
    name,
    selectType,
    disabled,
    description,
    readonly,
}: PropsWithChildren<SelectProps>) => {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    const onScreen = useOnScreen(ref, numberUnits(1));
    const isTypeTransparent = selectType === TypesSelect.TRANSPARENT;
    const isVisibleTransparentIconArrow = !readonly && isTypeTransparent;

    const { name: selectTitle } = useActiveOption(options, value) || {};

    const currentSelectRef = ref.current?.getBoundingClientRect().bottom;
    const clientWindowHeight = window.document.body.offsetHeight;

    useEffect(() => {
        if (!onScreen) {
            setIsOpen(false);
        }
    }, [onScreen]);

    let isOpenDown = true;

    if (Number(clientWindowHeight) - Number(currentSelectRef) < 300) {
        isOpenDown = false;
    }

    const isArrowDown = (isOpen && !isOpenDown) || (!isOpen && isOpenDown);

    const typeIcon = isArrowDown ? TypesIcon.ARROW_DOWN : TypesIcon.ARROW_UP;

    const handleClick = useCallback(() => {
        if (!disabled && !readonly) {
            setIsOpen(!isOpen);
        }
    }, [disabled, isOpen, readonly]);

    const handleOutSideClick = useCallback((event: Event) => {
        if (!ref.current?.contains(event.target as Node)) {
            setIsOpen(false);
        }
    }, []);

    useOutSideClick(ref, handleOutSideClick);

    return (
        <StyledRoot
            ref={ref}
            onClick={handleClick}
            className={className}
            disabled={disabled}
            readonly={readonly}
        >
            <StyledSelect
                opened={isOpen}
                selectType={selectType}
                readonly={readonly}
                disabled={disabled}
            >
                <StyledSelectHeader hasLabel={Boolean(label)} className="selectHeader">
                    {prefix && (
                        <StyledPrefix disabled={disabled}>
                            {prefix}
                        </StyledPrefix>
                    )}
                    <StyledTitle>
                        {label && <StyledLabel>{label}</StyledLabel>}
                        <StyledName selectType={selectType} disabled={disabled}>{selectTitle}</StyledName>
                        {description && <StyledDescription disabled={disabled}>{description}</StyledDescription>}
                    </StyledTitle>
                    {isVisibleTransparentIconArrow && <StyledIcon type={typeIcon} color={colors.white} fill={colors.white} />}
                    {!isVisibleTransparentIconArrow && (
                        <StyledIcon
                            type={typeIcon}
                            color={colors.blueMedium3}
                            fill={colors.blueMedium3}
                            disabled={disabled}
                        />
                    )}
                </StyledSelectHeader>
                {onScreen && isOpen
          && (
              <Options
                  options={options}
                  onClick={onClick}
                  field={name}
                  opened={isOpen}
                  openedDown={isOpenDown}
                  selectType={selectType}
              />
          )}
            </StyledSelect>
        </StyledRoot>
    );
};
