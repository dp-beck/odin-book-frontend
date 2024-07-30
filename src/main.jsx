import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  redirect
} from "react-router-dom";

import './index.css';

import ErrorPage from './routes/Error-Page';
import Root from './routes/Root';
import Index from './routes/Index';
import SignIn from './routes/Sign-In';
import SignUp from './routes/Sign-Up';

// Hard coded the local host url for the servce -- will need to put that in
// an environmental variable probably?

const loader = async () => {
  const response = await fetch('http://localhost:3000/protected', {
    headers: {
      Authorization: `Bearer ${localStorage.token}`,
    }
  });
  if (response.status === 401) {
    return redirect("/sign-in");
  }
  const user = await response.json();
  return user;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: loader,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Index />}
    ]
  },
  {
    path: "/sign-in",
    element: <SignIn />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/sign-up",
    element: <SignUp/>,
    errorElement: <ErrorPage/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
