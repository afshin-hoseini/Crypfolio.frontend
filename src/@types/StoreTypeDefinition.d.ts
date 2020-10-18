import 'react-redux';
import { ReduxStore } from 'src/store/@types';

declare module 'react-redux' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultRootState extends ReduxStore {}
}
