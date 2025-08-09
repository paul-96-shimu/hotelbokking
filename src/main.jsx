import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'




import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import MainLayout from './Compontents/MainLayout/MainLayout.jsx';
import ErrorPage from './Compontents/ErrorPage.jsx';
import Home from './Compontents/Home.jsx';
import Romms from './Pages/Romms.jsx';
import Mybookings from './Pages/Mybookings.jsx';
import Login from './Pages/Login.jsx';
import Register from './Pages/Register.jsx';
import Authprovider from './Compontents/Authprovider/Authprovider.jsx';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute.jsx';
import RoomDetails from './Pages/RoomDetails.jsx';
import Updated from './Pages/Updated.jsx';
import Contact from './Pages/Contact.jsx';
import Aboutus from './Pages/Aboutus.jsx';
import RoomPage from './Pages/RoomPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: "rooms",
        element: <Romms></Romms>
      },
      {
        path: "mybookings",

        element: (
          <PrivateRoute>
            <Mybookings></Mybookings>
          </PrivateRoute>
        )
      },

      {
        path: "/roomdetails/:id",
        Component: RoomDetails,
        loader: ({ params }) =>
          fetch(`https://hotel-booking-serversite.vercel.app/hotel/${params.id}`)
      },



       {
        path: "/room/:id",
        Component: RoomPage,
     
      },
      {
        path: "login",
        Component: Login
      },
      {
        path: "register",
        Component: Register
      },
      {
        path: "contact",
        Component: Contact
      },
      {
        path: "about",
        Component: Aboutus
      },
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Authprovider>
      <RouterProvider router={router} />
    </Authprovider>
  </StrictMode>,
)
