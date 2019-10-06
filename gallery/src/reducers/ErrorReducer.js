import { PERFORMERS } from "../constans";


const ErrorReducer = (state = null, action) =>{
    switch(action.type){
        case PERFORMERS.LOAD_FAILED:
            return action.error;
        case PERFORMERS.LOAD:
        case PERFORMERS.LOAD_SUCCESS:
            return null;

        default:
            return state;
    }
};

export default ErrorReducer;