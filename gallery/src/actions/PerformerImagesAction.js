import {PERFORMERIMAGES} from '../constans';


const loadPerformerImages = (props) => ({
    type: PERFORMERIMAGES.LOAD,
    props,
});

const setPerformerImages = performerImages => ({
    type: PERFORMERIMAGES.LOAD_SUCCESS,
    performerImages,
});

const setPerformerImagesError = error => ({
    type: PERFORMERIMAGES.LOAD_FAILED,
    error,
});


export {loadPerformerImages, setPerformerImages, setPerformerImagesError}