import React from 'react';
import lock from "../images/229652.png";
import {PlayButton, PlayerVideo} from './VideoStyle';
import {GalleryImage, LockImg} from '../style';


export default (props) => {

    const {performerVideo: {previewImageUrl, url, privacy, id}, onOpenModal, index, performerVideo} = props;


     const myAlert = () => {
         alert("you cannot see this :(")
    };

    if (privacy === "exclusive") {
        return (
            <GalleryImage key={id}>
                <PlayerVideo poster={previewImageUrl} src={url} onClick={myAlert} alt=""/>
                <LockImg src={lock} alt=""/>
            </GalleryImage>

        )
    }
    return (
        <GalleryImage key={id}>
            <PlayerVideo poster={previewImageUrl} src={url} alt=""/>
            <PlayButton onClick={(e) => {
                onOpenModal(index, performerVideo);
            }}>play</PlayButton>
        </GalleryImage>

    )

};
