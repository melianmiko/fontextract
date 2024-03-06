import { createListenerMiddleware, isAnyOf } from '@reduxjs/toolkit';
import { type MyStore } from './store';
import { appConfigSlice } from './appConfigSlice';

export const localStorageMiddleware = createListenerMiddleware();

localStorageMiddleware.startListening({
  matcher: isAnyOf(
    appConfigSlice.actions.setDarkThemeEnabled
  ),
  effect: (action, listenerApi) => {
    const store = listenerApi.getState() as MyStore;
    // Save dark theme enabled
    localStorage.setItem('app_darkThemeEnabled', JSON.stringify(store.app.darkTheme));
  }
});
