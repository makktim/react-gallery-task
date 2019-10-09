import { PERFORMERVIDEOS } from '../constans';


const loadPerformerVideos = (props) => ({
    type: PERFORMERVIDEOS.LOAD,
    props,
});

const setPerformerVideos = performerImages => ({
    type: PERFORMERVIDEOS.LOAD_SUCCESS,
    performerImages,
});

const setPerformerVideosError = error => ({
    type: PERFORMERVIDEOS.LOAD_FAILED,
    error,
});



export {loadPerformerVideos, setPerformerVideos, setPerformerVideosError}