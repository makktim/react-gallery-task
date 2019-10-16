import React, {Component} from 'react';
import {GalleryImage, LockImg} from "../style";
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
    VolumeRange,
    ProgressFilled
} from "./VideoStyle";
import Modal from "../modal/Modal";
import play from "../images/Play.png";
import pause from "../images/Pause.png";
import speaker from "../images/Speaker.png";
import lock from "../images/229652.png";


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
            playIndex: 0,
            width: 0,
            queueLength: 1,
            isPlaying: false,
            progressCount: 0,
            progressIndex: 0,
            performerVideo: null,
            progress: 0,
            volume: 0.5,
            setMuted: false
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
        let currentTime = this.refs.vidRef.currentTime;
        currentTime = getTime(Math.floor(currentTime));
        this.setState({progressIndex: currentTime});
        this.onProgressCurrentTime();
    };

    onDurationChange = () => {
        let duration = this.refs.vidRef.duration;
        duration = getTime(Math.floor(duration));
        this.setState({progressCount: duration});
        this.setState({progressIndex: 0});
        this.onProgressCurrentTime();
    };

    onProgressCurrentTime = () => {
        const duration = this.refs.vidRef.duration;
        const currentTime = this.refs.vidRef.currentTime;
        let progressTime = currentTime / duration;
        progressTime = Math.round(progressTime * 100);
        this.setState({width: progressTime})
    };


    componentDidMount() {
        this.props.loadPerformerVideos(this.props)
    }


    render() {
        const {performerVideos} = this.props;
        const performerVideoList = performerVideos.length ? (
            performerVideos.map((performerVideo, index) => {
                if (performerVideo.privacy === "exclusive") {
                    return (
                        <GalleryImage key={index}>
                            <PlayerVideo key={index} id="play" ref="vidRef"
                                         poster={performerVideo.previewImageUrl} src={performerVideo.url}
                                         onTimeUpdate={this.onTimeUpdate}
                                         volume={this.state.volume}
                                         changeVolume={this.changeVolume}
                                         onDurationChange={this.onDurationChange}

                            />
                            <LockImg src={lock} alt=""/>
                        </GalleryImage>
                    )
                }
                return (
                    <GalleryImage key={index}>
                        <PlayerVideo key={index} id="play" ref="vidRef"
                                     poster={performerVideo.previewImageUrl} src={performerVideo.url}
                                     onTimeUpdate={this.onTimeUpdate}
                                     volume={this.state.volume}
                                     changeVolume={this.changeVolume}
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
            <div>
                {performerVideoList}
                {this.state.performerVideo ? (
                        <Modal isOpen={this.state.isOpen} onClose={(e) => this.setState({isOpen: false})}>
                            <Player>
                                <PlayerVideo id="play" autoPlay ref="vidRef"

                                             poster={this.state.performerVideo.previewImageUrl}
                                             src={this.state.performerVideo.url}
                                             onTimeUpdate={this.onTimeUpdate}
                                             onDurationChange={this.onDurationChange}
                                             onClick={this.pauseVideo.bind(this)}

                                />
                                <PlayerControls>
                                    <Progress>
                                        <ProgressFilled progress={this.state.width}/>
                                    </Progress>


                                    <div className="ply-btn">
                                        <PlayerButton id='playButton' title="Toggle Play" src={play}
                                                      onClick={this.playVideo.bind(this)}
                                                      alt=""/>
                                        <PlayerButton id='pauseButton' title="Toggle Pause" src={pause}
                                                      onClick={this.pauseVideo.bind(this)} alt=""/>

                                    </div>
                                    <CurrentTime>{this.state.progressIndex}/{this.state.progressCount} </CurrentTime>

                                    <div>
                                        <PlayerButton src={speaker} id="speaker"/>
                                    </div>
                                    <div>
                                        <VolumeRange type="range" id="volume" className="volume_range"
                                                     value={this.state.volume}
                                                     step={0.1}
                                                     min={0}
                                                     max={1}
                                                     onChange={this.changeVolume.bind(this)}/>
                                    </div>
                                </PlayerControls>
                            </Player>

                        </Modal>
                    ) :
                    <div></div>}
            </div>
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
)(PerformerVideoList);