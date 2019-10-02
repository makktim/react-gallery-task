
import { RECEIVE_API_DATA } from "../ui/Actions";


export default (state = {}, { type, data }) => {
    switch (type) {
        case RECEIVE_API_DATA:
            return data;
        default:
            return state;
    }
};


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