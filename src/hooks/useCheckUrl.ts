import { useLocation } from 'react-router-dom';

const useCheckUrl = () => {
  const location = useLocation();

  const isCartPage = location.pathname === '/cart';
  const isFavouritesPage = location.pathname === '/favourites';

  return { isCartPage, isFavouritesPage };
};

export default useCheckUrl;
