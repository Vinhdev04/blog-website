import About from "../pages/About";
import Admin from "../pages/Admin";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
// TODO: Tạo Route gồm đường dẫn và tên
export const routes = [
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "about",
        element: <About />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },{
        path: "/admin",
        element: <Admin />,
      },
    ],
  },
];