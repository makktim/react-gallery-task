import PerformerListReducer, { SET_LIST } from "../PerformerListReducer";
import React, { useEffect, useReducer, Component } from 'react';
import axios from "axios";
import PerformerImage from "./PerformerImage";
import {Caption, GalleryImage, Img, ImgBox, PrivateTransparentBox, PublicTransparentBox} from "../style";
import {Link} from "react-router-dom";
import {loadPerformerImages} from "../../actions/PerformerImagesAction";
import {connect} from "react-redux";

class PerformerImageList extends Component {

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
                            <Img src={performerImage.previewImageUrl} alt=""/>
                            <PublicTransparentBox>
                                <Caption>
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

const mapStateToProps = ({ isLoading, performerImages, error }) => ({
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



















// export default (props) => {
//
//     console.log(props);
//     const [performerImageList, fetchData] = useReducer(PerformerListReducer, []);
//
//
//     const renderPerformerImage = (performerImage, index) => {
//         return (
//             <PerformerImage key={index} performerImage={performerImage} />
//         )
//     };
//
//     return (
//         <div>
//             {performerImageList.length > 0 && performerImageList.map(renderPerformerImage)}
//         </div>
//     )
//
//
// };