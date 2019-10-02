import React from 'react';


// export let getTime = (time) => {
//     let minutes = time < 60 ? 0 : Math.floor(time / 60);
//     let seconds = Math.floor(time - (minutes * 60)) * .01;
//     return (minutes + seconds).toFixed(2);
// };

// class Video extends React.Component {
//
//     constructor() {
//         super();
//         this.state = {
//             isOpen: false,
//             autoplay: true,
//             playIndex: 0,
//             width: 0,
//             queueLength: 1,
//             isPlaying: false,
//             progressCount: 0,
//             progressIndex: 0,
//             randomOn: false,
//             show: false
//         };
//
//         // this.handleVideoClick = this.handleVideoClick.bind(this);
//     }
//
//     playVideo() {
//         this.refs.vidRef.play();
//         console.log(this.refs);
//     }
//
//     pauseVideo() {
//         this.refs.vidRef.pause();
//         console.log(this.refs);
//     }
//
//
//     onTimeUpdate = () => {
//         let currentTime = this.refs.vidRef.currentTime;
//         currentTime = getTime(Math.floor(currentTime));
//         this.setState({progressIndex: currentTime})
//         // console.log(currentTime)
//     };
//
//     onDurationChange = () => {
//         let duration = this.refs.vidRef.duration;
//         duration = getTime(Math.floor(duration));
//         this.setState({progressCount: duration})
//         this.setState({progressIndex: 0})
//     };
//
// }

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


// const vidRef = useRef(null);

export function playVideo() {
    this.refs.vidRef.play();
    console.log(this.refs);
}

export function pauseVideo() {
    this.refs.vidRef.pause();
    console.log(this.refs);
}

export let getTime = (time) => {
    let minutes = time < 60 ? 0 : Math.floor(time / 60);
    let seconds = Math.floor(time - (minutes * 60)) * .01;
    return (minutes + seconds).toFixed(2);
}
//
// export const onTimeUpdate = () => {
//     let currentTime = this.props.currentTime;
//     currentTime = getTime(Math.floor(currentTime));
//     this.setState({progressIndex: currentTime})
// };

