

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


export const SET_LIST = 'SET_LIST';

export default (state, action) => {
    switch (action.type) {
        case SET_LIST:
            return action.list;
        default:
            return state;
    }
}