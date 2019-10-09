import { PERFORMERS } from "../constans";


const performersReducer = (state = [], action) =>{
    if(action.type === PERFORMERS.LOAD_SUCCESS){
        return [ ...state, ...action.performers];
    }
    return state;
};

export default performersReducer;