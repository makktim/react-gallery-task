import styled from "styled-components";


export const GalleryImage = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    position: relative;
    height: 100%;
    transition: transform 0.4s ease;
    
    @media(min-width: 700px){
        width: 33.33333%;
        float: left;
        display: flex;
        justify-content: space-around;
    }
    
    `;

export const Img = styled.img`
    height: auto;
    width: 100%;
    transition: transform 0.4s ease;
    
    &:hover{
        transform: scale(1.1);
    }
`;

export const ImgBox = styled.div`
    margin: 10px;
    border: 1px solid darkred;
    height: 267px;
    width: 400px;
    overflow: hidden;
    position: relative;
    cursor: pointer;
   
    &:hover{
        background-color:rgba(0, 0, 0, 0.5);
    }

`;

export const Caption = styled.div`
    position: absolute;
    bottom: 0;
    background-color: rgba(123, 0, 0, 0.5);
    width: 100%;
    padding-left: 20px;
    
    >p{
        color: wheat;
    }
`;

export const PublicTransparentBox = styled.div`
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transition: background-color 0.3s ease;
    
    &:hover{
        background-color:rgba(51, 0, 0, 0.5);
    }
`;

export const PrivateTransparentBox = styled.div`
    background-color:rgba(51, 0, 0, 0.6);
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transition: background-color 0.3s ease;
    
    &:hover{
        background-color:rgba(51, 0, 0, 0.3);
    }
`;

export const LockImg = styled.img`
    position: absolute;
    background: transparent;
    max-height: 170px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin:15px;
`;

export const Button = styled.button`
    position: absolute;
    background: darkred;
    color: beige;
    width: 100%;
    bottom: 0;
    border: 1px solid darkred;
    padding: 15px;
`;

export const ModalImg = styled.div`
    width: 100%;
    height: auto;
    object-fit: cover;
    position: relative;
    cursor: pointer;
`;


export const ArrowImg = styled.img`
    cursor: pointer;
    position: absolute;
    top: 50%;
    width: auto;
    padding: 5px;
    margin-left: 30px;
    margin-top: -50px;
    user-select: none;
    border-radius: 50%;
    background-color: #deb887db;
    -webkit-user-select: none;

`;

export const NextArrowImg = styled.img`
    cursor: pointer;
    position: absolute;
    top: 50%;
    width: auto;
    padding: 5px;
    margin-right: 35px;
    margin-top: -50px;
    border-radius: 50%;
    user-select: none;
    background-color: #deb887db;
    -webkit-user-select: none;
    right: 99%;

`;

export const OpenImg = styled.img`
    height: auto;
    max-height: 800px;
    max-width: 600px;
    width: 100%;
    transition: transform 0.4s ease;
   
`;

export const ShowButton = styled.button`
    background-color:rgba(51, 0, 0, 0.6);
    border: 1px solid darkred;
    float: right;
    margin-right: 10%;
    margin-bottom: 5%;
    right: 10%;
    color: beige;   
    box-shadow: 0 0 4px 3px black;
    
        &:hover{
          background-color:rgba(0, 0, 0, 0.5);
        }
`;