import { Outlet } from 'react-router-dom';
import { AuthSlilder } from '../../components/AuthSlider/AuthSlilder';
import { authRouteStyles } from './AuthRoute.styles';

export const AuthRoute: React.FC = () => {
  return (
    <div css={authRouteStyles}>
      <Outlet />
      <AuthSlilder />
    </div>
  );
};
