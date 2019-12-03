import React from 'react';
import {
    GalleryImage,
    Img,
    ImgBox,
    Caption,
    PublicTransparentBox,
    ShowButton
} from '../style';


export default (props) => {

    const {performerImage: {previewImageUrl, id, title}, onOpenModal, index, performerImage} = props;


    return (
        <GalleryImage key={id}>
            <ImgBox>
                <Img src={previewImageUrl} alt=""/>
                <PublicTransparentBox>
                    <Caption>
                        <p>{title}
                            <ShowButton onClick={(e) => {
                                onOpenModal(index, performerImage);
                            }}>show</ShowButton>
                        </p>
                    </Caption>
                </PublicTransparentBox>
            </ImgBox>
        </GalleryImage>

    )

};

