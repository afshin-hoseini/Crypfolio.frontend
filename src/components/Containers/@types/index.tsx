import { ReactNode } from 'react';

export enum ContainerMode {
  /** Same as `Main` */
  Level1 = 'l1Container',
  /** Same as `Level1`. */
  Main = 'l1Container',

  /** Same as `Secondary` */
  /** Same as `Level2` */
  Level2 = 'l2Container',
  Secondary = 'l2Container',

  Primary = 'primary',
  Accent = 'accent',
}

export type ContainerComponentProps = {
  mode: ContainerMode;
  className?: string;

  /** CSS like padding string to easily apply paading without defining classname */
  padding?: string;
  title?: ReactNode;
};

export type DefinedContainerComponentProps = Omit<ContainerComponentProps, 'mode'>;
