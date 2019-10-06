import React, {Component} from 'react';
import axios from 'axios';
import {Caption, GalleryImage, Img, ImgBox, PublicTransparentBox} from "../style";
import {Link} from "react-router-dom";
import { connect } from 'react-redux';

class PerformerList extends Component {

    state = {
        performers: []
    }

    componentDidMount() {
        axios.get('/en/list-page-ajax/show-more-json/0/')
            .then(res => {
                console.log(res)
                this.setState({'performers': res.data.data.content.performers})
            })
    }

    render() {
        const {performers} = this.state;
        const performerList = performers.length ? (
            performers.map(performer => {
                return (
                        <GalleryImage>
                            <ImgBox>
                                <Link to={'/en/gallery/' + performer.pid + '/folders'}>
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

export default connect(
    mapStateToProps,
    null
)
(PerformerList);

// export default (props) => {
//
//     console.log(props);
//
//     // fetchData().then(data => this.props.performer(data));
//
//     const renderPerformer = (performer, index) => {
//         return (
//
//             <Performer key={index} performer={performer}/>
//         )
//
//     };
//
//     return (
//         <div>
//             {fetchData.length > 0 && fetchData.map(renderPerformer)}
//         </div>
//     )
//
//
// }

//     const data = useSelector((props) => props);
//     // const { data } = props;
//     console.log(fetchData());
//     console.log(data);
//
//
//     return (
//         <ul>
//             {data.map((data) => (
//                 <li key={data.id}>
//                     <span>{data.pid}</span>
//                 </li>
//             ))}
//         </ul>
//     );
// };

// const mapStateToProps = function(state) {
//     return {
//         // performers: state.performer
//     }
// };


// const mapStateToProps = state => ({ performer: state.performer });
//
// const mapDispatchToProps = dispatch =>
//     bindActionCreators({ requestApiData }, dispatch);
//
// export default connect(null, null)(PerformerList);


// export default ()  => {
//
//     const [performerList, mapDispatchToProps] = useReducer(PerformerListReducer, []);


// const getList = async () => {
//     const {data} = await axios.get('/en/list-page-ajax/show-more-json/0/')

// dispatch({
//     type: SET_LIST,
//     list: data.data.content.performers
// });
// }

//
// useEffect(() => {
//     fetchData()
//     console.log(fetchData())
//     export default connect(
//         mapStateToProps,
//         mapDispatchToProps
//     )(PerformerList)
// }, []);

//     const renderPerformer = (performer, index) => {
//         return (
//
//             <Performer key={index} performer={performer}/>
//         )
//     };
//
//     return (
//         <div>
//             {fetchData.length > 0 && fetchData.map(renderPerformer)}
//         </div>
//     )
//
//
// };

