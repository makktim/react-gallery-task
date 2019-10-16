import React from 'react';
import play from '../images/Play.png';
import pause from '../images/Pause.png';
import Modal from '../modal/Modal';
import {
    PlayButton,
    Player,
    PlayerVideo,
    PlayerControls,
    Progress,
    PlayerButton,
    ProgressFilled,
    CurrentTime
} from './VideoStyle';
import {GalleryImage} from '../style';

let getTime = (time) => {
    let minutes = time < 60 ? 0 : Math.floor(time / 60);
    let seconds = Math.floor(time - (minutes * 60)) * .01;
    return (minutes + seconds).toFixed(2);
};

class Video extends React.Component {

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

    playVideo() {
        this.refs.vidRef.play();
        console.log(this.state.id)
        console.log(this.refs.vidref);
    }

    pauseVideo() {
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
        this.setState({progressCount: duration})
        this.setState({progressIndex: 0})
    };

    render() {
        return (

            <GalleryImage>

                <PlayerVideo id="play" ref="vidRef"
                             poster={this.props.performerImage.previewImageUrl} src={this.props.performerImage.url}
                             onTimeUpdate={this.onTimeUpdate}
                             onDurationChange={this.onDurationChange}
                />
                <PlayButton onClick={(e) => this.setState({isOpen: true})}>PLAY</PlayButton>


                <Modal isOpen={this.state.isOpen} onClose={(e) => this.setState({isOpen: false})}>
                    <Player>
                        <PlayerVideo id="play" autoPlay ref="vidRef"

                                     poster={this.props.performerImage.previewImageUrl}
                                     src={this.props.performerImage.url}
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
            </GalleryImage>

        )
    }

};

export default Video;
