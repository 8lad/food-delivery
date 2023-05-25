import { Routes, Route } from 'react-router-dom';
import { PageRoutes } from './constants';
import { SignUp } from '../pages/SignUp/SignUp';
import { SignIn } from '../pages/SignIn/SignIn';
import { Verification } from '../pages/Verification/Verification';
import { ErrorPage } from '../pages/ErrorPage/ErrorPage';
import { ProtectedRoute } from './ProtectedRoute/ProtectedRoute';
import { AuthRoute } from './AuthRoute/AuthRoute';

export const RouterList = () => {
  return (
    <Routes>
      <Route element={<AuthRoute />}>
        <Route
          path={PageRoutes.SIGNUP_PAGE}
          element={<SignUp />}
        />
        <Route
          path={PageRoutes.SIGNIN_PAGE}
          element={<SignIn />}
        />
        <Route
          path={PageRoutes.VERIFICATION_PAGE}
          element={<Verification />}
        />
      </Route>
      <Route element={<ProtectedRoute isAuth={false} />}>
        <Route
          path={PageRoutes.HOME_PAGE}
          element={<h1>Home</h1>}
        />
      </Route>
      <Route
        path='*'
        element={<ErrorPage />}
      />
    </Routes>
  );
};
