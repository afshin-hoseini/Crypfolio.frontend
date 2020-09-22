import 'styled-components';

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
  accentContainer?: string;
};

export type ThemeTextColors = {
  primary?: string;
  neutral?: string;
  accent?: string;
  contrast?: string;
};

type Typographs = {
  'main-title': string;
  head1: string;
  head2: string;
  head3: string;
  'primary-text': string;
  'secondary-text': string;
};

type ContainerDefinition = {
  background: string;
  borderRadius: string;
  textColor: string;
  titleTextClass?: keyof Typographs;
};

type ButtonThemeDefinition = {
  textClass?: keyof Typographs;
  background?: string;

  /** For outlined button, if this parameter has not been set,
   * the determined color would be picked as border color
   */
  strokeColor?: string;
};

type ThemeButtonTextColors = {
  primary?: string;
  dark?: string;
  accent?: string;
};

type ThemeButtons = {
  [k in 'contained' | 'outlined']: ButtonThemeDefinition;
};

type ThemeContainers = {
  [k in 'l1Container' | 'l2Container' | 'primary' | 'accent']: ContainerDefinition;
};

type StyledComponentsTheme = {
  colors?: ThemeColors;
  buttons?: ThemeButtons;
  typographs?: Typographs;
  textColors?: ThemeTextColors;
  fonts?: string[];
  containers?: ThemeContainers;
};

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends StyledComponentsTheme {}
}
