import React, { FC, useMemo } from 'react';
import { useThemeContext } from 'src/Theme';
import { ButtonComponentProps, ButtonType } from './@types';
import { ContainedButtonWrapper, OutlinedButtonWrapper } from './styles';

const TYPE_WRAPPER_MAP = {
  [ButtonType.Contained]: ContainedButtonWrapper,
  [ButtonType.Outlined]: OutlinedButtonWrapper,
};

export const Button: FC<ButtonComponentProps> = ({
  children,
  buttonType,
  color = 'neutral',
  className = '',
  onClick,
  background,
  strokeColor,
}) => {
  const { buttons: buttonsTheme } = useThemeContext();
  const Wrapper = useMemo(() => TYPE_WRAPPER_MAP[buttonType || ButtonType.Contained], [buttonType]);
  const defaultTextClass = buttonsTheme?.[buttonType ?? ButtonType.Contained]?.textClass ?? '';
  const textColorClass = useMemo(() => `text-color-${color}`, [color]);

  return (
    <Wrapper
      className={`text-${defaultTextClass} ${className} ${textColorClass}`}
      onClick={onClick}
      background={background}
      strokeColor={strokeColor}
    >
      {typeof children === 'string' ? <span className={defaultTextClass}>{children}</span> : children}
    </Wrapper>
  );
};
