import { call, put, select, takeLatest } from "redux-saga/effects";
import { followerActions, followerTypes } from "../store/modules/follower";

import GitHubAPI from "../api/GitHubAPIService";

export function* getFollowers(action) {
  // console.log("getFollowers", action);
  const url = action.payload;
  const { response, error } = yield call(GitHubAPI.getDataFromURL, url, 12);

  if (response) {
    // console.log(response);
    yield put(followerActions.followerSuccess(response.data));
  } else {
    // console.log(error);
    yield put(followerActions.followerFailure(error));
  }
}

function* watchFollowerRequest() {
  yield takeLatest(followerTypes.FOLLOWER_REQUEST, getFollowers);
}

const followerSaga = [watchFollowerRequest()];
export default followerSaga;
