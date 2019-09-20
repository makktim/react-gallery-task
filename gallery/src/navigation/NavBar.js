import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

const NavBarStyle = styled.nav`
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

  .link{
    background: darkred;
    color: beige;
    overflow: hidden;
    text-decoration: none;
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
      <Link to="/gallery" className="link">Gallery</Link>
      <Title>Gallery</Title>
    </NavBarStyle>

  )
};
export default NavBar;
