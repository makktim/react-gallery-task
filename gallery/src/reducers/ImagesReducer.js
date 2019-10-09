import {PERFORMERIMAGES} from "../constans";


const ImagesReducer = (state = [], action) => {
    if (action.type === PERFORMERIMAGES.LOAD_SUCCESS) {
        return [...state, ...action.performerImages];
    }
    return state;
};

export default ImagesReducer;