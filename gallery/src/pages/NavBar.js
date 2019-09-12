import React, {Component} from 'react';
import Styled from 'styled-components';

const NavBarStyle = Styled.div`   
    background: darkred;
    color: beige;
    overflow: hidden;
  
  @media screen and (max-width: 768px) {
  }
  
   @media screen and (max-width: 300px) {
    padding: 0;
    right: 0;
    top: 0;
  }
    
`;


const ButtonStyle = Styled.div` 
    float: right;
    margin: 5px;
    padding: 15px;
    cursor: pointer;
    &:hover{
          background-color: beige;
          color: darkred;
    }
    &:active{
          background-color: beige;
          color: darkred;
     }
          
      @media screen and (max-width: 768px) {
         margin 10px;
  }
    
`;

const Title = Styled.h2`
    text-align: left;
    margin-left: 15px;
    background: darkred;
    color: beige;
    
    @media screen and (max-width: 768px) {
         text-align: center;
  }
`;


class NavBar extends Component {
    render() {
        return (
            <NavBarStyle>
                <ButtonStyle>Gallery</ButtonStyle>
                <ButtonStyle>Contact</ButtonStyle>
                <ButtonStyle>About</ButtonStyle>
                <Title>Gallery</Title>
            </NavBarStyle>
        )
    }
}

export default NavBar;