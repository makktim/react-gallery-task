import {PERFORMERS, PERFORMERALBUMS, PERFORMERIMAGES, PERFORMERVIDEOS} from "../constans";
import { takeEvery, call, put} from 'redux-saga/effects';
import {fetchPerformers, fetchPerformerAlbums, fetchPerformerAlbumImages, fetchPerformerVideos} from "../api";
import { setImages, setError} from "../actions";
import {setPerformerAlbums, setPerformerAlbumsError} from "../actions/PerformerAlbumsActions";
import {setPerformerImages, setPerformerImagessError} from "../actions/PerformerImagesAction";
import {setPerformerVideos, setPerformerVideosError} from "../actions/PerformerVideosAction";


function* handlePerformersLoad() {
    console.log("performers");
    try{
        const performers = yield call(fetchPerformers);
        console.log(performers);
        yield put((setImages(performers.data.content.performers)));
    } catch (error){
        yield put((setError(error.toString())));
    }


}

function* handlePerformersAlbumsLoad(props) {
    console.log("albums");
    try{
        const performerName = props.props.match.params.pid;
        const performerId = props.props
        const performerAlbums = yield call(fetchPerformerAlbums, performerName, performerId);
        console.log(performerAlbums);
        yield put((setPerformerAlbums(performerAlbums.data)));
    } catch (error){
        yield put((setPerformerAlbumsError(error.toString())));
    }


}

function* handlePerformersImagesLoad(props) {
    console.log("images");
    try{
        console.log(props);
        const performerName = props.props.match.params.pid;
        const id = props.props.match.params.id;
        console.log(id);
        const performerImages = yield call(fetchPerformerAlbumImages, performerName, id);
        console.log(performerImages);
        yield put((setPerformerImages(performerImages.data)));
    } catch (error){
        yield put((setPerformerImagessError(error.toString())));
    }


}

function* handlePerformersVideosLoad(props) {
    console.log("videos");
    try{
        console.log(props);
        const performerName = props.props.match.params.pid;
        const privacy = props.props.match.params.privacy;
        const performerVideos = yield call(fetchPerformerVideos, performerName, privacy);
        console.log(performerVideos);
        yield put((setPerformerVideos(performerVideos.data)));
    } catch (error){
        yield put((setPerformerVideosError(error.toString())));
    }


}

export default function* watchImagesLoad() {
    yield takeEvery(PERFORMERS.LOAD, handlePerformersLoad);
    yield takeEvery(PERFORMERALBUMS.LOAD, handlePerformersAlbumsLoad);
    yield takeEvery(PERFORMERIMAGES.LOAD, handlePerformersImagesLoad);
    yield takeEvery(PERFORMERVIDEOS.LOAD, handlePerformersVideosLoad);
}


