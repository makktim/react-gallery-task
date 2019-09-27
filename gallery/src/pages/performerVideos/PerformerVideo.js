import React, {Component} from 'react';
import play from '../images/Play.png';
import pause from '../images/Pause.png';
import {playVideo, pauseVideo, getTime} from "./VideoPlay";
import Modal from '../Modal';
import style from './style.css';
import {GalleryImage, Img, ImgBox, Caption, PublicTransparentBox, Button} from '../style';
import {Link} from "react-router-dom";
import App from "../../App";
import styled from "styled-components";

const PlayButton = styled.button`
    position: absolute;
    background-color:rgba(51, 0, 0, 0.3);
    color: beige;
    max-height: 170px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin:15px;
    padding: 15px;
    box-shadow: 0 0 9px 7px black;
`;



class Video extends React.Component {

    constructor() {
        super();
        this.state = {
            isOpen: false,
            autoplay: true,
            playIndex: 0,
            width: 0,
            queueLength: 1,
            isPlaying: false,
            progressCount: 0,
            progressIndex: 0,
            randomOn: false,
            show: false
        };
        // this.handleVideoClick = this.handleVideoClick.bind(this);
    }

    onAutoPlay = () => {
        let autoplay = this.refs.vidRef.autoplay;
        this.setState({autoplay: true})
        // console.log(currentTime)
    };


    onTimeUpdate = () => {
        let currentTime = this.refs.vidRef.currentTime;
        currentTime = getTime(Math.floor(currentTime));
        this.setState({progressIndex: currentTime})
        // console.log(currentTime)
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


                <video id="play" ref="vidRef" className="player__video"
                       // onClick={this.handleVideoClick}
                       poster={this.props.performerImage.previewImageUrl} src={this.props.performerImage.url}
                       onTimeUpdate={this.onTimeUpdate}
                       onDurationChange={this.onDurationChange}
                />
                <PlayButton onClick={(e) => this.setState({isOpen: true})}>PLAY</PlayButton>


                <Modal isOpen={this.state.isOpen} onClose={(e) => this.setState({isOpen: false})} >
                    <div className="player">
                        <video id="play"  preload="auto" ref="vidRef" className="player__video"
                               poster={this.props.performerImage.previewImageUrl} src={this.props.performerImage.url}
                               onTimeUpdate={this.onTimeUpdate}
                               onDurationChange={this.onDurationChange}
                        />
                        <div className="player__controls">
                            <div className="progress">
                                <div className="progress__filled"/>
                            </div>
                            <div className="ply-btn">
                                <img id='playButton' className="player__button toggle" title="Toggle Play" src={play}
                                     onClick={playVideo.bind(this)}
                                     alt=""/>
                                <img id='pauseButton' className="player__button toggle" title="Toggle Pause" src={pause}
                                     onClick={pauseVideo.bind(this)} alt=""/>

                            </div>
                            <button id="currentTime">{this.state.progressIndex}/{this.state.progressCount} </button>
                            <input type="range" name="volume" className="player__slider" min="0" max="1" step="0.05"
                                   value="1"/>
                            <input type="range" name="playbackRate" className="player__slider" min="0.5" max="2"
                                   step="0.1"
                                   value="1"/>
                        </div>
                    </div>

                </Modal>
            </GalleryImage>

        )
    }

};

export default Video;
