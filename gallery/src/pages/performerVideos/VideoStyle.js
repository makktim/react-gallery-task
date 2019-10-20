import styled from "styled-components";


export const PlayButton = styled.button`
    position: absolute;
    background-color:rgba(51, 0, 0, 0.6);
    color: beige;
    max-height: 170px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    margin:15px;
    padding: 14px 40px;
    box-shadow: 0 0 9px 7px black;
    
        &:hover{
            background-color:rgba(0, 0, 0, 0.5);
            padding: 20px 45px;
        }
`;

export const Player = styled.div`
    max-width: 900px;
    box-shadow: 0 0 20px rgba(0,0,0,0.2);
    position: relative;
    font-size: 0;
`;

export const PlayerVideo = styled.video`
    width: 97%;
    margin: 5px;
    border: 1px solid darkred;
    box-shadow: 0 0 7px 4px black;
    position: relative;
    cursor: pointer;
    
    
    &:hover{
        background-color:rgba(0, 0, 0, 0.5);
    }
                    
`;

export const PlayerControls = styled.div`
    display: flex;
    position: absolute;
    bottom: 15%;
    width: 99%;
    transform: translateY(100%) translateY(-5px);
    transition: all .3s;
    flex-wrap: wrap;
    background: rgba(0,0,0,0.1);
    
    @media(min-width: 700px){
        bottom: 1%;
    }

    
`;

export const Progress = styled.div`
    flex: 10;
    position: relative;
    display: flex;
    flex-basis: 100%;
    height: 5px;
    transition: height 0.3s;
    background: rgba(0,0,0,0.5);
    cursor: ew-resize;
    
    &:hover{
      height: 15px;
    }
    
`;

export const PlayerButton = styled.img`
    background: none;
    border: 0;
    line-height: 1;
    color: white;
    text-align: center;
    outline: 0;
    padding: 0;
    cursor: pointer;
    max-width: 50px;
    
`;

export const ProgressFilled = styled.div`
    width: 50%;
    background: burlywood;
    flex: 0;
    flex-basis: ${({progress}) => progress + '%'};
    
`;

export const VolumeRange = styled.input`
    -webkit-appearance: none;
    margin-top: 12%;
    height: 15px;
    width: 115px;
    border-radius: 5px;
    background: burlywood;
    outline: none;
    opacity: 0.7;
    -webkit-transition: .2s;
    transition: opacity .2s;
  
      @media(min-width: 700px){
        width: 180px;
        margin-top: 8%;
    }
  

      &:hover{
        opacity: 1;
      }
`;


export const CurrentTime = styled.button`
    color: white;
    background: transparent;
    border: none;
    
`;

