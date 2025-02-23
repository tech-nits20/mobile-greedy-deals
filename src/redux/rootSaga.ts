import { all } from 'redux-saga/effects';
import { initCategoriesSaga } from './sagas/categories/categoriesSagas';
import { initProductsSaga } from './sagas/products/productsSagas';

export default function* rootSaga() {
  yield all([initCategoriesSaga(), initProductsSaga()]);
}
