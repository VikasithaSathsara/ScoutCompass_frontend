import { useEffect } from "react";
import "./App.css";
import LandingPage from "./Pages/LandingPage/LandingPage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import SignupPage from "./Pages/SignupPage/SignupPage";
import HomePage from "./Views/HomePage/HomePage";
import PassingPage from "./Views/PassingPage/PassingPage";
import EventPage from "./Views/EventPage/EventPage";
import ResourcePage from "./Views/ResourcePage/ResourcePage";
import ProfilePage from "./Views/ProfilePage/ProfilePage";
import MembershipAward from "./Views/Awards/MembershipAward";

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
      <ScrollToTop />
      <Outlet />
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
        <Route path="signup" element={<SignupPage />} />

        <Route path="home" element={<HomePage />} />
        <Route path="passing" element={<PassingPage />} />
        <Route path="resource" element={<ResourcePage />} />
        <Route path="event" element={<EventPage />} />
        <Route path="profile" element={<ProfilePage />} />

        <Route path="membershipaward" element={<MembershipAward />} />
      </Route>
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
