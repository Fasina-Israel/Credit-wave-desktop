import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userSlice from './slices/userSlice';
import programReducer from './slices/programSlice';
import programSlice from './slices/programSlice';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import menu from '../store/reducers/menu';

const persistConfig = {
    key: 'learnSpace',
    storage
};
const rootReducer = combineReducers({
    userDetails: userSlice,
    programDetails: programSlice,
    menu :menu

});
const persistedReducer = persistReducer(persistConfig, rootReducer);
// const persistedReducer1 = persistReducer(persistConfig, programSlice);
// const persistedProgramReducer = persistReducer(persistConfig, programSlice);

export const store = configureStore({
    reducer: persistedReducer,
    // {
    //     learnSpace: persistedReducer
    // },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
            }
        })
});
export const persistor = persistStore(store);
