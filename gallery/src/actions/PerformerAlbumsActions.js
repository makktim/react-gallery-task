import {PERFORMERALBUMS} from '../constans';


const loadPerformerAlbums = (props) => ({
    type: PERFORMERALBUMS.LOAD,
    props,
});

const setPerformerAlbums = performerAlbums => ({
    type: PERFORMERALBUMS.LOAD_SUCCESS,
    performerAlbums,
});

const setPerformerAlbumsError = error => ({
    type: PERFORMERALBUMS.LOAD_FAILED,
    error,
});


export {loadPerformerAlbums, setPerformerAlbums, setPerformerAlbumsError}