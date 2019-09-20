import React from 'react';
import {Link} from 'react-router-dom';
import styled from "styled-components";
import lock from "../images/lockicon.png";
import {GalleryImage, Img, ImgBox, Caption, TransparentBox, LockImg} from '../style';


export default (props) => {

    const {performerAlbum: {previewImageUrl, privacy, id, title}} = props;
    const {modelName} = props;
    console.log(props)
    console.log(modelName);


    if (privacy === "exclusive") {
        return (
                <GalleryImage>
                    <ImgBox>
                        <LockImg src={lock} alt=""/>
                        <Link to={'/en/gallery/' + modelName + '/image-folder-content/' + id + "/"}>
                            <Img src={previewImageUrl} alt=""/>
                            <TransparentBox>
                                <Caption>
                                    <p>{title}</p>
                                </Caption>
                            </TransparentBox>
                        </Link>
                    </ImgBox>
                </GalleryImage>
        )
    } else {
        return (
                <GalleryImage>
                    <ImgBox>

                        <Link to={'/en/gallery/' + modelName + '/image-folder-content/' + id + "/"}>
                            <Img src={previewImageUrl} alt=""/>
                            <TransparentBox>
                                <Caption>
                                    <p>{title}</p>
                                </Caption>
                            </TransparentBox>
                        </Link>
                    </ImgBox>
                </GalleryImage>
        )
    }
};