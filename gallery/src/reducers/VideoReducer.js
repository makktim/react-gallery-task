import {PERFORMERVIDEOS} from "../constans";


const VideoReducer = (state = [], action) => {
    if (action.type === PERFORMERVIDEOS.LOAD_SUCCESS) {
        return [...state, ...action.performerVideos];
    }
    return state;
};

export default VideoReducer;