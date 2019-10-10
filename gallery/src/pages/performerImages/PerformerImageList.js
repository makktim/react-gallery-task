import React, {useEffect, useReducer, Component} from 'react';
import {Caption, GalleryImage, Img, ImgBox, ModalImg, PublicTransparentBox, ShowButton} from "../style";
import {loadPerformerImages} from "../../actions/PerformerImagesAction";
import {connect} from "react-redux";
import Modal from "../Modal";


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
        console.log(performerImages)
        if (this.state.index < performerImages.length - 1) {
            this.setState({index: this.state.index + 1});
            console.log(this.state.index);
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

    render() {
        const {performerImages} = this.props;
        console.log(performerImages);
        const ImageList = performerImages.length ? (
            performerImages.map((performerImage, index) => {
                return (
                    <GalleryImage>
                        <ImgBox>
                            <Img key={performerImage.id} src={performerImage.previewImageUrl} alt=""/>
                            <PublicTransparentBox>
                                <Caption>

                                    <p>{performerImage.title}
                                        <ShowButton onClick={(e) => {
                                            this.setState({performerImage: performerImage});
                                            this.setState({isOpen: true});
                                            this.setState({index: index});
                                            console.log(index)
                                            console.log(this.state.index)
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
            <body>
            <div>
                {ImageList}
                {this.state.performerImage ? (
                        <Modal isOpen={this.state.isOpen} onClose={(e) => this.setState({isOpen: false})}>
                            {console.log(performerImages)};
                            <ModalImg>
                                <Img key={this.state.performerImage.id}
                                     src={performerImages[this.state.index].previewImageUrl} alt=""/>
                                <button onClick={(e) => this.prevProperty(performerImages)}>Previous</button>
                                <button onClick={(e) => this.nextProperty(performerImages)}>Next</button>
                            </ModalImg>
                        </Modal>
                    ) :
                    <div></div>}
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