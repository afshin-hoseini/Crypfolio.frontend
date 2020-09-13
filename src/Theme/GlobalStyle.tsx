import React, { FC, useContext, useMemo } from 'react';
//Hello
import {createGlobalStyle} from 'styled-components';
import {ThemeContext} from 'styled-components';
//.typograph-main-title,.text-main-title{font-family:Montserrat;font-style:normal;font-weight:bold;font-size:26px;line-height:32px;}
const GlobalStyle = createGlobalStyle<{classes:string}>`
    
    ${p => p.classes}
`;

/**
 * Applies and updates global styles.
 */
export const GlobalStyleInstaller : FC = ()=>{

    const {typographs, textColors} = useContext(ThemeContext);

    /**
     * Creates typograph classes in format of `.typograph-<variant>, .text-<variant>`.
     * 
     * For example:
     * ```
     * .typograph-main-title, .text-main-title { ... }
     * ```
     */
    const typographClasses = useMemo(()=>{

        return Object.keys(typographs || {})
                .map(key => `.typograph-${key}, .text-${key} { ${typographs?.[key as keyof typeof typographs]} }`)
                .join(" ");

    }, [typographs]);

    /**
     * Generates text color classes like `text-color-primary` etc.
     */
    const textColorClasses = useMemo(()=>{
        return Object.keys(textColors || {})
                .map(key => `.typograph-color-${key}, .text-color-${key} { color: ${textColors?.[key as keyof typeof textColors]} }`)
                .join(" ");
    },[textColors])



    return useMemo(()=><GlobalStyle classes={typographClasses + textColorClasses}/>, [textColorClasses, typographClasses])
}