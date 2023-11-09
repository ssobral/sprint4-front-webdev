import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Armario from './routes/Armario.jsx';
import Cadastro from './routes/Cadastro.jsx';
import Contato from './routes/Contato.jsx';
import EditarProduto from './routes/EditarProduto.jsx';
import ExcluirProduto from './routes/ExcluirProduto.jsx';
import Home from './routes/Home.jsx';
import Login from './routes/Login.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,

    children: [
      {path: '/', element: <Home/>},
      {path: '/armario', element: <Armario/>},
      {path: '/cadastro', element: <Cadastro/>},
      {path: '/contato', element: <Contato/>},
      {path: '/editar/produto/:id', element: <EditarProduto/>},
      {path: '/excluir/produto/:id', element: <ExcluirProduto/>},
      {path: '/login', element: <Login/>}
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
);