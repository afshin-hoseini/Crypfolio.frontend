type BarItemProps = {
  data: Vault;
  label?: string;
  barSectionHeight?: number;
  labelSectionHeight: number;
  space: number;
  heightPercentage: number;
  barWidth: number;
};

type OverviewChartProps = {
  data?: Vault[];
  className?: string;
  barWidth?: number;
  minBarPadding?: number;
  barPadding?: number;
};
