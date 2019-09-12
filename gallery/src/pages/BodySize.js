import Styled from 'styled-components';
import {device} from './Device';

const Body = Styled.div`
    padding: 0px;
    margin: auto;
    box-sizing: border-box;
    background: beige;
    
    @media screen and ${device.mobileS} {
         max-width: 300px
     }
     
    @media screen and ${device.mobileM} {
         max-width: 350px
     }
     
     @media screen and ${device.mobileL} {
         max-width: 480px
     }

    @media screen and ${device.tablet} {
        max-width: 768px
    }
    
    @media screen and ${device.laptop} {
        max-width: 800px;
  }
  
    @media screen and ${device.laptopL}{
        max-width: 1830px
    }

    @media screen and ${device.desktop} {
        max-width: 2120px;
  }

 
`;


export default Body;
