import React, {Component} from 'react';
import play from '../images/Play.png';
import pause from '../images/Pause.png';
import {togglePlay} from "./VideoPlay";
import style from './style.css';
import {GalleryImage, Img, ImgBox, Caption, PublicTransparentBox, Button} from '../style';
import {Link} from "react-router-dom";
import App from "../../App";


let getTime = (time) => {
    var minutes = time < 60 ? 0 : Math.floor(time / 60);
    var seconds = Math.floor(time - (minutes * 60)) * .01;
    return (minutes + seconds).toFixed(2);
}

const video = document.querySelector('.player__video');

class Video extends React.Component {

    playVideo() {
        // You can use the play method as normal on your video ref
        this.refs.vidRef.play();
        console.log(this.refs);
    }

    pauseVideo() {
        // Pause as well
        this.refs.vidRef.pause();
        console.log(this.refs);
    }



    render() {
        return (
            <div><my-component>
                <GalleryImage>
                    <div className="player">
                        <video id="play" ref="vidRef" className="player__video"
                               poster={this.props.performerImage.previewImageUrl} src={this.props.performerImage.url}
                               onTimeUpdate={this.onTimeUpdate}/>
                        <div className="player__controls">
                            <div className="progress">
                                <div className="progress__filled"/>
                            </div>
                            <div className="ply-btn">
                                <img id='playButton' className="player__button toggle" title="Toggle Play" src={play}
                                     onClick={this.clickHandler.bind(this)}
                                     alt=""/>
                                <img id='pauseButton' className="player__button toggle" title="Toggle Pause" src={pause} onClick={this.pauseVideo.bind(this)} alt=""/>

                            </div>
                            <button id="currentTime"> {this.props.changeCurrentTime} </button>
                            <input type="range" name="volume" className="player__slider" min="0" max="1" step="0.05" value="1"/>
                            <input type="range" name="playbackRate" className="player__slider" min="0.5" max="2" step="0.1"
                                   value="1"/>
                            <button data-skip="-10" className="player__button">« 10s</button>
                            <button data-skip="25" className="player__button">25s »</button>
                        </div>
                    </div>
                </GalleryImage>
            </my-component></div>
        )
    }

};

export default class PlayerCtrl extends Video {

    constructor() {
        super();
        this.state = {
            playIndex: 0,
            queueLength: 1,
            isPlaying: false,
            progressCount: 0,
            progressIndex: 0,
            randomOn: false
        };
    }

    clickHandler = (className) => {

        switch (className) {
            case 'player__video':
                this.refs.vidRef.play();
                console.log(this.refs);
                this.setState({isPlaying: true});
                break;
            case 'pauseButton':
                this.refs.vidRef.play();
                this.setState({isPlaying: false});
                break;
        }
    };
    onDurationChange = () => {
        let duration = this.refs.audioDiv.duration;
        duration = getTime(Math.floor(duration));
        this.setState({progressCount: duration})
        this.setState({progressIndex: 0})
    };
    onTimeUpdate = () => {
        let currentTime = this.refs.audioDiv.currentTime;
        currentTime = getTime(Math.floor(currentTime));
        this.setState({progressIndex: currentTime})
    };
}