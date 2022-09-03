import { configureStore } from '@reduxjs/toolkit';
import slice from './slices';
// import bodySlice from '../components/Body/bodySlice';

const store = configureStore({
  reducer: {
    note: slice.reducer,
  },
});

export default store;