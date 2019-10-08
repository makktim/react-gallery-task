import { combineReducers } from "redux";

import LoadingReducer from "./LoadingReducer";
import ImagesReducer from "./ImagesReducer";
import ErrorReducer from "./ErrorReducer";
import AlbumReducer from "./AlbumReducer";

const rootreducer = combineReducers({
    isLoading: LoadingReducer,
    performers: ImagesReducer,
    performerAlbums: AlbumReducer,
    error: ErrorReducer,
});


export default rootreducer;