import React, { FC } from 'react';
import { useThemeContext } from 'src/Theme';
import { ContainerComponentProps, ContainerMode, DefinedContainerComponentProps } from './@types';
import { ContainerWrapper } from './styles';

export const Container: FC<ContainerComponentProps> = ({ children, mode, className, padding, title }) => {
  const { containers } = useThemeContext();
  const titleClass = `text-${containers?.[mode].titleTextClass || 'head1'}`;

  return (
    <ContainerWrapper className={`${className || ''}`} mode={mode} padding={padding}>
      {title && (typeof title === 'string' ? <span className={titleClass}>{title}</span> : title)}
      <div className="content-wrapper">{children}</div>
    </ContainerWrapper>
  );
};

export const MainContainer: FC<DefinedContainerComponentProps> = (props) => (
  <Container {...props} mode={ContainerMode.Main} />
);

export const SecondaryContainer: FC<DefinedContainerComponentProps> = (props) => (
  <Container {...props} mode={ContainerMode.Secondary} />
);

export const PrimaryContainer: FC<DefinedContainerComponentProps> = (props) => (
  <Container {...props} mode={ContainerMode.Primary} />
);

export const AccentContainer: FC<DefinedContainerComponentProps> = (props) => (
  <Container {...props} mode={ContainerMode.Accent} />
);
