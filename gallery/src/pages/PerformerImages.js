import React, {Component} from 'react';
// import axios from 'axios';
// import styled from "styled-components";
// import { Device } from './Device';


class PerformerImages extends Component{
    state = {
        modelName : null
    };

    componentDidMount() {
        let modelName = this.props.match.params.pid;
        this.setState({modelName: modelName})
    }

    render(){
        return(
            <h2>{this.state.modelName}</h2>
        )
    }
}

// class PerformerImages extends Component {
//     state = {
//         modelName: null
//     };
//
//     componentDidMount() {
//         let modelName = this.props.match.params.pid;
//         axios.get('/en/gallery/' + modelName + '/folders')
//             .then(res => {
//                 this.setState({
//                     modelName: res.data.data
//                 })
//                 console.log(res)
//             })
//         this.setState({
//             modelName: modelName
//         })
//     }
//
//     render() {
//         const modelName = this.state.modelName ? (
//             <div>
//                 <h2> {this.state.modelName.pid}</h2>
//             </div>
//
//         ) : (<h2>Loading...</h2>)
//
//         return (
//             <h2> {modelName}</h2>
//         )
//     }
//
// }

export default PerformerImages;