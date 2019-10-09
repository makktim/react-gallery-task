import axios from "axios";

const fetchPerformers = async () => {
    const response = await fetch('/en/list-page-ajax/show-more-json/0/');
        const res = await response.json();
            console.log(res);
            if(res.status >= 400){
                throw new Error(res.error)
        }
    return res;

};


const fetchPerformerAlbums = async (performerName, performerId) => {
    console.log("api")
    console.log(performerName)
    console.log(performerId)
    const response = await fetch('/en/gallery/' + performerName + '/folders');
    const res = await response.json();
    console.log(res);
    if(res.status >= 400){
        throw new Error(res.error)
    }
    return res;

};

const fetchPerformerAlbumImages = async (performerName,performerId ) => {
    console.log(performerId)
    const response = await fetch('/en/gallery/' + performerName + '/image-folder-content/' + performerId);
    const res = await response.json();
    console.log(res);
    if(res.status >= 400){
        throw new Error(res.error)
    }
    return res;

};

const fetchPerformerVideos = async (performerName, privacy) => {
    const response = await fetch('/en/gallery/' + performerName + '/video-folder-content/' + privacy + '/');
    const res = await response.json();
    console.log(res);
    if(res.status >= 400){
        throw new Error(res.error)
    }
    return res;

};

export {fetchPerformers, fetchPerformerAlbums, fetchPerformerAlbumImages, fetchPerformerVideos };



