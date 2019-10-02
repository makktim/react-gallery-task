import React, {useEffect, useReducer} from 'react';
import axios from 'axios';
import {fetchData} from "../../modules/ui/ApiService";
import getApiData from "../../modules/ui/Sagas"
import Performer from "./Performer";
import PerformerListReducer, {SET_LIST} from '../../modules/reducers/PerformerListReducer';
import {bindActionCreators, combineReducers} from "redux";
import {receiveApiData, requestApiData} from "../../modules/ui/Actions";
import store from "../../modules/ui/Store";
import {Provider, useSelector} from "react-redux";


import { connect } from 'react-redux';

const PerformerList = (props) => {
    // const data = useSelector((state) => state);
    const { data } = props;
    console.log(props);

    return (
        <ul>
            {data.map((data) => (
                <li key={data.id}>
                    <span>{data.pid}</span>
                </li>
            ))}
        </ul>
    );
};

const mapStateToProps = (state) => ({
    data: state.data
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({ requestApiData }, dispatch);


export default connect(mapStateToProps, {combineReducers })(PerformerList);

// export default (props) => {
//
//     console.log(props);
//
//     // fetchData().then(data => this.props.performer(data));
//
//     const renderPerformer = (performer, index) => {
//         return (
//
//             <Performer key={index} performer={performer}/>
//         )
//
//     };
//
//     return (
//         <div>
//             {fetchData.length > 0 && fetchData.map(renderPerformer)}
//         </div>
//     )
//
//
// }

// const mapStateToProps = function(state) {
//     return {
//         // performers: state.performer
//     }
// };


// const mapStateToProps = state => ({ performer: state.performer });
//
// const mapDispatchToProps = dispatch =>
//     bindActionCreators({ requestApiData }, dispatch);
//
// export default connect(null, null)(PerformerList);




// export default ()  => {
//
//     const [performerList, mapDispatchToProps] = useReducer(PerformerListReducer, []);


    // const getList = async () => {
    //     const {data} = await axios.get('/en/list-page-ajax/show-more-json/0/')

        // dispatch({
        //     type: SET_LIST,
        //     list: data.data.content.performers
        // });
    // }

    //
    // useEffect(() => {
    //     fetchData()
    //     console.log(fetchData())
    //     export default connect(
    //         mapStateToProps,
    //         mapDispatchToProps
    //     )(PerformerList)
    // }, []);

//     const renderPerformer = (performer, index) => {
//         return (
//
//             <Performer key={index} performer={performer}/>
//         )
//     };
//
//     return (
//         <div>
//             {fetchData.length > 0 && fetchData.map(renderPerformer)}
//         </div>
//     )
//
//
// };

