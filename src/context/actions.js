import { ACTION_TYPES } from "./types";

export const actions = {
  getPhotosStart: () => ({
    type: ACTION_TYPES.GET_PHOTOS_START,
  }),
  getPhotosFinish: (photos) => ({
    type: ACTION_TYPES.GET_PHOTOS_FINISH,
    payload: photos,
  }),
  getPhotosFailed: (error) => ({
    type: ACTION_TYPES.GET_PHOTOS_FAILED,
    payload: error,
  }),
  changeSearch: (event) => ({
    type: ACTION_TYPES.SEARCH_CHANGED,
    payload: event,
  }),
  getUserPhotosStart: () => ({
    type: ACTION_TYPES.GET_USER_PHOTOS_START,
  }),
  getUserPhotosFailed: (error) => ({
    type: ACTION_TYPES.GET_USER_PHOTOS_FAILED,
    payload: error,
  }),

  getUserPhotosFinish: (photos) => ({
    type: ACTION_TYPES.GET_USER_PHOTOS_FINISH,
    payload: photos,
  }),

  getUserStart: () => ({
    type: ACTION_TYPES.GET_USER_START,
  }),
  getUserFailed: (error) => ({
    type: ACTION_TYPES.GET_USER_FAILED,
    payload: error,
  }),

  getUserFinish: (profile) => ({
    type: ACTION_TYPES.GET_USER_FINISH,
    payload: profile,
  }),
};
