import React, {useEffect} from 'react';
import Performer from "./Performer";
import {connect} from 'react-redux';
import {loadImages} from "../../actions";




const PerformerList = (props) => {

    useEffect(() => {
        props.loadImages();

    }, []);

        const {performers} = props;
        const renderPerformer = (performer, index) => {
            return (

                <Performer key={index} performer={performer}/>
            )
        };

        return (
            <div>
                {performers.length > 0 && performers.map(renderPerformer)}
            </div>
        )
};


const mapStateToProps = ({isLoading, performers, error}) => ({
    isLoading,
    performers,
    error,
});

const mapDispatchToProps = dispatch => ({
    loadImages: () => dispatch(loadImages()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PerformerList);

