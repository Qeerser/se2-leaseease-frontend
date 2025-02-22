import { configureStore, Middleware } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import propertyReducer from './propertySlice';

const loggerMiddleware: Middleware = (storeAPI) => (next) => (action) => {
    console.log('Dispatching action:', action);
    const result = next(action);
    console.log('New State:', storeAPI.getState());
    return result;
};

export const store = configureStore({
    reducer: {
        auth: authReducer,
        property: propertyReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loggerMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
