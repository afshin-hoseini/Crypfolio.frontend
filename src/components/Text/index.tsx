import React, { FC } from 'react';
import { TextProps, TypedTextProps, TextType } from './@types';

export const Text: FC<TextProps> = ({ children, className, type, color }) => {
  const colorClass = color ? `text-color-${color ?? 'neutral'}` : '';

  return <span className={`${type} ${className} ${colorClass}`}>{children}</span>;
};

export const MainTitle: FC<TypedTextProps> = (props) => <Text {...props} type={TextType.MainTitle} />;
export const Header1: FC<TypedTextProps> = (props) => <Text {...props} type={TextType.Header1} />;
export const Header2: FC<TypedTextProps> = (props) => <Text {...props} type={TextType.Header2} />;
export const Header3: FC<TypedTextProps> = (props) => <Text {...props} type={TextType.Header3} />;

export const PrimaryText: FC<TypedTextProps> = (props) => <Text {...props} type={TextType.Primary} />;
export const SecondaryText: FC<TypedTextProps> = (props) => <Text {...props} type={TextType.Secondary} />;
