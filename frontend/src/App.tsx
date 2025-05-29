import { BrowserRouter, useRoutes } from 'react-router-dom';
import { routes } from './routes/routeConfig';
import { ChakraProvider, defaultSystem } from '@chakra-ui/react';

const AppRoutes = () => {
  const element = useRoutes(routes);
  return element;
};

const App: React.FC = () => {
  return(
    <BrowserRouter>
      <ChakraProvider value={defaultSystem}>
        <AppRoutes />
      </ChakraProvider>
    </BrowserRouter>
  );
};

export default App;