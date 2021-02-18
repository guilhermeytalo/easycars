import React from 'react';
import Home from "./pages/home/home";
import {ThemeProvider} from "styled-components";
import {Route, Switch} from "react-router-dom";
import ListCars from "./pages/listCars/listCars";
import {defaultTheme} from "./globalStyles";

function App() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <Route>
                <Switch>
                    <Route path='/'>
                        <Home/>
                    </Route>
                    <Route path='/listCars'>
                        <ListCars/>
                    </Route>
                </Switch>
            </Route>
        </ThemeProvider>
    );
}

export default App;
