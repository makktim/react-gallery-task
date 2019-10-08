import PerformerListReducer, { SET_LIST } from "../PerformerListReducer";
import React, { useEffect, useReducer } from 'react';
import axios from "axios";
import PerformerVideo from "./PerformerVideo";

export default (props) => {

    console.log(props);
    const [performerVideoList, fetchData] = useReducer(PerformerListReducer, []);


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