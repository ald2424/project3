import React from "react";
import { Route } from "react-router-dom";

// Creates a route where child component that it renders contains what is passed
// Route takes component prop where appProps is applied 
// Render method allows control of what is passed in component
export default function AppliedRoute({ component: C, appProps, ...rest }) {
    return (
        <Route {...rest} render={props => <C {...props} {...appProps} />} />
    );
}