import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Success from './Success';

const root = ReactDOM.createRoot(document.getElementById('root'));

const baseURI = process.env.NODE_ENV === 'production' ? 'ckeditor5-source-editing-bug/' : '/';

const router = createBrowserRouter([
  {
    path: baseURI,
    element: <App />,
  },
  {
    path: `${baseURI}success`,
    element: <Success />
  }
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
