import React, {Component} from 'react';
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
// import {getTime, pauseVideo, playVideo} from "./VideoPlay";
import pause from "../images/Pause.png";


let getTime = (time) => {
    let minutes = time < 60 ? 0 : Math.floor(time / 60);
    let seconds = Math.floor(time - (minutes * 60)) * .01;
    return (minutes + seconds).toFixed(2);
};


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
            progressIndex: 0,
            performerVideo: null
        };
    }

    playVideo =() => {
        this.refs.vidRef.play();
        console.log(this.refs);
    }

    pauseVideo = (index) => {
        this.refs.vidRef.pause();
        console.log(this.refs);
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
        console.log(performerVideos);
        const performerVideoList = performerVideos.length ? (
            performerVideos.map((performerVideo, index) => {
                return (
                    <GalleryImage>
                        <PlayerVideo key={index} id="play" ref="vidRef"
                                     poster={performerVideo.previewImageUrl} src={performerVideo.url}
                                     onTimeUpdate={this.onTimeUpdate}
                                     onDurationChange={this.onDurationChange}
                        />
                        <PlayButton onClick={(e) => {
                            this.setState({performerVideo: performerVideo});
                            this.setState({isOpen: true})
                        }}>PLAY</PlayButton>
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
                { this.state.performerVideo ? (
                <Modal isOpen={this.state.isOpen} onClose={(e) => this.setState({isOpen: false})}>
                    <Player>
                        <PlayerVideo id="play" ref="vidRef"

                                     poster={this.state.performerVideo.previewImageUrl}
                                     src={this.state.performerVideo.url}
                                     onTimeUpdate={this.onTimeUpdate}
                                     onDurationChange={this.onDurationChange}
                        />
                        <PlayerControls>
                            <Progress>
                                <ProgressFilled/>
                            </Progress>
                            <div className="ply-btn">
                                <PlayerButton id='playButton' title="Toggle Play" src={play}
                                              onClick={this.playVideo.bind(this)}
                                              alt=""/>
                                <PlayerButton id='pauseButton' title="Toggle Pause" src={pause}
                                              onClick={this.pauseVideo.bind(this)} alt=""/>

                            </div>
                            <CurrentTime>{this.state.progressIndex}/{this.state.progressCount} </CurrentTime>
                        </PlayerControls>
                    </Player>

                </Modal>
                ) :
                <div></div> }
            </div>
            </body>
        );
    }

}

const mapStateToProps = ({isLoading, performerVideos, error}) => ({
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