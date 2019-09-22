import React from 'react';
import { Link } from 'react-router-dom';
import lock from "../images/229652.png";
import { GalleryImage, Img, ImgBox, Caption, PrivateTransparentBox, PublicTransparentBox, LockImg } from '../style';


export default (props) => {

    const { performerAlbum: { previewImageUrl, privacy, id, title } } = props;
    const { modelName } = props;



    if (privacy === "exclusive") {
        return (
            <GalleryImage>
                <ImgBox>
                    <LockImg src={lock} alt="" />
                    <Img src={previewImageUrl} alt="" />
                    <PrivateTransparentBox>
                        <Caption>
                            <p>{title}</p>
                        </Caption>
                    </PrivateTransparentBox>
                </ImgBox>
            </GalleryImage>
        )
    } else {
        return (
            <GalleryImage>
                <ImgBox>

                    <Link to={'/en/gallery/' + modelName + '/image-folder-content/' + id + "/"}>
                        <Img src={previewImageUrl} alt="" />
                        <PublicTransparentBox>
                            <Caption>
                                <p>{title}</p>
                            </Caption>
                        </PublicTransparentBox>
                    </Link>
                </ImgBox>
            </GalleryImage>
        )
    }
};