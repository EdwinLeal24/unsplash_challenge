import { lazy } from "react";

// import Home from "../home/Home";
// import Profile from "../profile/Profile";
// import NotFound from "../notFound/404";

const Home = lazy(() => import("../home/Home"));
const Profile = lazy(() => import("../profile/Profile"));
const NotFound = lazy(() => import("../notFound/404"));

const views = { Home, Profile, NotFound };
export default views;
