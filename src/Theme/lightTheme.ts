import {
  StyledComponentsTheme,
  ThemeButtons,
  ThemeColors,
  ThemeContainers,
  ThemeTextColors,
} from '../@types/StyledComponentsTheme';

const colors: ThemeColors = {
  mainBkg: '#FFFFFF',
  primary: '#545DAD',
  secondary: '#B0B6EC',
  accent: '#D37A7E',
  deactive: '#BCBCBC',
  l1Container: '#F4F4F6',
  l2Container: '#FBFBFB',
  profit: '#27AE60',
  loss: '#EB5757',
  zeroNet: '#4F4F4F',
  accentContainer: '#FDDADB',
};

const textColors: ThemeTextColors = {
  neutral: colors.zeroNet!,
  primary: colors.primary!,
  accent: colors.accent!,
  /**
   * Provides the highest contrast according to theme.
   * Usually matches the theme darkeness mode.
   */
  contrast: colors.mainBkg!,
};

const containers: ThemeContainers = {
  l1Container: {
    background: colors.l1Container!,
    borderRadius: '30px',
    textColor: textColors.neutral!,
    titleTextClass: 'head1',
  },
  l2Container: {
    background: colors.l2Container!,
    borderRadius: '30px',
    textColor: textColors.neutral!,
    titleTextClass: 'head1',
  },
  accent: {
    background: colors.accentContainer!,
    borderRadius: '30px',
    textColor: textColors.accent!,
    titleTextClass: 'head1',
  },
  primary: {
    background: colors.primary!,
    borderRadius: '30px',
    textColor: textColors.contrast!,
    titleTextClass: 'head1',
  },
};

const buttons: ThemeButtons = {
  contained: {
    background: colors.mainBkg,
    textClass: 'primary-text',
  },
  outlined: {
    textClass: 'primary-text',
  },
};

export const lightTheme: StyledComponentsTheme = {
  colors,
  buttons,
  textColors,
  fonts: ['Nunito', 'Montserrat'],
  containers,
  typographs: {
    'main-title': `
            font-family: Montserrat;
            font-style: normal;
            font-weight: bold;
            font-size: 26px;
            line-height: 32px;
        `,
    head1: `
            font-family: Nunito;
            font-style: normal;
            font-weight: bold;
            font-size: 26px;
            line-height: 35px;
        `,
    head2: `
            font-family: Nunito;
            font-style: normal;
            font-weight: bold;
            font-size: 22px;
            line-height: 30px;
        `,
    head3: `
            font-family: Nunito;
            font-style: normal;
            font-weight: normal;
            font-size: 23px;
            line-height: 31px;
        `,
    'primary-text': `
            font-family: Nunito;
            font-style: normal;
            font-weight: 600;
            font-size: 18px;
            line-height: 25px;
        `,
    'secondary-text': `
            font-family: Nunito;
            font-style: normal;
            font-weight: normal;
            font-size: 18px;
            line-height: 25px;
        `,
  },
};
