import { createBrowserRouter } from 'react-router-dom';
import Main from './Pages/Main';
import Bored from './Pages/Bored';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '/bored',
    element: <Bored />,
  },
]);

export default router;
