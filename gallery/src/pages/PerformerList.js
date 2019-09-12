import React, {Component} from 'react';
import styled from "styled-components";
import Body from './Page';
import {device} from './Device';
import './PerformerList.css';


const Title = styled.h2`
    padding: 20px;
    text-align: center;
    background: darkred;
    color: beige;
`;

const Gallery = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap-reverse;
    justify-content: center;
`;

const Image = styled.img`   
    flex: 25%;
    margin: 2px;
    overflow: hidden;
    cursor: pointer;
    width: 100%;
    height: 100%;
    &:hover{
        opacity: 0.5;
        border: darkred 1px solid;
        box-shadow: -1px 1px 3px 3px darkred;
      
    }
`;

const GalleryContent = styled.div`
         @media ${device.mobile} {
         flex: 100%;
     }

    @media ${device.tablet} {
        flex: 50%;
    }
    
    @media ${device.laptop}{
        flex: 33%;
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
                <Title>Gallery</Title>
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