import React, { useEffect, useReducer, Component } from 'react';
import {Caption, GalleryImage, Img, ImgBox, PublicTransparentBox} from "../style";
import {loadPerformerVideos} from "../../actions/PerformerVideosAction";
import {connect} from "react-redux";
import {
    CurrentTime,
    PlayButton,
    Player,
    PlayerButton,
    PlayerControls,
    PlayerVideo,
    Progress,
    ProgressFilled
} from "./VideoStyle";
import Modal from "../Modal";
import play from "../images/Play.png";
import {getTime, pauseVideo, playVideo} from "./VideoPlay";
import pause from "../images/Pause.png";


class PerformerVideoList extends Component {

    constructor() {
        super();
        this.state = {
            isOpen: false,
            playIndex: 0,
            width: 0,
            queueLength: 1,
            isPlaying: false,
            progressCount: 0,
            progressIndex: 0
        };
    }

    onTimeUpdate = () => {
        let currentTime = this.refs.vidRef.currentTime;
        currentTime = getTime(Math.floor(currentTime));
        this.setState({progressIndex: currentTime})
    };

    onDurationChange = () => {
        let duration = this.refs.vidRef.duration;
        duration = getTime(Math.floor(duration));
        this.setState({progressCount: duration});
        this.setState({progressIndex: 0})
    };

    componentDidMount() {
        this.props.loadPerformerVideos(this.props)
    }


    render() {
        const {performerVideos} = this.props;
        const performerVideoList = performerVideos.length ? (
            performerVideos.map(performerVideo => {
                return (
                    <GalleryImage>
                        <PlayerVideo id="play" ref="vidRef"
                                     poster={performerVideo.previewImageUrl} src={performerVideo.url}
                                     onTimeUpdate={this.onTimeUpdate}
                                     onDurationChange={this.onDurationChange}
                        />
                        <PlayButton onClick={(e) => this.setState({isOpen: true})}>PLAY</PlayButton>
                        <Modal isOpen={this.state.isOpen} onClose={(e) => this.setState({isOpen: false})}>
                            <Player>
                                <PlayerVideo id="play" autoPlay ref="vidRef"

                                             poster={performerVideo.previewImageUrl}
                                             src={performerVideo.url}
                                             onTimeUpdate={this.onTimeUpdate }
                                             onDurationChange={this.onDurationChange}
                                />
                                <PlayerControls>
                                    <Progress>
                                        <ProgressFilled/>
                                    </Progress>
                                    <div className="ply-btn">
                                        <PlayerButton id='playButton' title="Toggle Play" src={play}
                                                      onClick={playVideo.bind(this)}
                                                      alt=""/>
                                        <PlayerButton id='pauseButton' title="Toggle Pause" src={pause}
                                                      onClick={pauseVideo.bind(this)} alt=""/>

                                    </div>
                                    <CurrentTime>{this.state.progressIndex}/{this.state.progressCount} </CurrentTime>
                                </PlayerControls>
                            </Player>

                        </Modal>
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
                {performerVideoList}
            </div>
            </body>
        );
    }

}

const mapStateToProps = ({ isLoading, performerVideos, error }) => ({
    isLoading,
    performerVideos,
    error,
});

const mapDispatchToProps = dispatch => ({
    loadPerformerVideos: (props) => dispatch(loadPerformerVideos(props)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)
(PerformerVideoList);


// export default (props) => {
//
//     console.log(props);
//     const [performerVideoList, fetchData] = useReducer(PerformerListReducer, []);
//
//
//     const renderPerformerVideo = (performerVideo, index) => {
//
//         return (
//             <PerformerVideo key={index} performerImage={performerVideo} />
//         )
//     };
//
//     return (
//         <div>
//             {performerVideoList.length > 0 && performerVideoList.map(renderPerformerVideo)}
//         </div>
//     )
//
//
// };