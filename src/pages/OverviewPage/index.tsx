import React, { useEffect } from 'react';
import { MainContainer } from 'src/components/Containers';
import { NetProfitLossViewer } from 'src/features/NetProfitLossViewer';
import { OverviewBarChart } from 'src/features/OverviewChart';
import { OverviewTable } from 'src/features/OverviewTable';
import { PriceWatchList } from 'src/features/PriceWatchList/container';
import { useDashboardPage } from '../Dashboard/Context';
import { OverviewContainer, OverviewTablesSection } from './styles';

export const OverviewPage = () => {
  const { setTitle } = useDashboardPage();

  useEffect(() => {
    setTitle!('Portfolio Overview');
  }, [setTitle]);

  return (
    <OverviewContainer>
      <MainContainer className="overview-chart-wrapper">
        <OverviewBarChart />
      </MainContainer>
      <OverviewTablesSection>
        <OverviewTable className="overview-table" />
        <section className="quick-look-section">
          <NetProfitLossViewer />
          <PriceWatchList />
        </section>
      </OverviewTablesSection>
    </OverviewContainer>
  );
};
