import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from "../Components/Layout/Layout";
import Home from "../Components/Home/Home";
import About from "../Components/About/About";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import Movies from "../Components/Movies/Movies";
import People from "../Components/People/People";
import Tv from "../Components/Tv/Tv";
import Profile from "../Components/Profile/Profile";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";

function App() {
  useEffect(() => {
    if (localStorage.getItem("userToken") !== null) {
      saveUserData();
    }
  }, []);

  const [userData, setUserData] = useState(null);

  function saveUserData() {
    let encodeingToken = localStorage.getItem("userToken");
    let decodeingToken = jwtDecode(encodeingToken);
    console.log("decodeingToken", decodeingToken);
    setUserData(decodeingToken);
  }

  let routers = createBrowserRouter([
    {
      path: "/",
      element: <Layout userData={userData} setUserData={setUserData} />,
      children: [
        // {index: true, element: <Home/>},
        { path: "home", element: <Home /> },
        { path: "about", element: <About /> },
        { path: "movies", element: <Movies /> },
        { path: "people", element: <People /> },
        { path: "tv", element: <Tv /> },
        { path: "login", element: <Login saveUserData={saveUserData} /> },
        { path: "profile", element: <Profile userData={userData} /> },
        { index: true, element: <Register /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={routers}></RouterProvider>
    </>
  );
}

export default App;
