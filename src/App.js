import { useEffect } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import LandingPage from "./Pages/LandingPage/LandingPage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import SignupPage from "./Pages/SignupPage/SignupPage";
import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Outlet,
  useLocation,
} from "react-router-dom";
// import ScoutHistory from "./Pages/Blogs/ScoutHistory";

function RootLayout() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Outlet />
      {/* footter */}
    </>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<LandingPage />} />
        <Route path="login" element={<LoginPage />} />

        {/* <Route path="history" element={<ScoutHistory />} /> */}
        {/* <Route path="home" element={<HomePage/>} /> */}

        <Route path="signup" element={<SignupPage />} />
      </Route>
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
