import React, {Component} from 'react';
import play from '../images/Play.png';
import pause from '../images/Pause.png';
import style from './style.css';
import {GalleryImage, Img, ImgBox, Caption, PublicTransparentBox, Button} from '../style';
import {Link} from "react-router-dom";
import App from "../../App";


let getTime = (time) => {
    let minutes = time < 60 ? 0 : Math.floor(time / 60);
    let seconds = Math.floor(time - (minutes * 60)) * .01;
    return (minutes + seconds).toFixed(2);
}


class Video extends React.Component {

    constructor() {
        super();
        this.state = {
            playIndex: 0,
            clientWidth: 0,
            queueLength: 1,
            isPlaying: false,
            progressCount: 0,
            progressIndex: 0,
            randomOn: false,
            show: false
        };
    }

    showModal = () => {
        this.setState({ show: true });
    };

    hideModal = () => {
        this.setState({ show: false });
    };


    playVideo() {
        this.refs.vidRef.play();
        console.log(this.refs);
    }

    pauseVideo() {
        this.refs.vidRef.pause();
    }


     onTimeUpdate = () => {
        let currentTime = this.refs.vidRef.currentTime;
        currentTime = getTime(Math.floor(currentTime));
        this.setState({progressIndex: currentTime})
        console.log(currentTime)
    };

    onDurationChange = () => {
        let duration = this.refs.vidRef.duration;
        duration = getTime(Math.floor(duration));
        this.setState({progressCount: duration})
        this.setState({progressIndex: 0})
    };

    onshowProgress = () => {
        // a video szélessége osztva a video idejével  másodpercben és az eredmény a másodpercenkénti pixelek száma. Ezután a videó pixelhelyzetét növelem másodpercenként a kapott értékkel.
        // let startPoint = this.refs.vidRef.clientWidth;
        // let width = this.refs.vidRef.clientWidth;
        let duration = this.refs.vidRef.duration;
        // let showTime = (startPoint / width) * duration;
        this.setState({clientWidth: duration});

        console.log(duration)
    };


    render() {


        return (

            <GalleryImage>


                <div className="player">
                <video id="play" ref="vidRef" className="player__video"
                       poster={this.props.performerImage.previewImageUrl} src={this.props.performerImage.url}
                       onTimeUpdate={this.onTimeUpdate}
                       onDurationChange={this.onDurationChange}
                       onshowProgress={this.onshowProgress} />
                <div className="player__controls">
                    <div className="progress">
                        <div className="progress__filled"/>
                    </div>
                    <div className="ply-btn">
                        <img id='playButton' className="player__button toggle" title="Toggle Play" src={play}
                             onClick={this.playVideo.bind(this)}
                             alt=""/>
                        <img id='pauseButton' className="player__button toggle" title="Toggle Pause" src={pause} onClick={this.pauseVideo.bind(this)} alt=""/>

                    </div>
                    <button id="currentTime">{this.state.progressIndex}/{this.state.progressCount} </button>
                    <input type="range" name="volume" className="player__slider" min="0" max="1" step="0.05" value="1"/>
                    <input type="range" name="playbackRate" className="player__slider" min="0.5" max="2" step="0.1"
                           value="1"/>
                    <button data-skip="-10" className="player__button">« 10s</button>
                    <button data-skip="25" className="player__button">25s »</button>
                </div>
                </div>

                <div>
                    <h1>
                        width: {this.state.clientWidth}
                    </h1>
                </div>
            </GalleryImage>


        )
    }

};

export default class PlayerCtrl extends Video {



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


}
// You can then call the parent play/pause methods from your child component.


// class PlayerControlExample extends Component {
//
//
//     constructor(props, context) {
//         super(props, context);
//
//         this.state = {
//             source: this.props.performerImage.url
//         };
//
//         this.play = this.play.bind(this);
//         this.pause = this.pause.bind(this);
//         this.load = this.load.bind(this);
//         this.changeCurrentTime = this.changeCurrentTime.bind(this);
//         this.seek = this.seek.bind(this);
//         this.changePlaybackRateRate = this.changePlaybackRateRate.bind(this);
//         this.changeVolume = this.changeVolume.bind(this);
//         this.setMuted = this.setMuted.bind(this);
//     }
//
//     componentDidMount() {
//         // subscribe state change
//         this.player.subscribeToStateChange(this.handleStateChange.bind(this));
//     }
//
//     setMuted(muted) {
//         return () => {
//             this.player.muted = muted;
//         };
//     }
//
//     handleStateChange(state) {
//         // copy player state to this component's state
//         this.setState({
//             player: state
//         });
//     }
//
//     play() {
//         this.player.play();
//     }
//
//     pause() {
//         this.player.pause();
//     }
//
//     load() {
//         this.player.load();
//     }
//
//     changeCurrentTime(seconds) {
//         return () => {
//             const { player } = this.player.getState();
//             this.player.seek(player.currentTime + seconds);
//         };
//     }
//
//     seek(seconds) {
//         return () => {
//             this.player.seek(seconds);
//         };
//     }
//
//     changePlaybackRateRate(steps) {
//         return () => {
//             const { player } = this.player.getState();
//             this.player.playbackRate = player.playbackRate + steps;
//         };
//     }
//
//     changeVolume(steps) {
//         return () => {
//             const { player } = this.player.getState();
//             this.player.volume = player.volume + steps;
//         };
//     }
//
//     render() {
//         return (
//             <div>
//                 <video className="player__video"
//                     ref={player => {this.player = player;}} autoPlay>
//                     <source src={this.props.performerImage.url} />
//                     <ControlBar autoHide={false} />
//                 </video>
//                 <div className="py-3">
//                     <button onClick={this.play} className="mr-3">
//                         play()
//                     </button>
//                     <button onClick={this.pause} className="mr-3">
//                         pause()
//                     </button>
//                     <button onClick={this.load} className="mr-3">
//                         load()
//                     </button>
//                 </div>
//                 <pre>
//         </pre>
//             </div>
//         );
//     }


// export default (props) => {
//
//     const {performerImage: {previewImageUrl, url}} = props;

        // return (
        //     <div>
        //     <GalleryImage>
        //         <ImgBox>
        //             <Button onClick={openVideo}>Open</Button>
        //                 <Img src={previewImageUrl} alt=""/>
        //                 <PublicTransparentBox>
        //                     <Caption>
        //                     </Caption>
        //                 </PublicTransparentBox>
        //
        //         </ImgBox>
        //     </GalleryImage>
        //
        //     </div>
        //
        //
        // )
        //
        // return (
        //
        //     <div>
        //         <video ref="vidRef" id="videoPlay" className="player__video" poster={previewImageUrl} src={url}/>
        //         <div className="player__controls">
        //             <div className="progress">
        //                 <div className="progress__filled"/>
        //             </div>
        //             <div className="ply-btn">
        //                 <img className="player__button toggle" title="Toggle Play" src={play} onChange={togglePlay.bind(this)} alt=""/>
        //             </div>
        //             <button id="currentTime"> 00:00 / 00:00</button>
        //             <input type="range" name="volume" className="player__slider" min="0" max="1" step="0.05" value="1"/>
        //             <input type="range" name="playbackRate" className="player__slider" min="0.5" max="2" step="0.1"
        //                    value="1"/>
        //             <button data-skip="-10" className="player__button">« 10s</button>
        //             <button data-skip="25" className="player__button">25s »</button>
        //         </div>
        //     </div>
        // )


