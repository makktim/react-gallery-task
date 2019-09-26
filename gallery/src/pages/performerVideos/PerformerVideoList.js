import PerformerListReducer, { SET_LIST } from "../PerformerListReducer";
import React, { useEffect, useReducer } from 'react';
import axios from "axios";
import PerformerVideo from "./PerformerVideo";

export default (props) => {

    console.log(props);
    const [performerVideoList, dispatch] = useReducer(PerformerListReducer, []);

    const modelName = props.match.params.pid;
    const privacy = props.match.params.privacy;

    const getList = async () => {
        const { data } = await axios.get('/en/gallery/' + modelName + '/video-folder-content/' + privacy + '/')
        console.log(modelName)
        console.log(data)

        dispatch({
            type: SET_LIST,
            list: data.data
        });
    };

    useEffect(() => {
        getList();

    }, []);

    const renderPerformerVideo = (performerVideo, index) => {
        return (
            <PerformerVideo key={index} performerImage={performerVideo} />
        )
    };

    return (
        <div>
            {performerVideoList.length > 0 && performerVideoList.map(renderPerformerVideo)}
        </div>
    )


};