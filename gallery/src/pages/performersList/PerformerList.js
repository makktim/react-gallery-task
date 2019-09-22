import React, { useEffect, useReducer } from 'react';
import axios from 'axios';
import Performer from "./Performer";
import PerformerListReducer, { SET_LIST } from '../PerformerListReducer';


export default () => {
    const [performerList, dispatch] = useReducer(PerformerListReducer, []);

    const getList = async () => {
        const { data } = await axios.get('/en/list-page-ajax/show-more-json/0/')
        dispatch({
            type: SET_LIST,
            list: data.data.content.performers
        });
    };

    useEffect(() => {
        getList();

    }, []);

    const renderPerformer = (performer, index) => {
        return (

            <Performer key={index} performer={performer} />
        )
    };

    return (
        <div>
            {performerList.length > 0 && performerList.map(renderPerformer)}
        </div>
    )


};
