import React from 'react';
import {Link} from 'react-router-dom';
import {GalleryImage, Img, ImgBox, Caption, PublicTransparentBox} from '../style';


export default (props) => {

    const {performer: {profilePictureUrl, pid, id, index}} = props;


    if (id !== "freePeeks") {
        return (
            <GalleryImage key={index}>
                <ImgBox>
                    <Link to={'/en/gallery/' + pid + '/folders'} type="performerName">
                        <Img key={pid} src={profilePictureUrl} alt=""/>
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