import React from 'react';
import { MainTitle } from 'src/components/Text';
import { NetProfitLossViewer } from 'src/features/NetProfitLossViewer';

import { OverviewTable } from 'src/features/OverviewTable';
import { PriceWatchList } from 'src/features/PriceWatchList/container';
import { OverviewContainer, OverviewTablesSection } from './styles';

export const OverviewPage = () => {
  return (
    <OverviewContainer>
      <MainTitle color="primary">Portfolio Overview</MainTitle>

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
