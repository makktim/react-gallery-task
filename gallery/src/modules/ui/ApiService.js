import axios from 'axios';
import React, { useEffect, useReducer } from 'react';
import PerformerListReducer, {SET_LIST} from "../reducers/PerformerListReducer";
import { RECEIVE_API_DATA } from "../ui/Actions";



export const fetchData = async () => {
    try {
        const response = await fetch('/en/list-page-ajax/show-more-json/0/');
        const data = await response.json();
        return data.data.content.performers
    } catch (e) {
        console.log(e);
    }
};




// export const fetchData = () => dispatch => {
//         fetch('/en/list-page-ajax/show-more-json/0/')
//         .then(res => res.json())
//         .then(performers =>
//         dispatch({
//             type: RECEIVE_API_DATA,
//             payload: performers
//         }))
// };




// export function loadPerformerList(){
//
//     return(dispatch)=>{
//         return axios.get('/en/list-page-ajax/show-more-json/0/').then((data)=>{
//             dispatch(getPerformerList(data.data.content.performers))
//         })
//     }
// }
//
// export function getPerformerList(performers) {
//     return{
//          type: SET_LIST,
//          list: performers
//     }
// }