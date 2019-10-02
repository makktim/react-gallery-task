import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

import { REQUEST_API_DATA, receiveApiData } from "./Actions";
import { fetchData } from "./ApiService";


function* getApiData(action) {
    try {
        // do api call
        const data = yield call(fetchData);
        yield put(receiveApiData(data));
    } catch (e) {
        console.log(e);
    }
}

export default function* mySaga() {
    console.log("saga");
    console.log(fetchData())
    yield takeLatest(REQUEST_API_DATA, getApiData);
}
