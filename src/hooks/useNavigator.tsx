import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ICategory } from '../redux/sagas/categories/categoriesTypes';
import { refreshListingStateAction } from '../redux/sagas/products/productsRedux';
import { LISTING_ROUTE } from '../router/RouterConstants';

export const useNavigator = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function navigateToListing(item: ICategory) {
    dispatch(refreshListingStateAction());
    navigate(LISTING_ROUTE, { state: { item } });
  }
  return { navigateToListing };
};
