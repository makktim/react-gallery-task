import React from 'react';

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
};

