import React, {useState} from 'react';
import {GalleryImage, Img, ImgBox, Caption, PublicTransparentBox} from '../style';
import {Link} from "react-router-dom";
import Modal from './ImageModal';

export default (props) => {

    const {performerImage: {previewImageUrl, url}} = props;


    const [isOpen, setModal] = useState(false);


    const openModal = (props) => {
        // isOpen={useState(true)}
        setModal(true);
        console.log('hello');
        console.log(isOpen);

    };

    const closeModal = () => {
        isOpen(false);
        console.log(isOpen);
    };

    return (
        <GalleryImage>

            <ImgBox>
                {/*value={greeting} onChange={handleChange}*/}
                <button onClick={openModal.bind(this)}>PLAY</button>
                <Img src={previewImageUrl} alt=""/>
                <Modal isOpen={openModal.bind(this)} onClose={(e) => useState(false)}>
                {/*<Modal isOpen={useState(true)} onClose={(e) => useState(false)}>*/}
                    <Img src={previewImageUrl} alt=""/>
                    <PublicTransparentBox>
                        <Caption>
                        </Caption>
                    </PublicTransparentBox>
                </Modal>
            </ImgBox>

        </GalleryImage>

    )

};