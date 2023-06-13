import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import Success from './Success';

const root = ReactDOM.createRoot(document.getElementById('root'));

let routes = [
  {
    path: 'ckeditor5-source-editing-bug',
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: 'success',
        element: <Success />
      },
    ]
  }
];

const router = createHashRouter(routes);

root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
