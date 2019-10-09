import React, {useEffect, useReducer, Component} from 'react';
import {Caption, GalleryImage, Img, ImgBox, PrivateTransparentBox, PublicTransparentBox} from "../style";
import {loadPerformerImages} from "../../actions/PerformerImagesAction";
import {connect} from "react-redux";
import Modal from "../Modal";
import {PlayButton} from "../performerVideos/VideoStyle";

class PerformerImageList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
    }

    componentDidMount() {
        this.props.loadPerformerImages(this.props);
    }

    render() {
        const {performerImages} = this.props;
        console.log(performerImages);
        const ImageList = performerImages.length ? (
            performerImages.map(performerImage => {
                return (
                    <GalleryImage>
                        <ImgBox>
                            <Img key={performerImage.id} src={performerImage.previewImageUrl} alt=""/>
                            <PublicTransparentBox>
                                <Caption>
                                    <p>{performerImage.title}</p>
                                </Caption>
                            </PublicTransparentBox>
                        </ImgBox>
                    </GalleryImage>
                )
            })
        ) : (
            <div>
                <p>No Models</p>
            </div>
        );
        return (
            <body>
            <div>
                {ImageList}
            </div>
            </body>
        );
    }

}

const mapStateToProps = ({isLoading, performerImages, error}) => ({
    isLoading,
    performerImages,
    error,
});

const mapDispatchToProps = dispatch => ({
    loadPerformerImages: (props) => dispatch(loadPerformerImages(props)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)
(PerformerImageList);