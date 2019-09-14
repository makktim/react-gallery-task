import React, { Component } from 'react';
import PerformerList from "./pages/PerformerList";
import NavBar from "./pages/NavBar";
import { BrowserRouter, Route } from "react-router-dom";
import Awards from "./pages/Awards";
import Promotion from "./pages/Promotion";
import styled from "styled-components";

const Body = styled.div`
    background-color: burlywood;
    padding: 0px;
    margin: auto;
    box-sizing: border-box;

`;


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Body>
                    <NavBar />
                    <Route exact path='/' component={PerformerList} />
                    <Route path='/gallery' component={PerformerList} />
                    <Route path='/promotion' component={Promotion} />
                    <Route path='/awards' component={Awards} />
                </Body>
            </BrowserRouter>
        );
    }

}

export default App;