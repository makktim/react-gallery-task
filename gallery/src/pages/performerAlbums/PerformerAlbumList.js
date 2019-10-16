import React, {Component} from 'react';
import {connect} from "react-redux";
import {loadPerformerAlbums} from "../../actions/PerformerAlbumsActions";
import PerformerAlbum from "./PerformerAlbum";


class PerformerAlbumList extends Component {

    componentDidMount() {
        this.props.loadPerformerAlbums(this.props);
    }

    render() {
        const {performerAlbums} = this.props;
        const modelName = this.props.match.params.pid;

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
    }
}

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