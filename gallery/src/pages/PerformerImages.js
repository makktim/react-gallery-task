import React, {Component} from 'react';
import styled from "styled-components";
import axios from 'axios';
import Body from './BodySize';
import {Device} from './Device';
import lock from '../images/lock.svg';


const Gallery = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap-reverse;
    justify-content: center;
`;

const ImagePublic = styled.img`   
    flex: 25%;
    overflow: hidden;
    cursor: pointer;
    background-color: burlywood;
    padding-top: 5px;
    width: 100%;
    height: 100%;
    &:hover{
        opacity: 0.5;
        border: darkred 1px solid;
        box-shadow: -1px 1px 3px 3px darkred;
      
    }
    
`;

const ImagePrivate = styled.img`
    flex: 25%;
    overflow: hidden;
    cursor: pointer;
    background-color: black;
    padding-top: 5px;
    width: 100%;
    height: 100%;
    &:hover{
        opacity: 0.5;
        border: black 1px solid;
        box-shadow: -1px 1px 3px 3px black;

    }

`;

const GalleryContent = styled.div`
    

     @media screen and ${Device.mobileS} {
         flex: 100%;
         margin: 2px;
     }
     
     @media screen and ${Device.mobileM} {
         flex: 100%;
     }
     
      @media screen and ${Device.mobileL} {
         flex: 100%;
     }

    @media screen and ${Device.tablet} {
        flex: 49%;
        margin: 2px;
    }
    
    @media screen and ${Device.laptop}{
        flex: 33%;
        margin: 2px;
    }
    
    @media screen and ${Device.laptopL}{
        flex: 33%;
        margin: 2px;
    }
    
    @media screen and ${Device.desktop}{
        flex: 33%;
        margin: 2px;
    }
`;


class PerformerImages extends Component {

    state = {
        modelPictures: []
    }

    componentDidMount() {
        let modelName = this.props.match.params.pid;
        axios.get('/en/gallery/' + modelName + '/folders' )
            .then(res => {
                console.log(res)
                this.setState({'modelPictures': res.data.data})
            })
    }

    render() {
        const {modelPictures} = this.state;
        const modelPictureList = modelPictures.length ? (
            modelPictures.map(modelPicture => {
                if(modelPicture.privacy === "exclusive"){
                    return (
                        <GalleryContent>
                                <img className="lockImage" src={lock} alt="" />
                            <ImagePrivate key={modelPicture.pid} src={modelPicture.previewImageUrl} alt=""/>

                        </GalleryContent>
                    )

                }else{
                    return (
                        <GalleryContent>
                            <ImagePublic key={modelPicture.pid} src={modelPicture.previewImageUrl} alt=""/>
                        </GalleryContent>
                    )
                }

            })
        ) : (
            <GalleryContent>
                <p>No Models</p>
            </GalleryContent>

        );

        return (
            <Body>
                <Gallery>
                    {modelPictureList}
                </Gallery>
            </Body>
        );
    }

}

export default PerformerImages;