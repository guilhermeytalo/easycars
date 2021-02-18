import React from 'react';
import Home from "./pages/home/home";
import {ThemeProvider} from "styled-components";
import {defaultTheme} from "./globalStyles";
import {Route, Switch} from "react-router-dom";
import ListCars from "./pages/listCars/listCars";

function App() {
    return (
        <Route>
            <ThemeProvider theme={defaultTheme}>
            <Switch>
                <Route path='/'>
                    <Home />
                </Route>
                <Route path='/listCars'>
                    <ListCars />
                </Route>
            </Switch>
            </ThemeProvider>
        </Route>
    );
}

export default App;
