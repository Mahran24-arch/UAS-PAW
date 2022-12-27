import React from 'react';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Login from './views/login';
import Details3 from './views/details3';
import Index from './views/index';
import Book from './views/book';
import Dasboard from './views/dasboard';
import Details1 from './views/details1';
import Details2 from './views/details2';
import Regist from './views/regist';
import Succes from './views/succes';
import Transaction from './views/transaction';
import './App.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />,
  },
   {
     path: '/book',
     element: <Book />,
   },
   {
     path: '/dashboard',
     element: <Dasboard />,
   },
   {
     path: '/details1',
     element: <Details1 />,
   },
   {
     path: '/details2',
     element: <Details2 />,
   },
   {
     path: '/details3',
     element: <Details3 />,
   },
   {
     path: '/login',
     element: <Login />,
   },
   {
     path: '/regist',
     element: <Regist />,
   },
  {
     path: '/succes',
     element: <Succes />,
   },
   {
     path: '/transaction',
     element: <Transaction />,
   }
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
