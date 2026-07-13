import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reduers/rootReducer';

export const store = configureStore({
    reducer: rootReducer,
});
