import ActionTypes from "../constants/ActionTypes";

const initialState = {
  likes: [],
  dislikes: [],
  bookmarks: []
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_LIKE:
      return {
        ...state,
        likes: [...state.likes, action.payload],
        dislikes: state.dislikes.filter(title => title !== action.payload)
      };
    case ActionTypes.REMOVE_LIKE:
      return {
        ...state,
        likes: state.likes.filter(title => title !== action.payload)
      };
    case ActionTypes.ADD_DISLIKE:
      return {
        ...state,
        dislikes: [...state.dislikes, action.payload],
        likes: state.likes.filter(title => title !== action.payload)
      };
    case ActionTypes.REMOVE_DISLIKE:
      return {
        ...state,
        dislikes: state.dislikes.filter(title => title !== action.payload)
      };
    case ActionTypes.ADD_BOOKMARK:
      return {
        ...state,
        bookmarks: [...state.bookmarks, action.payload]
      };
    case ActionTypes.REMOVE_BOOKMARK:
      return {
        ...state,
        bookmarks: state.bookmarks.filter(title => title !== action.payload)
      };
    default:
      return state;
  }
};

export default userReducer;
