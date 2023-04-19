import { RouterProvider, Outlet, createBrowserRouter } from "react-router-dom";
// import "./App.css";
import NavBar from "./Components/NavBar";
// import Error from "./Error";
// import Explore from "./pages/Explore/Explore";
import Home from "./Components/Home";
import { NavigationMap } from "./Components/NavigationMap";
// import Profile from "./pages/Profile/Profile";
// import Signin from "./pages/Signin/Signin";

const Layout = () => {
  return (
    <div className="w-50 mx-auto">
      <NavBar />
      <Outlet></Outlet>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    // errorElement: <Error />,
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/bookCab",
        element: <NavigationMap />,
      },
      // {
      //   path: "/explore",
      //   element: <Explore />,
      // },
      // {
      //   path: "/login",
      //   element: <Signin />,
      // },
      // {
      //   path: "/logout",
      //   element: <Signin />,
      // },
    ],
  },
]);

function App() {
  return (
    <div>
        <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
