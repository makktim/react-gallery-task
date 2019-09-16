import Styled from 'styled-components';
import {Device} from './Device';

const Body = Styled.div`
    padding: 0px;
    margin: auto;
    box-sizing: border-box;
    background: beige;
    
    @media screen and ${Device.mobileS} {
         max-width: 300px
     }
     
    @media screen and ${Device.mobileM} {
         max-width: 350px
     }
     
     @media screen and ${Device.mobileL} {
         max-width: 480px
     }

    @media screen and ${Device.tablet} {
        max-width: 768px
    }
    
    @media screen and ${Device.laptop} {
        max-width: 800px;
  }
  
    @media screen and ${Device.laptopL}{
        max-width: 1830px
    }

    @media screen and ${Device.desktop} {
        max-width: 2120px;
  }

 
`;


export default Body;
