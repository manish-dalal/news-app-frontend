import { all, call, put, takeLatest } from "redux-saga/effects";
import ActionTypes from "../constants/ActionTypes";
import APICaller from "utils/APICaller";

export function* getItems() {
  try {
    const response = yield call(APICaller, { method: "GET", reqUrl: "" });
    yield put({
      type: ActionTypes.GET_ITEMS_SUCCESS,
      payload: response.data ? response.data.articles : []
    });
  } catch (err) {
    yield put({
      type: ActionTypes.GET_ITEMS_FAILURE,
      payload: []
    });
  }
}

export default function* root() {
  yield all([takeLatest(ActionTypes.GET_ITEMS, getItems)]);
}
