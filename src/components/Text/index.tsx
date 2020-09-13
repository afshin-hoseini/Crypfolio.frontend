import React, { FC } from 'react';
import { TextProps, TypedTextProps, TextType } from './@types';

export const Text : FC<TextProps> = ({children, className, type, color})=> {

    const colorClass = color ? `text-color-${color ?? "neutral"}` : "";

    return (
        <span className={`${type} ${className} ${colorClass}`}>{children}</span>
    )
}

export const MainTitle : FC<TypedTextProps> = (props)=> <Text {...props} type={TextType.MainTitle}/>