import React, {Component} from 'react';
import PerformerList from "./pages/performersList/PerformerList";
import NavBar from "./navigation/NavBar";
import {BrowserRouter, Route} from "react-router-dom";
import styled from "styled-components";
import PerformerAlbumList from "./pages/performerAlbums/PerformerAlbumList";
import PerformerImageList from "./pages/performerImages/PerformerImageList";

const Body = styled.div`
    padding: 0px;
    margin: 0px;
    background-color: burlywood;
`;


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Body>
                    <NavBar />
                    <Route exact path='/' component={PerformerList} />
                    <Route path='/gallery' component={PerformerList} />
                    <Route path="/en/gallery/:pid/folders" component={PerformerAlbumList} />
                    <Route path="/en/gallery/:pid/image-folder-content/:id/" component={PerformerImageList} />
                </Body>
            </BrowserRouter>
        );
    }

}

export default App;