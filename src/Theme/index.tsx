import React, { FC, useContext } from 'react';
import {ThemeProvider, ThemeContext} from 'styled-components';
import { GlobalStyleInstaller } from './GlobalStyle';
import {lightTheme} from './lightTheme';

export const StyleProvider : FC = ({children})=>{

    return (
        <ThemeProvider theme={lightTheme}>
            <GlobalStyleInstaller/>
            {children}
        </ThemeProvider>
    )
}

/**
 * Exposes theme context in format of react hook.
 */
export const useThemeContext = ()=> useContext(ThemeContext);