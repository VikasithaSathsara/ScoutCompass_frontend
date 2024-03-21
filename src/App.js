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
import ScoutAward from "./Views/Awards/ScoutAward";
import ChiefCommissionerAward from "./Views/Awards/ChiefCommissionerAward";
import PrimeMinisterAward from "./Views/Awards/PrimeMinisterAward";
import PresidentAward from "./Views/Awards/PresidentAward";
import ScoutPromise from "./Pages/Blogs/ScoutPromise";
import ScoutHistory from "./Pages/Blogs/ScoutHistory";
import ScoutUniform from "./Pages/Blogs/ScoutUniform";
import ScoutingStructure from "./Pages/Blogs/ScoutingStructure";

import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Outlet,
  useLocation,
} from "react-router-dom";
import Requirments from "./Views/Exams/Requirments";
import MCQs from "./Views/Exams/MCQs";
import ScoutDetailsView from "./Views/ScoutDetailsView/ScoutDetailsView";


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
        <Route path="scoutDetails" element={<ScoutDetailsView />} />

        <Route path="membershipaward" element={<MembershipAward />} />
        <Route path="scoutaward" element={<ScoutAward />} />
        <Route path="chiefcommissioneraward" element={<ChiefCommissionerAward />} />
        <Route path="primeministeraward" element={<PrimeMinisterAward />} />
        <Route path="presidentaward" element={<PresidentAward />} />

        <Route path="requirments" element={<Requirments />} />

        <Route path="mcq" element={<MCQs />} />

        <Route path="scoutpromise" element={<ScoutPromise/>} />
        <Route path="scouthistory" element={<ScoutHistory/>} />
        <Route path="scoutuniform" element={<ScoutUniform/>} />
        <Route path="scoutingstructure" element={<ScoutingStructure/>} />

      </Route>
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;