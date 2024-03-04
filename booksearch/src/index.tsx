import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Router/App';
import { Provider } from 'react-redux';
import './Tailwind.css'
import { store } from "./redux/store/store";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
