
import { RECEIVE_API_DATA } from "../ui/Actions";


export default (state = {}, { type, data }) => {
    switch (type) {
        case RECEIVE_API_DATA:
            console.log("RECEIVE_API_DATA");
            console.log(data);
            return data;
        default:
            console.log("default");
            return state;
    }
};



// function reducer(state, action) {
//     switch (action.type) {
//         case 'ADD_TODO':
//             return {
//                 ...state,
//                 todos: [...state.todos, action.payload]
//             };
//
//     }
// }


// export const SET_LIST = 'SET_LIST';
//
// export default (state, action) => {
//     switch (action.type) {
//         case SET_LIST:
//             return action.list;
//         default:
//             return state;
//     }
// }