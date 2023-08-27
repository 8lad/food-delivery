import { RouterList } from '../../router/RouterList';
import { MainContainer } from '../MainContainer/MainContainer';
import './App.scss';

export const App = () => {
  return (
    <MainContainer>
      <RouterList />
    </MainContainer>
  );
};
