import React, { FC, useMemo } from 'react';
import { Header2 } from 'src/components/Text';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ProfitViewerCellWrapper } from '../../styles';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faPercentage, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { ThemeColors } from 'src/@types/StyledComponentsTheme';
import { Vault } from 'src/@types';

type PolItemComponentProps = {
  icon: IconDefinition;
  amount?: number;
};

/** Generates appropriate  */
const getPolItemAmountColorClass = (amount: number) => {
  let color: keyof ThemeColors = 'zeroNet';
  if (amount < 0) color = 'loss';
  else if (amount > 0) color = 'profit';

  return `text-color-${color}`;
};

/**
 * intended to show the profit/loss amount and percentage in Overview table.
 */
export const ProfitViewerCellComponent: FC<{ vault?: Vault }> = ({ vault }) => {
  return (
    <ProfitViewerCellWrapper>
      <PolItem icon={faPercentage} amount={vault?.profitPercentage} />
      <PolItem icon={faDollarSign} amount={vault?.profitAmount} />
    </ProfitViewerCellWrapper>
  );
};

/**
 * Represents the profit/loss amount beside the given icon.
 */
const PolItem: FC<PolItemComponentProps> = ({ icon, amount }) => {
  const amountColorClass = useMemo(() => getPolItemAmountColorClass(amount ?? 0), [amount]);
  const iconElement = useMemo(() => <FontAwesomeIcon icon={icon} className={`pol-item-icon ${amountColorClass}`} />, [
    icon,
    amountColorClass,
  ]);

  return useMemo(
    () => (
      <div className="pol-item">
        {iconElement}
        <Header2 className={`pol-item-amount ${amountColorClass}`}>{(amount ?? 0).toFixed(2)}</Header2>
      </div>
    ),
    [iconElement, amount, amountColorClass]
  );
};
