import React, {useEffect, useReducer} from 'react';
import axios from 'axios';
import {fetchData} from "../../modules/ui/ApiService";
import getApiData from "../../modules/ui/Sagas"
import Performer from "./Performer";
import PerformerListReducer, {SET_LIST} from '../../modules/reducers/PerformerListReducer';
import connect from "react-redux/lib/connect/connect";



function PerformerList(props) {

    // fetchData().then(data => this.props.performer(data));

    const renderPerformer = (performer, index) => {
        return (

            <Performer key={index} performer={performer}/>
        )
    };

    return (

        <div>
            {PerformerList.length > 0 && PerformerList.map(renderPerformer)}
        </div>
    )
}

const mapStateToProps = function(state) {
    return {
        performers: state.performer
    }
};

export default connect(mapStateToProps, {fetchData})(PerformerList);



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

