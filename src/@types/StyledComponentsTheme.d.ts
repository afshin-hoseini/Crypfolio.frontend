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

type ThemeTextColors = {
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

type ThemeContainers = {
  [k in 'l1Container' | 'l2Container' | 'primary' | 'accent']: ContainerDefinition;
};

type StyledComponentsTheme = {
  colors?: ThemeColors;
  typographs?: Typographs;
  textColors?: ThemeTextColors;
  fonts?: string[];
  containers?: ThemeContainers;
};

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends StyledComponentsTheme {}
}
