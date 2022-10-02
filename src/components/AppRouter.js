import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Switch, Route, Redirect} from "react-router-dom";
import {authorisedRoutes, unauthorisedRoutes} from "../routes";
import {AUTH_ROUTE, MAIN_ROUTE} from "../resources/consts";
import {Context} from "../index";

const AppRouter = observer(() => {
    const {main} = useContext(Context);

    return (
        <Switch>
            {main.isAuth && authorisedRoutes.map(({ path, Component }) =>
                <Route key={path} path={path} component={Component} exact/>
            )}
            {unauthorisedRoutes.map(({ path, Component }) =>
                <Route key={path} path={path} component={Component} exact/>
            )}
            <Redirect to={AUTH_ROUTE} exact/>
        </Switch>
    );
});

export default AppRouter;