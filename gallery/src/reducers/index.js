import { combineReducers } from "redux";

import LoadingReducer from "./LoadingReducer";
import ImagesReducer from "./ImagesReducer";
import ErrorReducer from "./ErrorReducer";

const rootreducer = combineReducers({
    isLoading: LoadingReducer,
    performers: ImagesReducer,
    error: ErrorReducer,
});


export default rootreducer;