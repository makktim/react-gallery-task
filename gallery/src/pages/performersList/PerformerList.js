import React, {Component} from 'react';
import {Caption, GalleryImage, Img, ImgBox, PublicTransparentBox} from "../style";
import {Link} from "react-router-dom";
import { connect } from 'react-redux';
import {loadImages} from "../../actions";
import Performer from "./Performer";


//  const PerformerList = (props) => {
//
//     const [performers] = props.loadImages();
//
//
//     const renderPerformer = (performers, index) => {
//         return (
//
//             <Performer key={index} performers={performers} />
//         )
//     };
//
//     return (
//         <div>
//             {performers.length > 0 && performers.map(renderPerformer)}
//         </div>
//     )
//
//
// };
//
// const mapStateToProps = ({ isLoading, performers, error }) => ({
//     isLoading,
//     performers,
//     error,
// });
//
// const mapDispatchToProps = dispatch => ({
//     loadImages: () => dispatch(loadImages()),
// });
//
// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )
// (PerformerList);




class PerformerList extends Component {

    componentDidMount() {
        this.props.loadImages()
    }


    render() {
        const {performers} = this.props;
        const performerList = performers.length ? (
            performers.map(performer => {
                return (
                        <GalleryImage>
                            <ImgBox>
                                <Link to={'/en/gallery/' + performer.pid + '/folders'} type="performerName">
                                    <Img key={performer.pid} src={performer.profilePictureUrl} alt=""/>
                                    <PublicTransparentBox>
                                        <Caption>
                                            <p>{performer.pid}</p>
                                        </Caption>
                                    </PublicTransparentBox>
                                </Link>
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
                    {performerList}
                </div>
            </body>
        );
    }

}

const mapStateToProps = ({ isLoading, performers, error }) => ({
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
)
(PerformerList);

