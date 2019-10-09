import { PERFORMERVIDEOS } from "../constans";


const performersReducer = (state = [], action) =>{
    if(action.type === PERFORMERVIDEOS.LOAD_SUCCESS){
        return [ ...state, ...action.performerVideos];
    }
    return state;
};

export default performersReducer;