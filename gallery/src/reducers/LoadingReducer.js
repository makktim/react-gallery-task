import { PERFORMERS } from "../constans";


const LoadingReducer = (state = false, action) =>{
    switch(action.type){
        case PERFORMERS.LOAD:
            return true;
        case PERFORMERS.LOAD_SUCCESS:
            return false;
        case PERFORMERS.LOAD_FAILED:
            return false;

        default:
            return state;
    }
};

export default LoadingReducer;