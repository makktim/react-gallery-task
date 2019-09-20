import React, {useEffect, useReducer} from 'react';
import axios from 'axios';
import PerformerListReducer, {SET_LIST} from "../performersList/PerformerListReducer";
import PerformerAlbum from "./PerformerAlbum";


export default (props) => {
    const [performerAlbumList, dispatch] = useReducer(PerformerListReducer, []);
    let modelName = props.match.params.pid;

    const getList = async () => {
        const {data} = await axios.get('/en/gallery/' + modelName + '/folders')
        console.log(data);
        console.log(props);
        dispatch({
            type: SET_LIST,
            list: data.data
        });
    };

    useEffect(() => {
        getList();

    }, []);

    const renderPerformerAlbum = (performerAlbum, index) => {
        let modelName = props.match.params.pid;
        return(
            <PerformerAlbum key={index} performerAlbum={performerAlbum} modelName = {modelName} />
        )
    };

    return (
        <div>
            {performerAlbumList.length > 0 && performerAlbumList.map(renderPerformerAlbum)}
        </div>
    )


};

