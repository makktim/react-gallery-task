import React, {Component} from 'react';
import {GalleryImage} from "../style";
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
import pause from "../images/Pause.png";


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
            volume: 1,
            setMuted: false
        };

        // this.changeVolume = this.changeVolume.bind(this);
    }

    changeVolume = (steps) => {
        const videoElement = this.refs.vidRef;
        let newVolume = videoElement.volume + steps;

        this.setState({volume: Math.max(Math.min(newVolume, 1), 0) }, ()=>{
            videoElement.volume = this.state.volume;
        } );
        // return () => {
        //     let volume = this.refs.vidRef.volume;
        //     this.setState({volume: volume + steps});
        //     console.log(volume)
        // };
    };



    playVideo =() => {
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
        this.onCurrentTime();
    };

    onDurationChange = () => {
        let duration = this.refs.vidRef.duration;
        duration = getTime(Math.floor(duration));
        this.setState({progressCount: duration});
        this.setState({progressIndex: 0})
        this.onCurrentTime();
    };

    onCurrentTime = () => {
        let progressTime = this.state.progressIndex / this.state.progressCount;
        progressTime = Math.round(progressTime * 100);
        this.setState({width: progressTime})
        //
        // console.log(progressTime)
    };



    componentDidMount() {
        this.props.loadPerformerVideos(this.props)
    }


    render() {
        const {performerVideos} = this.props;
        const performerVideoList = performerVideos.length ? (
            performerVideos.map((performerVideo, index) => {
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
                { this.state.performerVideo ? (
                <Modal isOpen={this.state.isOpen} onClose={(e) => this.setState({isOpen: false})}>
                    <Player>
                        <PlayerVideo id="play" autoPlay ref="vidRef"

                                     poster={this.state.performerVideo.previewImageUrl}
                                     src={this.state.performerVideo.url}
                                     onTimeUpdate={this.onTimeUpdate}
                                     onDurationChange={this.onDurationChange}

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
                            <div className="pb-3">
                                <button onClick={(e) => {this.changeVolume(0.1)}} className="mr-3">
                                    volume+=0.1
                                </button>
                                <button onClick={(e) => {this.changeVolume(-0.1)}} className="mr-3">
                                    volume-=0.1
                                </button>
                            </div>
                        </PlayerControls>
                    </Player>

                </Modal>
                ) :
                <div></div> }
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