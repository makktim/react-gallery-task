
import Styled from 'styled-components';
import { device } from './Device';

const Body = Styled.div`
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
    background: beige;
    
    @media ${device.mobile} {
         max-width: 480px
     }

    @media ${device.tablet} {
        max-width: 768px
    }
    
    @media ${device.laptop}{
        max-width: 960px
    };
 
`;


export default Body;
