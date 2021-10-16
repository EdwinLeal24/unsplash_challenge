import { ACTION_TYPES } from "./types";

export const initialState = {
  listPhotos: [],
  listByKeyword: [],
  errorPhotos: null,
  isLoading: false,
  keyword: "",
  userPhotos: [],
  errorUserPhotos: null,
  errorUserProfile: null,
  userProfile: "",
};

export const appReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.GET_PHOTOS_START:
    case ACTION_TYPES.GET_USER_PHOTOS_START:
    case ACTION_TYPES.GET_USER_START:
      return {
        ...state,
        isLoading: true,
      };
    case ACTION_TYPES.GET_PHOTOS_FAILED:
      return {
        ...state,
        errorPhotos: action.payload,
      };
    case ACTION_TYPES.GET_PHOTOS_FINISH:
      return {
        ...state,
        listPhotos: action.payload,
        isLoading: false,
        keyword: "",
      };
    case ACTION_TYPES.SEARCH_CHANGED:
      return {
        ...state,
        keyword: action.payload,
      };
    case ACTION_TYPES.GET_USER_PHOTOS_FAILED:
      return {
        ...state,
        errorUserPhotos: action.payload,
      };
    case ACTION_TYPES.GET_USER_PHOTOS_FINISH:
      return {
        ...state,
        userPhotos: action.payload,
        isLoading: false,
      };

    case ACTION_TYPES.GET_USER_FAILED:
      return {
        ...state,
        errorUserProfile: action.payload,
      };
    case ACTION_TYPES.GET_USER_FINISH:
      return {
        ...state,
        userProfile: action.payload,
        isLoading: false,
      };

    default:
      return state;
  }
};
