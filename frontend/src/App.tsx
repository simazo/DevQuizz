import { BrowserRouter, useRoutes } from 'react-router-dom';
import { routes } from './routes/routeConfig';

const AppRoutes = () => {
  const element = useRoutes(routes);
  return element;
};

const App: React.FC = () => {
  return(
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;