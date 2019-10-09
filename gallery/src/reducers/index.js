import { combineReducers } from "redux";

import LoadingReducer from "./LoadingReducer";
import performersReducer from "./PerformersReducer";
import ErrorReducer from "./ErrorReducer";
import AlbumReducer from "./AlbumReducer";
import ImagesReducer from "./ImagesReducer";
import VideoReducer from "./VideoReducer";


const rootreducer = combineReducers({
    isLoading: LoadingReducer,
    performers: performersReducer,
    performerAlbums: AlbumReducer,
    performerImages: ImagesReducer,
    performerVideos: VideoReducer,
    error: ErrorReducer,
});


export default rootreducer;