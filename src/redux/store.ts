import { combineReducers } from 'redux';
import createSagaMiddleware, { SagaMiddleware } from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
import { categoriesReducer } from './sagas/categories/categoryRedux';
import rootSaga from './rootSaga';
import { productsReducer } from './sagas/products/productsRedux';
// import storage from 'redux-persist/lib/storage';
// import { persistReducer, persistStore } from 'redux-persist';

// Create the saga middleware
const sagaMiddleware: SagaMiddleware = createSagaMiddleware();

// const persistConfig = {
//   key: 'root',
//   storage,
// };

// Combine all reducers (if you have multiple reducers)
const rootReducer = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
});

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the Redux store with saga middleware
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
  devTools: true,
});

// const persistor = persistStore(store);

// Run the root saga
sagaMiddleware.run(rootSaga);

export { store };
