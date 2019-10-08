import PerformerListReducer, { SET_LIST } from "../PerformerListReducer";
import React, { useEffect, useReducer } from 'react';
import axios from "axios";
import PerformerImage from "./PerformerImage";

export default (props) => {

    console.log(props);
    const [performerImageList, fetchData] = useReducer(PerformerListReducer, []);


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