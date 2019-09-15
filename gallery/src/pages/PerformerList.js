import React, { Component } from 'react';
import styled from "styled-components";
import axios from 'axios';
import Body from './BodySize';
import { Device } from './Device';
import {Link} from 'react-router-dom';


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

const GalleryContent = styled.div`

    background: beige;

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


class PerformerList extends Component {

    state = {
            performers: []
        }

    componentDidMount() {
        axios.get('/en/list-page-ajax/show-more-json/0/')
            .then(res => {
                console.log(res)
                this.setState({ 'performers': res.data.data.content.performers})})
    }

    render() {
        const { performers } = this.state;
        const performerList = performers.length ? (
            performers.map(performer => {
                return (
                    <GalleryContent>
                        <Link to={'/en/gallery/' + performer.pid + '/folders'}>
                        <Image key={performer.pid} src={performer.profilePictureUrl} alt=""/>
                        </Link>
                    </GalleryContent>
                )
            })
        ) : (
            <GalleryContent>
                <p>No Models</p>
            </GalleryContent>

        );

        return (
            <Body>
                <Gallery>
                    {performerList}
                </Gallery>
            </Body>
        );
    }

}

export default PerformerList;