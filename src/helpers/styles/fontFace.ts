import {FontWeight} from '../../constants/styles/fontWeight';

export const fontFace = (fontName: string, font: Record<string, string>, fontWeight: FontWeight) => `
  @font-face {
    font-family: ${fontName};
    src: url(${font}) format('truetype');
    font-weight: ${fontWeight};
    font-style: normal;

    font-display: swap;
  }
`;
