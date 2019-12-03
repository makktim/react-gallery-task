import {PERFORMERALBUMS} from "../constans";


const AlbumReducer = (state = [], action) => {
    if (action.type === PERFORMERALBUMS.LOAD_SUCCESS) {
        return [...action.performerAlbums];
    }
    return state;
};



export default AlbumReducer;