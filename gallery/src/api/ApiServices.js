export const fetchPerformers = async () => {
    const response = await fetch('/en/list-page-ajax/show-more-json/0/');
    const res = await response.json();
    if (res.status >= 400) {
        throw new Error(res.error)
    }
    return res;

};



export const fetchPerformerAlbums = async (performerName) => {
    const response = await fetch('/en/gallery/' + performerName + '/folders');
    const res = await response.json();
    if (res.status >= 400) {
        throw new Error(res.error)
    }
    return res;

};

export const fetchPerformerAlbumImages = async (performerName, performerId) => {
    const response = await fetch('/en/gallery/' + performerName + '/image-folder-content/' + performerId);
    const res = await response.json();
    if (res.status >= 400) {
        throw new Error(res.error)
    }
    return res;

};

export const fetchPerformerVideos = async (performerName, privacy) => {
    const response = await fetch('/en/gallery/' + performerName + '/video-folder-content/' + privacy + '/');
    const res = await response.json();
    if (res.status >= 400) {
        throw new Error(res.error)
    }
    return res;

};




