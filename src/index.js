import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Success from './Success';

const root = ReactDOM.createRoot(document.getElementById('root'));

let routes = [
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/success',
    element: <Success />
  }
];

if (process.env.NODE_ENV === 'production') {
  routes = [
    {
      path: 'ckeditor5-source-editing-bug',
      routes
    }
  ];
}

const router = createBrowserRouter(routes);

root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
