import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { lazy, Suspense, useEffect, useState } from "react";
import ProtectedRoute from "../Components/ProtectedRoute/ProtectedRoute";
import MediaContextProvider from "../Context/MediaContextProvider";
import { Offline, Online } from "react-detect-offline";
import Layout from "../Components/Layout/Layout";
// import Home from "../Components/Home/Home";
// import About from "../Components/About/About";
// import Login from "../Components/Login/Login";
// import Register from "../Components/Register/Register";
// import Movies from "../Components/Movies/Movies";
// import People from "../Components/People/People";
// import Tv from "../Components/Tv/Tv";
// import Profile from "../Components/Profile/Profile";
// import ItemDetails from "../Components/ItemDetails/ItemDetails";

// Lazy-load the components
const Home = lazy(() => import("../Components/Home/Home"));
const About = lazy(() => import("../Components/About/About"));
const Login = lazy(() => import("../Components/Login/Login"));
const Register = lazy(() => import("../Components/Register/Register"));
const Movies = lazy(() => import("../Components/Movies/Movies"));
const People = lazy(() => import("../Components/People/People"));
const Tv = lazy(() => import("../Components/Tv/Tv"));
const Profile = lazy(() => import("../Components/Profile/Profile"));
const ItemDetails = lazy(() => import("../Components/ItemDetails/ItemDetails"));

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
    // console.log("decodeingToken", decodeingToken);
    setUserData(decodeingToken);
  }

  let routers = createBrowserRouter([
    {
      path: "/",
      element: <Layout userData={userData} setUserData={setUserData} />,
      children: [
        { index: true, element: <Home /> },
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
          path: "itemdetails/:id/:media_type",
          element: (
            <ProtectedRoute userData={userData}>
              {" "}
              <ItemDetails />
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
        { path: "register", element: <Register /> },
      ],
    },
  ]);

  return (
    <>
      <div>
        <Offline>
          {" "}
          <div className="offline">You are offline</div>
        </Offline>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <MediaContextProvider>
          <RouterProvider router={routers}></RouterProvider>
        </MediaContextProvider>
      </Suspense>
    </>
  );
}

export default App;
