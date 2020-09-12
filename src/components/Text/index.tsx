import React, { FC } from 'react';
import { TextProps, TypedTextProps, TextType } from './@types';

export const Text : FC<TextProps> = ({children, className, type})=> {

    return (
    <span className={`${type} ${className}`}>{children}</span>
    )
}

export const MainTitle : FC<TypedTextProps> = (props)=> <Text {...props} type={TextType.MainTitle}/>