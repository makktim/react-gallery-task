import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const NavBarStyle = styled.div`   
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


const ButtonStyle = styled.a` 
    float: right;
    color: beige;
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

const Title = styled.h2`
    text-align: left;
    margin-left: 15px;
    color: beige;
    
    @media screen and (max-width: 768px) {
         text-align: center;
  }
`;


const NavBar = () => {
  return (
    <NavBarStyle>
      <ButtonStyle><Link to="/gallery">Gallery</Link></ButtonStyle>
      <ButtonStyle><Link to="/Promotion">Promotion</Link></ButtonStyle>
      <ButtonStyle><Link to="/awards">Awards</Link></ButtonStyle>
      {/*<ButtonStyle as={Link} href="/gallery" prefetch>newG</ButtonStyle>*/}
      <Title>Gallery</Title>
    </NavBarStyle>

  )
}

export default NavBar;
