import {PERFORMERS} from "../constans";



const performersReducer = (state = [], action) => {
    if (action.type === PERFORMERS.LOAD_SUCCESS) {
        return [...action.performers];
    }
    return state;
};

export default performersReducer;