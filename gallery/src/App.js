import React from 'react';
import PerformerList from "./pages/PerformerList";
import NavBar from "./pages/NavBar";

function App() {
    return (
        <div className="App">
            <NavBar/>
            <PerformerList/>
        </div>
    );
}

export default App;