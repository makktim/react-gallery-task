import React, { Component, useEffect, useReducer } from 'react';
import axios from 'axios';
import PerformerListReducer, { SET_LIST } from "../PerformerListReducer";
import PerformerAlbum from "./PerformerAlbum";
import {loadImages} from "../../actions";
import {connect} from "react-redux";
import {Caption, GalleryImage, Img, ImgBox, LockImg, PrivateTransparentBox, PublicTransparentBox} from "../style";
import {Link} from "react-router-dom";
import {loadPerformerAlbums} from "../../actions/PerformerAlbumsActions";
import lock from "../images/229652.png";


class PerformerAlbumList extends Component {

    componentDidMount() {
        this.props.loadPerformerAlbums(this.props);
    }

    render() {
        const {performerAlbums} = this.props;
        const modelName = this.props.match.params.pid;
        console.log("performeralbum:", this.props.performerAlbums)
        const performerAlbumList = performerAlbums.length ? (
            performerAlbums.map(performerAlbum => {
                if (performerAlbum.privacy === "exclusive") {
                    if (performerAlbum.type === "video") {
                        return (
                            <GalleryImage>
                                <ImgBox>
                                    <Link to={'/en/gallery/' + modelName + '/video-folder-content/' + performerAlbum.privacy + '/'}>
                                        <LockImg src={lock} alt=""/>
                                        <Img src={performerAlbum.previewImageUrl} alt=""/>
                                        <PrivateTransparentBox>
                                            <Caption>
                                                <p>video</p>
                                            </Caption>
                                        </PrivateTransparentBox>
                                    </Link>
                                </ImgBox>
                            </GalleryImage>
                        )
                    } else {
                        return (
                            <GalleryImage>
                                <ImgBox>
                                    <LockImg src={lock} alt=""/>
                                    <Img src={performerAlbum.previewImageUrl} alt=""/>
                                    <PrivateTransparentBox>
                                        <Caption>
                                            <p>{performerAlbum.title}</p>
                                        </Caption>
                                    </PrivateTransparentBox>
                                </ImgBox>
                            </GalleryImage>
                        )
                    }
                }
                if (performerAlbum.privacy === "public") {
                    if (performerAlbum.type === "video") {
                        return (
                            <GalleryImage>
                                <ImgBox>
                                    <Link to={'/en/gallery/' + modelName + '/video-folder-content/' + performerAlbum.privacy + '/'}>
                                        <Img src={performerAlbum.previewImageUrl} alt=""/>
                                        <PrivateTransparentBox>
                                            <Caption>
                                                <p>video</p>
                                            </Caption>
                                        </PrivateTransparentBox>
                                    </Link>
                                </ImgBox>
                            </GalleryImage>
                        )
                    } else {
                        return (
                            <GalleryImage>
                                <ImgBox>
                                    <Link to={'/en/gallery/' + modelName + '/image-folder-content/' + performerAlbum.id + "/"}>
                                        <Img src={performerAlbum.previewImageUrl} alt=""/>
                                        <PublicTransparentBox>
                                            <Caption>
                                                <p>{performerAlbum.title}</p>
                                            </Caption>
                                        </PublicTransparentBox>
                                    </Link>
                                </ImgBox>
                            </GalleryImage>
                        )
                    }
                }
            })
        ) : (
            <div>
                <p>No Models</p>
            </div>
        );
        return (
            <body>
            <div>
                {performerAlbumList}
            </div>
            </body>
        );
    }

}

const mapStateToProps = ({ isLoading, performerAlbums, error }) => ({
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
)
(PerformerAlbumList);



// export default (props) => {
//
//
//
//     const renderPerformerAlbum = (performerAlbum, index) => {
//
//         const modelName = props.match.params.pid;
//
//         const privacy = performerAlbum.privacy;
//
//         return (
//             <PerformerAlbum key={index} performerAlbum={performerAlbum} modelName={modelName} privacy={privacy} />
//         )
//     };
//
//     return (
//         <div>
//             {performerAlbumList.length > 0 && performerAlbumList.map(renderPerformerAlbum)}
//         </div>
//     )
//
//
// };

