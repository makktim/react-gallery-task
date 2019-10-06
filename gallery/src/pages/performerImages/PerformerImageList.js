import PerformerListReducer, { SET_LIST } from "../PerformerListReducer";
import React, { useEffect, useReducer } from 'react';
import axios from "axios";
import PerformerImage from "./PerformerImage";

export default (props) => {

    console.log(props);
    const [performerImageList, fetchData] = useReducer(PerformerListReducer, []);
    //
    // const modelName = props.match.params.pid;
    // const folderId = props.match.params.id;
    //
    // const getList = async () => {
    //     const { data } = await axios.get('/en/gallery/' + modelName + '/image-folder-content/' + folderId)
    //     console.log(modelName)
    //     console.log(data)
    //
    //     dispatch({
    //         type: SET_LIST,
    //         list: data.data
    //     });
    // };
    //
    // useEffect(() => {
    //     getList();
    //
    // }, []);

    const renderPerformerImage = (performerImage, index) => {
        return (
            <PerformerImage key={index} performerImage={performerImage} />
        )
    };

    return (
        <div>
            {performerImageList.length > 0 && performerImageList.map(renderPerformerImage)}
        </div>
    )


};