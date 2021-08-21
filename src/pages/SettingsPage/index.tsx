import { useEffect } from 'react';
import { useDashboardPage } from '../Dashboard/Context';

export const SettingsPage = () => {
  const { setTitle } = useDashboardPage();

  useEffect(() => {
    setTitle?.('Settings page');
  }, [setTitle]);

  return null;
};
