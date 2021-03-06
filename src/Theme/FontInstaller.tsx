import { FC, useEffect } from 'react';
import { useThemeContext } from '.';
import WebFont from 'webfontloader';

/**
 * Installs fonts defined in theme.
 */
export const FontInstaller: FC = () => {
  const { fonts } = useThemeContext();
  useEffect(() => {
    if (!Array.isArray(fonts) || fonts?.length === 0) return;

    WebFont.load({
      google: {
        families: fonts,
      },
    });
  }, [fonts]);

  return null;
};
