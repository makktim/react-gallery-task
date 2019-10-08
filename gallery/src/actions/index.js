import { PERFORMERS } from '../constans';


const loadImages = () => ({
    type: PERFORMERS.LOAD,
});

const setImages = performers => ({
    type: PERFORMERS.LOAD_SUCCESS,
    performers,
});

const setError = error => ({
    type: PERFORMERS.LOAD_FAILED,
    error,
});



export {loadImages, setImages, setError}