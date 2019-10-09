import {PERFORMERVIDEOS} from '../constans';


const loadPerformerVideos = (props) => ({
    type: PERFORMERVIDEOS.LOAD,
    props,
});

const setPerformerVideos = performerVideos => ({
    type: PERFORMERVIDEOS.LOAD_SUCCESS,
    performerVideos,
});

const setPerformerVideosError = error => ({
    type: PERFORMERVIDEOS.LOAD_FAILED,
    error,
});


export {loadPerformerVideos, setPerformerVideos, setPerformerVideosError}