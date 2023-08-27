import { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { PageRoutes } from '../constants';
import { SideMenu } from '../../components/SideMenu/SideMenu';
import { Header } from '../../components/Header/Header';
import { getLocalStorageValue } from '../../helpers/getLocalStorageValue';
import { LOCAL_STORAGE_TOKEN_OPTION } from '../../utils/globalConstants';

export const ProtectedRoute: React.FC = () => {
  const [isAuth, setIsAuth] = useState(true);
  const userToken = getLocalStorageValue(LOCAL_STORAGE_TOKEN_OPTION);

  useEffect(() => {
    userToken ? setIsAuth(true) : setIsAuth(false);
  }, [userToken]);

  if (!isAuth) {
    return <Navigate to={PageRoutes.SIGNUP_PAGE} />;
  }
  return (
    <>
      <SideMenu />
      <Header />
      <Outlet />
    </>
  );
};
