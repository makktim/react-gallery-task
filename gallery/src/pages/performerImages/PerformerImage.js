import React, {useState} from 'react';
import {GalleryImage, Img, ImgBox, Caption, PublicTransparentBox, ShowButton} from '../style';
import PerformerImageList from "./PerformerImageList";

export default (props) => {

    const {performerImage: {previewImageUrl, id, title, index}} = props;

    // const {performerImage} = props;
    console.log(props);

    return (
        <GalleryImage key={id}>
            <ImgBox>
                <Img src={previewImageUrl} alt=""/>
                <PublicTransparentBox>
                    <Caption>
                        <p>{title}
                            {/*<ShowButton onClick={(e) => {*/}
                            {/*    this.setState({performerImage: performerImage});*/}
                            {/*    this.setState({isOpen: true});*/}
                            {/*    this.setState({index: index});*/}
                            {/*}}>show</ShowButton>*/}
                        </p>
                    </Caption>
                </PublicTransparentBox>
            </ImgBox>
        </GalleryImage>

    )

};

