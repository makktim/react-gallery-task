import styled from 'styled-components';

export const GalleryImage = styled.div`
    background-color: burlywood;
    display: flex;
    justify-content: center;
    width: 100%;
    float: left;
    position: relative;
    
    @media(min-width: 700px){
        width: 20%;
        display: flex;
        justify-content: space-around;
        }
    
    >img{
    height: auto;
    transform: scale(1.0);
    transition: transform 0.4s ease;
    
    }
`;

export const ImgBox = styled.div`
    box-sizing: content-box;
    margin: 10px;
    height: 250px;
    width: 350px;
    overflow: hidden;
    display: inline-block;
    color: white;
    position: relative;
    background-color: white;
    
    &:hover >img{
    transform: scale(1.1);
    }
    
    &:hover >transparent-box{
    background-color:rgba(0, 0, 0, 0.5);
    }
    
    &:hover{
    cursor: pointer;
    }
    
    &hover >caption{
       transform: translateY(-20px);
        opacity: 1.0;
        }
    
`;

export const Caption = styled.div`
    position: absolute;
    bottom: 5px;
    left: 20px;
    opacity: 0.0;
    transition: transform 0.3s ease, opacity 0.3s ease;
`;


export const TransparentBox = styled.div`
    height: 250px;
    width: 100%;
    background-color:rgba(0, 0, 0, 0);
    position: absolute;
    top: 0;
    left: 0;
    transition: background-color 0.3s ease;
`;