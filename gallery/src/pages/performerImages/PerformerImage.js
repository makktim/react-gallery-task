import React, {useState} from 'react';
import {GalleryImage, Img, ImgBox, Caption, PublicTransparentBox} from '../style';
import {Link} from "react-router-dom";
import Modal from './ImageModal';

export default (props) => {

    const {performerImage: {previewImageUrl, url}} = props;


    const [ isOpen, setModal ] = useState(false);

    const openModal = () => {
        console.log(isOpen);
    };

    const closeModal = () => {
        setModal(false);
        console.log(isOpen);
    };

    return (
        <GalleryImage>

            <ImgBox>
                <Link to={url}>
                    <Img src={previewImageUrl} alt=""/>


                    <Modal isOpen={() => setModal(true)} >
                        <Img src={previewImageUrl} alt=""/>
                    </Modal>
                    <PublicTransparentBox>
                        <Caption>
                        </Caption>
                    </PublicTransparentBox>
                </Link>
            </ImgBox>

        </GalleryImage>

    )

};