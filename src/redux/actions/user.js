import ActionTypes from "../constants/ActionTypes";

export const addLike = payload => {
  return {
    type: ActionTypes.ADD_LIKE,
    payload: payload
  };
};

export const removeLike = payload => {
  return {
    type: ActionTypes.REMOVE_LIKE,
    payload: payload
  };
};

export const addDislike = payload => {
  return {
    type: ActionTypes.ADD_DISLIKE,
    payload: payload
  };
};

export const removeDislike = payload => {
  return {
    type: ActionTypes.REMOVE_DISLIKE,
    payload: payload
  };
};

export const addBookmark = payload => {
  return {
    type: ActionTypes.ADD_BOOKMARK,
    payload: payload
  };
};

export const removeBookmark = payload => {
  return {
    type: ActionTypes.REMOVE_BOOKMARK,
    payload: payload
  };
};
