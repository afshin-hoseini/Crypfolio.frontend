import React, { FC } from 'react';
import { SymbolIcon } from 'src/components/SymbolIcon';
import { Size } from 'src/components/SymbolIcon/@types';
import { Header3, SecondaryText } from 'src/components/Text';
import { SymbolCellWrapper } from '../../styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { Vault } from 'src/@types';

/**
 * Renders the overview table's symbol cell. This cell includes symbol's current price.
 */
export const SymbolCellComponent: FC<{ vault: Vault }> = ({ vault }) => {
  return (
    <SymbolCellWrapper>
      <SymbolIcon symbol={vault.symbol} size={Size.Big} />
      <div className="current-price-wrapper">
        <Header3 className="price-label">
          <FontAwesomeIcon icon={faDollarSign} className="fiat-sign" />
          {vault.currentPrice}
        </Header3>
        <SecondaryText>{vault.symbol}</SecondaryText>
      </div>
    </SymbolCellWrapper>
  );
};
