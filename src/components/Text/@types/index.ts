import { ThemeTextColors } from "src/@types/StyledComponentsTheme"

export enum TextType {
    MainTitle="text-main-title", 
    Header1="text-head1", 
    Header2="text-head2", 
    Header3="text-head3",
    Primary="text-primary-text",
    Secondary="text-secondary-text"
}

export type TextProps = {
    type: TextType;
    className?: string;
    color?: keyof ThemeTextColors;
}

export type TypedTextProps = Omit<TextProps, "type">