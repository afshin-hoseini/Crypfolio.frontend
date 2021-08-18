type BarItemProps = {
  data: Vault;
  label?: string;
  barSectionHeight?: number;
  labelSectionHeight: number;
  space: number;
  heightPercentage: number;
  barWidth: number;
  index: number;
  tooltipId?: string;
};

type OverviewChartProps = {
  data?: Vault[];
  className?: string;
  barWidth?: number;
  minBarPadding?: number;
  barPadding?: number;
};

type BarChartTooltipProps = {
  data?: Vault[];
  tooltipId?: string;
};
