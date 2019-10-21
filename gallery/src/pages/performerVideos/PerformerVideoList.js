import React, {Component} from 'react';
import {loadPerformerVideos} from "../../actions/PerformerVideosAction";
import {connect} from "react-redux";
import {
    CurrentTime,
    Player,
    PlayerButton,
    PlayerControls,
    PlayerVideo,
    VolumeButton,
    Progress,
    VolumeRange,
    ProgressFilled
} from "./VideoStyle";
import Modal from "../modal/Modal";
import play from "../images/Play.png";
import pause from "../images/Pause.png";
import speaker from "../images/Speaker.png";
import PerformerVideo from "./PerformerVideo";

const getTime = (time) => {
    let minutes = time < 60 ? 0 : Math.floor(time / 60);
    let seconds = Math.floor(time - (minutes * 60)) * .01;
    return (minutes + seconds).toFixed(2);
};


class PerformerVideoList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            onfullscreenchange: false,
            width: 0,
            progressCount: 0,
            progressIndex: 0,
            performerVideo: null,
            volume: 0.5,
        };
    }

    changeVolume = () => {
        const volume_range = document.querySelector(".volume_range");
        const videoElement = this.refs.vidRef;
        let newVolume = volume_range.value;
        videoElement.volume = newVolume;
        this.setState({volume: Math.max(Math.min(newVolume, 1), 0)}, () => {
            videoElement.volume = this.state.volume;
        });
    };


    playVideo = () => {
        this.refs.vidRef.play();
        console.log(this.refs);
    };

    pauseVideo = () => {
        this.refs.vidRef.pause();
        console.log(this.refs);
    };

    onTimeUpdate = () => {
        const {currentTime} = this.refs.vidRef;
        const progressIndex = getTime(Math.floor(currentTime));
        this.setState({progressIndex});
        this.onProgressCurrentTime();
    };

    onDurationChange = () => {
        const {duration} = this.refs.vidRef;
        const progressCount = getTime(Math.floor(duration));
        this.setState({progressCount});
        this.onProgressCurrentTime();
    };

    onProgressCurrentTime = () => {
        const {currentTime} = this.refs.vidRef;
        const {duration} = this.refs.vidRef;
        let progressTime = currentTime / duration;
        progressTime = Math.round(progressTime * 100);
        this.setState({width: progressTime})
    };

    onCloseModal = () => {
        this.setState({isOpen: false})
    };

    onOpenModal = (index, performerVideo) => {
        this.setState({isOpen: true, index: index, performerVideo: performerVideo});
    };

    componentDidMount() {
        this.props.loadPerformerVideos(this.props)
    }

    render() {
        const {performerVideos} = this.props;

        const renderPerformerVideo = (performerVideo, index) => {
            return (
                <div key={index}>
                    <PerformerVideo key={index} performerVideo={performerVideo} index={index}
                                    isopen={this.state.isOpen} onOpenModal={this.onOpenModal}/>
                </div>
            )
        };

        return (
            <div>
                {performerVideos.length > 0 && performerVideos.map(renderPerformerVideo)}
                {this.state.performerVideo ? (
                        <Modal isOpen={this.state.isOpen} onClose={this.onCloseModal}>
                            <Player>
                                <PlayerVideo id="play" autoPlay ref="vidRef"

                                             poster={this.state.performerVideo.previewImageUrl}
                                             src={this.state.performerVideo.url}
                                             onTimeUpdate={this.onTimeUpdate}
                                             onDurationChange={this.onDurationChange}
                                             onClick={this.pauseVideo}
                                />
                                <PlayerControls>
                                    <Progress>
                                        <ProgressFilled progress={this.state.width}/>
                                    </Progress>
                                    <div className="ply-btn">
                                        <PlayerButton id='playButton' title="Toggle Play" src={play}
                                                      onClick={this.playVideo}
                                                      alt=""/>
                                        <PlayerButton id='pauseButton' title="Toggle Pause" src={pause}
                                                      onClick={this.pauseVideo} alt=""/>

                                    </div>
                                    <CurrentTime>{this.state.progressIndex}/{this.state.progressCount} </CurrentTime>

                                    <div>
                                        <VolumeButton src={speaker} id="speaker"/>
                                    </div>
                                    <div>
                                        <VolumeRange type="range" id="volume" className="volume_range"
                                                     value={this.state.volume}
                                                     step={0.1}
                                                     min={0}
                                                     max={1}
                                                     onChange={this.changeVolume}/>
                                    </div>
                                </PlayerControls>
                            </Player>

                        </Modal>
                    ) :
                    <div></div>}
            </div>
        );
    };

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
)(PerformerVideoList);