import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

type PolViewerComponentProps = {
  /**
   * Profit / loss percentage.
   */
  percentage: number;

  /**
   * Profit / loss amount in determined currency.
   */
  amount: number;
  className?: string;
};

type PolItemComponentProps = {
  icon: IconDefinition;
  formattedAmount: string;
};
