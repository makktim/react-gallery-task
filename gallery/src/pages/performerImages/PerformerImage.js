import React, {useState} from 'react';
import {GalleryImage, Img, ImgBox, Caption, PublicTransparentBox} from '../style';
import {Link} from "react-router-dom";

export default (props) => {

    const {performerImage: {previewImageUrl, url}} = props;

    return (
        <GalleryImage>

            <ImgBox>
                <Img src={previewImageUrl} alt=""/>
                    <Img src={previewImageUrl} alt=""/>
                    <PublicTransparentBox>
                        <Caption>
                        </Caption>
                    </PublicTransparentBox>
            </ImgBox>
        </GalleryImage>

    )

};