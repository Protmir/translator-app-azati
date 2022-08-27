import React, { PropsWithChildren } from 'react';
import sprite from './sprite.svg';

interface IconProps {
  type?: string;
  xmlns?: string;
  xmlnsXlink?: string;
  viewBox?: string;
  width?: string;
  height?: string;
  fill?: string;
  color?: string;
  opacity?: number;
  fillOpacity?: number
  strokeOpacity?: number
  onClick?: (event: React.MouseEvent) => void;
  onMouseDown?: (event: React.MouseEvent) => void;
  onMouseOver?: (event: React.MouseEvent) => void;
  className?: string;
}

export const Icon = ({
  type,
  xmlns = 'http://www.w3.org/2000/svg',
  xmlnsXlink = 'http://www.w3.org/1999/xlink',
  viewBox = '0 0 24 24',
  width = '24px',
  height = '24px',
  fill = 'none',
  color = 'white',
  onClick,
  onMouseDown,
  opacity,
  strokeOpacity,
  fillOpacity,
  className,
  onMouseOver,
}: PropsWithChildren<IconProps>) => {
  return (
    <svg
      onClick={onClick}
      xmlns={xmlns}
      xmlnsXlink={xmlnsXlink}
      viewBox={viewBox}
      width={width}
      height={height}
      fill={fill}
      stroke={color}
      className={className}
      onMouseDown={onMouseDown}
      opacity={opacity}
      strokeOpacity={strokeOpacity}
      fillOpacity={fillOpacity}
      onMouseOver={onMouseOver}
    >
      <use xlinkHref={`${sprite}#${type}`} />
    </svg>
  );
};
