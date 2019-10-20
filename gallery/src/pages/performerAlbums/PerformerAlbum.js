import React from 'react';
import {Link} from 'react-router-dom';
import lock from "../images/229652.png";
import {GalleryImage, Img, ImgBox, Caption, PrivateTransparentBox, PublicTransparentBox, LockImg} from '../style';


export default (props) => {

    const {performerAlbum: {previewImageUrl, id, title, type, index, privacy}} = props;
    const {modelName} = props;


    if (privacy === "exclusive") {
        if (type === "video") {
            return (
                <GalleryImage key={index}>
                    <ImgBox>
                        <Link
                            to={'/en/gallery/' + modelName + '/video-folder-content/' + privacy + '/'}>
                            <LockImg src={lock} alt=""/>
                            <Img key={index} src={previewImageUrl} alt=""/>
                            <PrivateTransparentBox>
                                <Caption>
                                    <p>video</p>
                                </Caption>
                            </PrivateTransparentBox>
                        </Link>
                    </ImgBox>
                </GalleryImage>
            )
        } else {
            return (
                <GalleryImage key={index}>
                    <ImgBox>
                        <LockImg src={lock} alt=""/>
                        <Img src={previewImageUrl} alt=""/>
                        <PrivateTransparentBox>
                            <Caption>
                                <p>{title}</p>
                            </Caption>
                        </PrivateTransparentBox>
                    </ImgBox>
                </GalleryImage>
            )
        }
    }

    if (privacy === "public" && type === "video") {
            return (
                <GalleryImage key={index}>
                    <ImgBox>
                        <Link to={'/en/gallery/' + modelName + '/video-folder-content/' + privacy + '/'}>
                            <Img src={previewImageUrl} alt=""/>
                            <PublicTransparentBox>
                                <Caption>
                                    <p>video</p>
                                </Caption>
                            </PublicTransparentBox>
                        </Link>
                    </ImgBox>
                </GalleryImage>
            )
        } else {
            return (
                <GalleryImage key={index}>
                    <ImgBox>
                        <Link
                            to={'/en/gallery/' + modelName + '/image-folder-content/' + id + "/"}>
                            <Img src={previewImageUrl} alt=""/>
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