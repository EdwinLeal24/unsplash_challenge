import views from "../pages/views/index";
import { HOME_PATH, USER_PHOTOS_PATH, NOT_FOUND_PATH } from "./paths";

const { Home, Profile, NotFound } = views;

export const HOME = {
  path: HOME_PATH,
  component: Home,
  isExact: true,
};

export const PROFILE = {
  path: USER_PHOTOS_PATH,
  component: Profile,
  isExact: false,
};
export const NOT_FOUND = {
  path: NOT_FOUND_PATH,
  component: NotFound,
  isExact: false,
};
const routes = [HOME, PROFILE, NOT_FOUND];
export default routes;
