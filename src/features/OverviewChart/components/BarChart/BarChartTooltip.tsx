import React, { FC, useCallback, useEffect } from 'react';
import ReactTooltip from 'react-tooltip';
import { SymbolIcon } from 'src/components/SymbolIcon';
import { PrimaryText, SecondaryText } from 'src/components/Text';
import { BarChartTooltipWrapper } from './styles';

export const BarChartTooltip: FC<BarChartTooltipProps> = ({ data, tooltipId }) => {
  const renderTooltipContent = useCallback(
    (dataIndexStr: string) => {
      if (!data) return null;

      const vault = data[Number(dataIndexStr)];
      if (!vault) return null;

      const profitPercentage = vault.profitPercentage ?? 0;
      const profitPercentageColor = profitPercentage === 0 ? 'neutral' : profitPercentage > 0 ? 'profit' : 'loss';
      return (
        <BarChartTooltipWrapper>
          <header>
            <SymbolIcon symbol={vault.symbol} /> <PrimaryText className="symbol-title">{vault.symbol}</PrimaryText>
          </header>
          <PrimaryText>
            Profit: <SecondaryText color={profitPercentageColor}>{profitPercentage}%</SecondaryText>
          </PrimaryText>
        </BarChartTooltipWrapper>
      );
    },
    [data]
  );

  useEffect(() => {
    if ((data?.length ?? 0) > 0) ReactTooltip.rebuild();
  }, [data]);

  return <ReactTooltip id={tooltipId} effect="solid" delayShow={500} getContent={renderTooltipContent} />;
};
