import React, { useEffect, useReducer } from 'react';
import axios from 'axios';
import PerformerListReducer, {SET_LIST} from "./PerformerListReducer";


export function AlbumApi () {
    const [performerAlbumList, dispatch] = useReducer(PerformerListReducer, []);
    const modelName = props.match.params.pid;

    const getList = async () => {
        const {data} = await axios.get('/en/gallery/' + modelName + '/folders');

        dispatch({
            type: SET_LIST,
            list: data.data
        });
    };

    useEffect(() => {
        getList();

    }, []);
};