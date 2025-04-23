import { createBrowserRouter } from "react-router";
import Error from "../pages/Error";
import Root from "../pages/Root";
import Bookings from "../pages/Bookings";
import Home from "../pages/Home";
import Blogs from "../pages/Blogs";
import DoctorDetails from "../DoctorDetails";
import RouterError from "../RouterError";


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
        {
          path: "/blogs",
          loader: () => fetch("/blogs.json"),
          Component: Blogs,
        },
        {
          path: "/doctor/:RegistrationNumber",
          loader: async ({ params }) => {
            const res = await fetch("/doctors.json");
            const doctors = await res.json();
            const doctor = doctors.find(
              (doc) => doc.RegistrationNumber === params.RegistrationNumber
            );
            if (!doctor) {
              throw new Response("Doctor not found", { status: 404 });
            }
            return doctor;
          },
          Component: DoctorDetails,
          errorElement: <RouterError />
        }
      ]
    }
  ]);


export default router;