import { Meta, Story } from '@storybook/react/types-6-0';
import React, { FC, useEffect, useRef } from 'react';
import { WatchListComponent } from '.';
import { useWatchListContext, WatchListProvider } from '../../Context';

export default {
  component: WatchListComponent,
  title: 'Features/Price watch list/WatchList',
} as Meta;

type Props = WatchListComponentProps;

/**
 * Generates fake price tickers every second.
 */
const FakePriceTickerProvider: FC = () => {
  const { setPriceTickers } = useWatchListContext();
  const timerHandler = useRef<number>();

  useEffect(() => {
    timerHandler.current = setInterval(
      () =>
        setPriceTickers?.({
          BTC: Math.random() * 10000,
          XTZ: Math.random() * 10,
          XRP: Math.random(),
        }),
      1000
    );
    return () => {
      clearTimeout(timerHandler.current);
      timerHandler.current = undefined;
    };
  }, [setPriceTickers]);

  return null;
};
const Template: Story<Props> = (args) => (
  <WatchListProvider>
    <div style={{ width: 350 }}>
      <WatchListComponent {...args} />
    </div>

    {/* This is only for generating fake price tickers */}
    <FakePriceTickerProvider />
  </WatchListProvider>
);

export const SimpleUsage = Template.bind({});
SimpleUsage.args = {
  symbols: ['BTC', 'XTZ', 'XRP'],
  onOrderChanged: console.log,
  onAddWatchBtnClicked: () => console.log('Add clicked'),
};
