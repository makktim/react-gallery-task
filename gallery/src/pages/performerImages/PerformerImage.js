import React from 'react';
import {GalleryImage, Img, ImgBox, Caption, PublicTransparentBox} from '../style';

export default (props) => {

    const {performerImage: {previewImageUrl}} = props;

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