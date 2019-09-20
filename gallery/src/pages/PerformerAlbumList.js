import React, {useEffect, useReducer, useState} from 'react';
import axios from 'axios';
import lock from '../images/lockicon.png';
import PerformerListReducer, {SET_LIST} from "./performersList/PerformerListReducer";
import PerformerAlbum from "./PerformerAlbum";
import {Link} from "react-router-dom";


// const Gallery = styled.div`
//     width: 100%;
//     background-size: 100%;
//     background-position: center;
//     display: flex;
//     flex-wrap: wrap-reverse;
//     justify-content: center;
// `;
//
// const ImagePublic = styled.img`
//   display: flex;
//   justify-content: center;
//     cursor: pointer;
//     background-color: burlywood;
//     padding-top: 5px;
//     &:hover{
//         opacity: 0.5;
//         border: darkred 1px solid;
//         box-shadow: -1px 1px 3px 3px darkred;
//
//     }
//
// `;
//
// const ImagePrivate = styled.img`
//     cursor: pointer;
//     background-color: burlywood;
//     padding-top: 5px;
//     &:hover{
//         opacity: 0.5;
//         border: darkred 1px solid;
//         box-shadow: -1px 1px 3px 3px darkred;
//     }
// `;
//
// const LockImg = styled.img`
//     position: absolute;
//     margin:15px;
// `;
//
// const GalleryContent = styled.div`
//
//
//      @media screen and ${Device.mobileS} {
//          flex: 100%;
//          margin: 2px;
//      }
//
//      @media screen and ${Device.mobileM} {
//          flex: 100%;
//      }
//
//       @media screen and ${Device.mobileL} {
//          flex: 100%;
//      }
//
//     @media screen and ${Device.tablet} {
//         flex: 49%;
//         margin: 2px;
//     }
//
//     @media screen and ${Device.laptop}{
//         flex: 24%;
//         margin: 2px;
//     }
//
//     @media screen and ${Device.laptopL}{
//         flex: 24%;
//         margin: 2px;
//     }
//
//     @media screen and ${Device.desktop}{
//         flex: 24%;
//         margin: 2px;
//     }
// `;
//
//
// class PerformerAlbumList extends Component {
//
//     handleMouseHover = this.handleMouseHover.bind(this);
//
//     state = {
//         modelPictures: [],
//         isHovering: false
//     }
//
//     handleMouseHover() {
//         this.setState(this.toggleHoverState);
//     }
//
//     toggleHoverState(state) {
//         return {
//             isHovering: !state.isHovering,
//         };
//     }
//
//
//     componentDidMount() {
//         let modelName = this.props.match.params.pid;
//         axios.get('/en/gallery/' + modelName + '/folders')
//             .then(res => {
//                 console.log(res)
//                 this.setState({'modelPictures': res.data.data})
//             })
//     }
//
//
//     render() {
//
//         const {modelPictures} = this.state;
//         const modelPictureList = modelPictures.length ? (
//             modelPictures.map(modelPicture => {
//                 if (modelPicture.privacy === "exclusive") {
//                     return (
//                         <GalleryContent>
//                             {this.state.isHovering && <LockImg className="lockImage" src={lock} alt=""/>}
//                             <ImagePrivate key={modelPicture.pid}
//                                 onMouseEnter={this.handleMouseHover}
//                                 onMouseLeave={this.handleMouseHover}
//                                           onChange={this.handleChange}
//                                           src={modelPicture.previewImageUrl} alt=""/>
//                         </GalleryContent>
//                     )
//
//                 } else {
//                     return (
//                         <GalleryContent>
//                             <ImagePublic key={modelPicture.pid} src={modelPicture.previewImageUrl} alt=""/>
//                         </GalleryContent>
//                     )
//                 }
//
//             })
//         ) : (
//             <GalleryContent>
//                 <p>No Models</p>
//             </GalleryContent>
//
//         );
//
//         return (
//             <Body>
//                 <Gallery>
//                     {modelPictureList}
//                 </Gallery>
//             </Body>
//         );
//     }
//
// }
//
// export default PerformerAlbumList;



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

