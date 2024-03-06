import { combineSlices, configureStore } from '@reduxjs/toolkit';
import { renderConfigSlice } from './renderConfigSlice';
import { pluginConfigSlice } from './pluginConfigSlice';
import { appConfigSlice } from './appConfigSlice';
import { localStorageMiddleware } from './middleware';

export const store = configureStore({
  reducer: combineSlices(renderConfigSlice, pluginConfigSlice, appConfigSlice),
  preloadedState: {
    app: {
      darkTheme: JSON.parse(localStorage.getItem('app_darkThemeEnabled') ?? 'false')
    }
  },
  middleware: (defaults) => defaults()
    .prepend(localStorageMiddleware.middleware)
});

export type MyStore = ReturnType<typeof store.getState>;

export const MyStoreActions = {
  ...renderConfigSlice.actions,
  ...pluginConfigSlice.actions,
  ...appConfigSlice.actions
};

export type MyStoreDispatch = typeof store.dispatch;
