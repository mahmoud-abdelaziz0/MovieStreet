import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../Components/Layout/Layout"
import Navbar from "../Components/Navbar/Navbar";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import Movies from "../Components/Movies/Movies";
import People from "../Components/People/People";
import Tv from "../Components/Tv/Tv";



function App() {

  let routers = createBrowserRouter([
    {path:"/", element: <Layout/>, children:[
      // {index: true, element: <Home/>},
      {path:"home", element: <Home />},
      {path:"movies", element: <Movies />},
      {path:"people", element: <People />},
      {path:"tv", element: <Tv />},
      {path:"login", element: <Login />},
      {index: true, element: <Register />},
    ]}
  ])

  return (
    <>
      <RouterProvider router={routers}>
      </RouterProvider>
    </>
  );
}

export default App;
