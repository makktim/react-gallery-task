import React, { useEffect, useReducer } from 'react';
import axios from 'axios';
import PerformerListReducer, { SET_LIST } from "../PerformerListReducer";
import PerformerAlbum from "./PerformerAlbum";


export default (props) => {
    const [performerAlbumList, dispatch] = useReducer(PerformerListReducer, []);
    const modelName = props.match.params.pid;

    const getList = async () => {
        const { data } = await axios.get('/en/gallery/' + modelName + '/folders');

        dispatch({
            type: SET_LIST,
            list: data.data
        });
    };

    useEffect(() => {
        getList();

    }, []);

    const renderPerformerAlbum = (performerAlbum, index) => {

        const modelName = props.match.params.pid;
        return (
            <PerformerAlbum key={index} performerAlbum={performerAlbum} modelName={modelName} />
        )
    };

    return (
        <div>
            {performerAlbumList.length > 0 && performerAlbumList.map(renderPerformerAlbum)}
        </div>
    )


};

