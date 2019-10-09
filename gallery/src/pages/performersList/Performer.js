import React from 'react';
import {Link} from 'react-router-dom';
import {GalleryImage, Img, ImgBox, Caption, PublicTransparentBox} from '../style';


export default (props) => {

    const {performers: {profilePictureUrl, pid, id}} = props;


    if (id !== "promotion") {
        return (
            <GalleryImage>
                <ImgBox>
                    <Link to={'/en/gallery/' + pid + '/folders'}>
                        <Img src={profilePictureUrl} alt=""/>
                        <PublicTransparentBox>
                            <Caption>
                                <p>{pid}</p>
                            </Caption>
                        </PublicTransparentBox>
                    </Link>
                </ImgBox>
            </GalleryImage>
        )
    } else {
        return null;
    }

};