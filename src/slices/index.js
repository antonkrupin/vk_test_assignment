// eslint-disable-next-line import/no-extraneous-dependencies
import { configureStore } from '@reduxjs/toolkit';

import cellReducer from './cellReducer';

export default configureStore({
  reducer: {
    cell: cellReducer,
  },
});
