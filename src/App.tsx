import React from 'react';
import Home from "./pages/introScreen/home";
import {ThemeProvider} from "styled-components";
import {defaultTheme} from "./globalStyles";

function App() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <Home/>
        </ThemeProvider>
    );
}

export default App;
