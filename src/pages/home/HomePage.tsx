import React from "react";
import DemoUseReducer from "components/DemoUseReducer";
import {useAuth} from "hooks/useAuth";
import {Navigate} from "react-router-dom";
import RoutePath from "config/Routes";
import Spinner from "components/Spinner";

function HomePage(): React.JSX.Element {
    const {user, isAuthenticated, isInitialized} = useAuth();
    console.log(isInitialized, isAuthenticated)
    if (!isInitialized) {
        return <Spinner/>
    }

    if (isAuthenticated) {
        return <Navigate to={RoutePath.HomePage}/>
    }

    return (
        <DemoUseReducer/>
    );
}
export default HomePage