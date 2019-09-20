import React from 'react';
import {Link} from 'react-router-dom';
import styled from "styled-components";
import './performersList/gallery.css';
import lock from "../images/lockicon.png";


const LockImg = styled.img`
    position: absolute;
    margin:15px;
`;

export default (props) => {

    const {performerAlbum: {previewImageUrl, privacy, id }} = props;
    const {modelName} = props;
    console.log(props)
    console.log(modelName);


    if (privacy === "exclusive") {
        return (
            <div className="gallery-image">
                <div className="img-box">

                    <img className="lockImage" src={lock} alt=""/>
                    <Link to={'/en/gallery/' + modelName + '/image-folder-content/' + id + "/"}>
                        <img src={previewImageUrl} alt=""/>
                        <div className="transparent-box">
                            <div className="caption">
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        )
    }else{
            return (
                <div className="gallery-image">
                    <div className="img-box">

                        <Link to={'/en/gallery/' + modelName + '/image-folder-content/' + id + "/"}>
                            <img src={previewImageUrl} alt=""/>
                            <div className="transparent-box">
                                <div className="caption">
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            )
        }
};