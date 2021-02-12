import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ListCars from "./pages/listCars/listCars";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import ErrorPage from "./components/404/error404";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={App} />
                <Route path="/listCars" exact={true} component={ListCars} />
                <Route path="*" component={ErrorPage} />
            </Switch>
        </BrowserRouter>
    </React.StrictMode>
,
document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitalsreportWebVitals();
