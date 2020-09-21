import React, { FC } from 'react';
import styled from 'styled-components';
import { useThemeContext } from 'src/Theme';
import { ContainerComponentProps, ContainerMode, DefinedContainerComponentProps } from './@types';

export const ContainerWrapper = styled.div<{
  mode?: ContainerMode;
  padding?: string;
}>`
  display: flex;
  flex-direction: column;
  background: ${(p) => p.theme.containers?.[p.mode || 'l1Container']?.background || 'white'};
  border-radius: ${(p) => p.theme.containers?.[p.mode || 'l1Container']?.borderRadius || '30px'};
  padding: ${(p) => p.padding || '12px'};
  min-width: 50px;
  min-height: 50px;
  color: ${(p) => p.theme.containers?.[p.mode || 'l1Container']?.textColor || p.theme.textColors?.neutral || 'black'};
`;

export const Container: FC<ContainerComponentProps> = ({ children, mode, className, padding, title }) => {
  const { containers } = useThemeContext();
  const titleClass = `text-${containers?.[mode].titleTextClass || 'head1'}`;

  return (
    <ContainerWrapper className={`${className || ''}`} mode={mode} padding={padding}>
      {title && (typeof title === 'string' ? <span className={titleClass}>{title}</span> : { title })}
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
