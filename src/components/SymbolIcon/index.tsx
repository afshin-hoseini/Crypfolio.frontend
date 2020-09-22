import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC, useMemo } from 'react';
import { SymbolIconProps } from './@types';
import { SymbolIconWrapper } from './styles';

/**
 * Respresents the corresponding Icon for given symbol.
 */
export const SymbolIcon: FC<SymbolIconProps> = ({ symbol, color = 'color', size, unknownSymbolColor }) => {
  const symbolIconAddress = useMemo(() => {
    if (!symbol) return null;
    try {
      return require(`cryptocurrency-icons/svg/${color}/${symbol.toLowerCase()}.svg`);
    } catch (e) {}
  }, [symbol, color]);

  return useMemo(
    () => (
      <SymbolIconWrapper size={size}>
        {symbolIconAddress ? (
          <img width={size} height={size} src={symbolIconAddress} alt={symbol} />
        ) : (
          <FontAwesomeIcon
            className="unknown-symbol-icon"
            icon={faQuestionCircle}
            color={unknownSymbolColor}
            fontSize={size}
          />
        )}
      </SymbolIconWrapper>
    ),
    [size, symbol, symbolIconAddress, unknownSymbolColor]
  );
};
