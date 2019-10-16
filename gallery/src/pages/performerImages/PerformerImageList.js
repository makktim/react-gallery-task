import React, {Component} from 'react';
import {Caption, GalleryImage, Img, ImgBox, ModalImg, PublicTransparentBox, ShowButton, ArrowImg, OpenImg, NextArrowImg } from "../style";
import {loadPerformerImages} from "../../actions/PerformerImagesAction";
import {connect} from "react-redux";
import Modal from "../modal/Modal";
import leftArrow from "../images/left_arrow.png";
import rightArrow from "../images/right_arrow.png";
import PerformerAlbum from "../performerAlbums/PerformerAlbum";
import PerformerImage from "./PerformerImage";


class PerformerImageList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            performerImage: null,
            index: 0
        };
    }

    nextProperty = (performerImages) => {
        console.log(performerImages);
        if (this.state.index < performerImages.length - 1) {
            this.setState({index: this.state.index + 1});
        } else {
            this.setState({index: 0});
        }

    };

    prevProperty = (performerImages) => {
        if (this.state.index > 0) {
            this.setState({index: this.state.index - 1});
        } else {
            this.setState({index: performerImages.length - 1});
        }
    };


    componentDidMount() {
        this.props.loadPerformerImages(this.props);
    }

    // render() {
    //     const {performerImages} = this.props;
    //     const modelName = this.props.match.params.pid;
    //
    //     const renderPerformerImage = (performerImage, index) => {
    //         return (
    //         <div>
    //             <PerformerImage key={index} performerImage={performerImage} modelName={modelName} isopen={this.state.isOpen}/>
    //                 <ShowButton onClick={(e) => {
    //                     this.setState({performerImage: performerImage});
    //                     this.setState({isOpen: true});
    //                     this.setState({index: index});
    //                 }}>show</ShowButton>
    //         </div>
    //         )
    //     };
    //
    //     return (
    //         <div>
    //             {performerImages.length > 0 && performerImages.map(renderPerformerImage)}
    //             {this.state.performerImage ? (
    //                     <Modal isOpen={this.state.isOpen} onClose={(e) => this.setState({isOpen: false})}>
    //                         {console.log(performerImages)}
    //
    //                         <ModalImg>
    //                             <OpenImg key={this.state.performerImage.id}
    //                                      src={performerImages[this.state.index].url} alt=""/>
    //                             <NextArrowImg onClick={(e) => this.prevProperty(performerImages)} src={leftArrow}/>
    //                             <ArrowImg onClick={(e) => this.nextProperty(performerImages)} src={rightArrow}/>
    //                         </ModalImg>
    //                     </Modal>
    //                 ) :
    //                 <div></div>}
    //         </div>
    //     )
    // }

    render() {
        const {performerImages} = this.props;
        console.log(performerImages);
        const ImageList = performerImages.length ? (
            performerImages.map((performerImage, index) => {
                return (
                    <GalleryImage key={performerImage.id}>
                        <ImgBox>
                            <Img src={performerImage.previewImageUrl} alt=""/>
                            <PublicTransparentBox>
                                <Caption>

                                    <p>{performerImage.title}
                                        <ShowButton onClick={(e) => {
                                            this.setState({performerImage: performerImage});
                                            this.setState({isOpen: true});
                                            this.setState({index: index});
                                        }}>show</ShowButton>
                                    </p>
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
            <div>
                {ImageList}
                {this.state.performerImage ? (
                        <Modal isOpen={this.state.isOpen} onClose={(e) => this.setState({isOpen: false})}>
                            {console.log(performerImages)}

                            <ModalImg>
                                <OpenImg key={this.state.performerImage.id}
                                     src={performerImages[this.state.index].url} alt=""/>
                                <NextArrowImg onClick={(e) => this.prevProperty(performerImages)} src={leftArrow}/>
                                <ArrowImg onClick={(e) => this.nextProperty(performerImages)} src={rightArrow}/>
                            </ModalImg>
                        </Modal>
                    ) :
                    <div></div>}
            </div>
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
)(PerformerImageList);