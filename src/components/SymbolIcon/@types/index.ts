export enum ColorMode {
  White = 'white',
  Colorful = 'color',
}

export enum Size {
  Big = 64,
  Medium = 32,
  Small = 16,
}

export type SymbolIconProps = {
  /** Crypto currency symbol, like `BTC` */
  symbol?: string;
  color?: ColorMode;
  /** @default `Size.Medium` */
  size?: Size;
  /** Determines the color of Icon which emerges when there is no image available for given symbol.  */
  unknownSymbolColor?: string;
};
