export const SET_LIST = 'SET_LIST';

export default (state, action) => {
    switch(action.type){
        case SET_LIST:
            return action.list
        default:
            return state;
    }
}