import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {loadPerformerAlbums} from "../../actions/PerformerAlbumsActions";
import PerformerAlbum from "./PerformerAlbum";



const PerformerAlbumList = (props) => {

    useEffect(() => {
        props.loadPerformerAlbums(props);

    }, []);

    const {performerAlbums} = props;
    const modelName = props.match.params.pid;

    const renderPerformerAlbum = (performerAlbum, index) => {
        return (

            <PerformerAlbum key={index} performerAlbum={performerAlbum} modelName={modelName}/>
        )
    };

    return (
        <div>
            {performerAlbums.length > 0 && performerAlbums.map(renderPerformerAlbum)}
        </div>
    )
};

const mapStateToProps = ({isLoading, performerAlbums, error}) => ({
    isLoading,
    performerAlbums,
    error,
});

const mapDispatchToProps = dispatch => ({
    loadPerformerAlbums: (props) => dispatch(loadPerformerAlbums(props)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PerformerAlbumList);