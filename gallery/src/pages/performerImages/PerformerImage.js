import React, {useState} from 'react';
import {
    GalleryImage,
    Img,
    ImgBox,
    Caption,
    PublicTransparentBox,
    ShowButton,
    ModalImg,
    OpenImg,
    NextArrowImg, ArrowImg
} from '../style';
import PerformerImageList from "./PerformerImageList";
import Modal from "../modal/Modal";
import leftArrow from "../images/left_arrow.png";
import rightArrow from "../images/right_arrow.png";


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

