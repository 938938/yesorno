import { RouterProvider } from 'react-router-dom';
import AppBox from './UI/AppBox';
import router from './router';

function App() {
  return (
    <AppBox>
      <RouterProvider router={router} />
    </AppBox>
  );
}

export default App;
