import { useEffect } from 'react';
import { useDashboardPage } from '../Dashboard/Context';

export const DetailsPage = () => {
  const { setTitle } = useDashboardPage();

  useEffect(() => {
    setTitle?.('Details page');
  }, [setTitle]);

  return null;
};
