


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

// export const onTimeUpdate = () => {

    // let currentTime = this.refs.vidRef.currentTime;
    // currentTime = getTime(Math.floor(currentTime));
    // this.setState({progressIndex: currentTime})
// };