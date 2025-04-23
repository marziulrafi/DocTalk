import { createBrowserRouter } from "react-router";
import Error from "../pages/Error";
import Root from "../pages/Root";
import Bookings from "../pages/Bookings";
import Home from "../pages/Home";


const router = createBrowserRouter([
    {
      path:"/",
      errorElement:<Error/>,
      Component: Root,
      children: [
        {
            index:true,
            path:"/",
            loader:()=>fetch("/doctors.json"),
            Component: Home,
        },
        {
          path: "/bookings",
          loader: () => fetch("/doctors.json"),
          Component: Bookings,
        },
        
      ]
    }
  ]);


export default router;