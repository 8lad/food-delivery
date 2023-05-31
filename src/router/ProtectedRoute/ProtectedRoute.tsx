import { Navigate, Outlet } from 'react-router-dom';
import { PageRoutes } from '../constants';
import { SideMenu } from '../../components/SideMenu/SideMenu';
import { Header } from '../../components/Header/Header';

interface ProtectedRouteProps {
  isAuth: boolean;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ isAuth }) => {
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
