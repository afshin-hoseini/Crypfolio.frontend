import React, { useEffect } from 'react';
import { NetProfitLossViewer } from 'src/features/NetProfitLossViewer';

import { OverviewTable } from 'src/features/OverviewTable';
import { PriceWatchList } from 'src/features/PriceWatchList/container';
import { useDashboardPage } from '../Dashboard/Context';
import { OverviewContainer, OverviewTablesSection } from './styles';

export const OverviewPage = () => {
  const { setTitle } = useDashboardPage();

  useEffect(() => {
    setTitle!('Portfolio Overview');
  }, []);

  return (
    <OverviewContainer>
      <OverviewTablesSection>
        <OverviewTable />
        <section className="quick-look-section">
          <NetProfitLossViewer />
          <PriceWatchList />
        </section>
      </OverviewTablesSection>
    </OverviewContainer>
  );
};
