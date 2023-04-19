import { RouterProvider, Outlet, createBrowserRouter } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import NavigationMap from "./Components/NavigationMap";
import BookCab from './Components/BookCab';

const Layout = () => {
  return (
    <div className="w-100 mx-auto">
      <NavBar />
      <Outlet></Outlet>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    // errorElement: <Error />,
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/navigatePath",
        element: <NavigationMap />,
      },
      {
        path: "/bookCab",
        element : <BookCab />
      }
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
