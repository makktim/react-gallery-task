import React, {vidRef} from 'react';
import play from '../images/Play.png';
import pause from '../images/Pause.png';
import {playVideo, pauseVideo, getTime} from "./VideoPlay";
import Modal from '../Modal';
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
import {GalleryImage, Img, ImgBox, Caption, PublicTransparentBox, Button} from '../style';


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

    // onshowProgress = () => {
    //     // a video szélessége osztva a video idejével  másodpercben és az eredmény a másodpercenkénti pixelek száma. Ezután a videó pixelhelyzetét növelem másodpercenként a kapott értékkel.
    //     let startPoint = this.refs.vidRef.clientWidth;
    //     let width = this.refs.vidRef.clientWidth;
    //     let clientWidth = this.refs.vidRef.clientWidth;
    //     // let showTime = (startPoint / width) * duration;
    //     this.setState({width: clientWidth});
    //     console.log(clientWidth)
    // };

    // handleVideoClick() {
    //     // let clientWidth = this.refs.vidRef.clientWidth;
    //     // let duration = this.refs.vidRef.duration;
    //
    //     // this.setState({width: clientWidth});
    //     this.setState({isOpen: true});
    //     console.log('hello');
    //     // console.log(clientWidth / duration)
    //
    // }


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
    }

};

export default Video;
