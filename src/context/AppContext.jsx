import React, { createContext, useEffect, useReducer } from "react";
import { getPhotos, getUser, getUserPhotos } from "../services/service";

import { actions } from "./actions";
import { appReducer, initialState } from "./appReducer";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  useEffect(() => {
    getData();
  }, []);

  const getData = async (keyword) => {
    dispatch(actions.getPhotosStart());

    const [errorPhotos, photos] = await getPhotos(keyword);

    if (errorPhotos)
      dispatch(
        actions.getPhotosFailed("Ha ocurrido un error al buscar las photos")
      );
    else dispatch(actions.getPhotosFinish(photos));
  };

  const handleSearch = (keyword) => {
    dispatch(actions.changeSearch(keyword));
  };

  const fetchUser = async (user) => {
    dispatch(actions.getUserPhotosStart());
    dispatch(actions.getUserStart());

    const [errorUserPhoto, userPhotos] = await getUserPhotos(user);
    const [errorUser, userProfile] = await getUser(user);

    if (errorUserPhoto)
      dispatch(
        actions.getUserPhotosFailed(
          "An error has occurred when loading phothos"
        )
      );
    else dispatch(actions.getUserPhotosFinish(userPhotos));

    if (errorUser)
      dispatch(
        actions.getUserFailed("An error has occurred when loading the user")
      );
    else dispatch(actions.getUserFinish(userProfile));
  };

  return (
    <AppContext.Provider value={{ ...state, getData, handleSearch, fetchUser }}>
      {children}
    </AppContext.Provider>
  );
};
