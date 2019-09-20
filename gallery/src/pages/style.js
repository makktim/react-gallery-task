import React from 'react';
import styled from "styled-components";


export const GalleryImage = styled.div`
    display: flex;
    justify-content: center;
    width: auto;
    float: left;
    position: relative;
    height: auto;
    transition: transform 0.4s ease;
    
    @media(min-width: 700px){
        width: 33.33333%;
        display: flex;
        justify-content: space-around;
    }
    
    `;

export const Img = styled.img`
    height: auto;
    transition: transform 0.4s ease;
    
    &:hover{
        transform: scale(1.1);
        }
`;

export const ImgBox = styled.div`
    margin: 10px;
    height: auto;
    width: auto;
    overflow: hidden;
    position: relative;
    cursor: pointer;
    
    
    &:hover{
        background-color:rgba(0, 0, 0, 0.5);
        

`;

export const Caption = styled.div`
    position: absolute;
    bottom: 0;
    background-color: rgba(123, 0, 0, 0.5);
    width: 100%;
    padding-left: 20px;
    
    >p{
        color: wheat;;
    }
`;

export const TransparentBox = styled.div`
    height: 100%;
    width: 100%;
    background-color:rgba(0, 0, 0, 0);
    position: absolute;
    top: 0;
    left: 0;
    transition: background-color 0.3s ease;
    
    &:hover{
        background-color:rgba(51, 0, 0, 0.5);
        }
`;

export const LockImg = styled.img`
    position: absolute;
    background: transparent;
    margin:15px;
`;