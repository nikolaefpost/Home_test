import React from 'react';
import {routes} from "../routes";
import {START_ROUTE} from "../Utils/consts";
import {Redirect, Route, Switch} from "react-router-dom";


const AppRouter = () => {
    return (
        <Switch>
            {routes.map(({path, Component})=>
                <Route key={path} path={path} component={Component} exact />
            )}
            <Redirect to={START_ROUTE}/>
        </Switch>
    );
};

export default AppRouter;