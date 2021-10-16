import { httpManager } from "./api/httpManager";

const ACCESS_KEY = "81yfAiIO9BuLY8SLSRDFKEF3-GdbwnXCR3Xaqe797T4";
const pageNumber = 50;

export const getPhotos = async (keyword) => {
  keyword = keyword || "latest";
  const url = `/search/photos?per_page=${pageNumber}&query=${keyword}&client_id=${ACCESS_KEY}`;
  try {
    const { data } = await httpManager.get(url);

    return [null, data.results];
  } catch (error) {
    return [error, null];
  }
};

export const getUser = async (user) => {
  const url = `/users/${user}?client_id=${ACCESS_KEY}`;
  try {
    const { data } = await httpManager.get(url);

    return [null, data];
  } catch (error) {
    return [error, null];
  }
};

export const getUserPhotos = async (user) => {
  const url = `/users/${user}/photos?client_id=${ACCESS_KEY}&per_page=${pageNumber}`;
  try {
    const { data } = await httpManager.get(url);

    return [null, data];
  } catch (error) {
    return [error, null];
  }
};
