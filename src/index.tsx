// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { Provider } from 'react-redux';
// import App from './App';
// import GlobalStyle from './global/GlobalStyle';
// import store from './store/store';
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <>
//     <GlobalStyle />
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </>
// );

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
