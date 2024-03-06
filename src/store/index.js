import { configureStore } from '@reduxjs/toolkit';
import AuthReducer from './reducer/AuthReducer';
import SnackbarReducer from './reducer/SnackbarReducer';

export const store = configureStore({
    reducer: {
        Auth: AuthReducer,
        Snacknotify: SnackbarReducer,
    },
});