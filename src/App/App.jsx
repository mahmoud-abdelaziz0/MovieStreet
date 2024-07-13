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
import ProtectedRoute from "../Components/ProtectedRoute/ProtectedRoute";
import MediaContextProvider from "../Context/MediaContextProvider";

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
        {
          path: "home",
          element: (
            <ProtectedRoute userData={userData}>
              <Home />
            </ProtectedRoute>
          ),
        },
        {
          path: "about",
          element: (
            <ProtectedRoute userData={userData}>
              <About />{" "}
            </ProtectedRoute>
          ),
        },
        {
          path: "movies",
          element: (
            <ProtectedRoute userData={userData}>
              <Movies />{" "}
            </ProtectedRoute>
          ),
        },
        {
          path: "people",
          element: (
            <ProtectedRoute userData={userData}>
              <People />{" "}
            </ProtectedRoute>
          ),
        },
        {
          path: "tv",
          element: (
            <ProtectedRoute userData={userData}>
              {" "}
              <Tv />
            </ProtectedRoute>
          ),
        },
        {
          path: "profile",
          element: (
            <ProtectedRoute userData={userData}>
              {" "}
              <Profile userData={userData} />
            </ProtectedRoute>
          ),
        },
        { path: "login", element: <Login saveUserData={saveUserData} /> },
        { index: true, element: <Register /> },
      ],
    },
  ]);

  return (
    <>
      <MediaContextProvider>
        <RouterProvider router={routers}></RouterProvider>
      </MediaContextProvider>
    </>
  );
}

export default App;
