import React, {Component} from 'react';
import styled from "styled-components";
import Body from './BodySize';
import {device} from './Device';



const Gallery = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap-reverse;
    justify-content: center;
`;

const Image = styled.img`   
    flex: 25%;
    overflow: hidden;
    cursor: pointer;
    margin: 5px;
    width: 100%;
    height: 100%;
    &:hover{
        opacity: 0.5;
        border: darkred 1px solid;
        box-shadow: -1px 1px 3px 3px darkred;
      
    }
    
`;

const GalleryContent = styled.div`


     @media screen and ${device.mobileS} {
         flex: 100%;
     }
     
     @media screen and ${device.mobileM} {
         flex: 100%;
     }
     
      @media screen and ${device.mobileL} {
         flex: 100%;
     }

    @media screen and ${device.tablet} {
        flex: 50%;
        margin: 2px;
    }
    
    @media screen and ${device.laptop}{
        flex: 50%;
        margin: 2px;
    }
    
    @media screen and ${device.laptopL}{
        flex: 33%;
        margin: 2px;
    }
    
    @media screen and ${device.desktop}{
        flex: 33%;
        margin: 2px;
    }
`;


class PerformerList extends Component {
    constructor() {
        super();
        this.state = {
            performers: []
        }
    }

    componentDidMount() {
        fetch('/en/list-page-ajax/show-more-json/0/')
            .then(results => results.json())
            .then(performers => this.setState({'performers': performers.data.content.performers}))
    }

    render() {
        return (
            <Body>
                <Gallery>
                    {this.state.performers.map(function (item, index) {
                        return (
                            <GalleryContent>
                                <Image key={index} src={item.profilePictureUrl} alt=""/>
                            </GalleryContent>
                        )
                    })}
                </Gallery>
            </Body>
        );
    }

}

export default PerformerList;