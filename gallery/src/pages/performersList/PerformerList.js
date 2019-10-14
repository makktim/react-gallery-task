import React, {Component} from 'react';
import Performer from "./Performer";
import {connect} from 'react-redux';
import {loadImages} from "../../actions";


// function PerformerList(props) {
//
//     const performerList = props.loadImages();
//
//
//     useEffect((props) => {
//         console.log(performerList)
//
//     }, []);
//
//
//
//     const renderPerformer = (performer, index) => {
//         return (
//
//             <Performer key={index} performer={performer}/>
//         )
//     };
//
//     return (
//         <div>
//             {performerList.length > 0 && performerList.map(renderPerformer)}
//         </div>
//     )
//
// }
class PerformerList extends Component {

    componentDidMount() {
        this.props.loadImages()
    }


    render() {
        const {performers} = this.props;
        const renderPerformer = (performer, index) => {
        return (

            <Performer key={index} performer={performer}/>
        )
    };

    return (
        <div>
            {performers.length > 0 && performers.map(renderPerformer)}
        </div>
    )}

}

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

