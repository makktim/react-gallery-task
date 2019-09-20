import React from 'react';
import {Link} from 'react-router-dom';
// import './gallery.css';
import {GalleryImage, Img, ImgBox, Caption, TransparentBox} from '../style';


export default (props) => {

    const {performer: {profilePictureUrl, pid, id}} = props;
    console.log(id);

    if(id !== "promotion"){
        return (
            <GalleryImage>
                <ImgBox>
                    <Link to={'/en/gallery/' + pid + '/folders'}>
                        <Img src={profilePictureUrl} alt=""/>
                        <TransparentBox>
                            <Caption>
                                <p>{pid}</p>
                            </Caption>
                        </TransparentBox>
                    </Link>
                </ImgBox>
            </GalleryImage>
        )
    }else{
        return null;
    }

};