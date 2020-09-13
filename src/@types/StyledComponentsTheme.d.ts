import "styled-components";

type ThemeColors = {
  mainBkg?: string;
  primary?: string;
  secondary?: string;
  accent?: string;
  deactive?: string;
  l1Container?: string;
  l2Container?: string;
  profit?: string;
  loss?: string;
  zeroNet?: string;
};

type TextColors = {
  primary?: string;
  neutral?: string;
}

type StyledComponentsTheme = {
  colors?: ThemeColors;
  typographs?: {
    "main-title": string;
    head1: string;
    head2: string;
    head3: string;
    "primary-text": string;
    "secondary-text": string;
  };
  textColors?: TextColors;
  fonts?: string[];
};

declare module "styled-components" {
  interface DefaultTheme extends StyledComponentsTheme {}
}
