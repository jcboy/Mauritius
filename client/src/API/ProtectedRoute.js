import {Route} from "react-router-dom";
import auth from "./authentication"

const ProtectedRoute = ({component: Component, ...rest}) => {

    return (
        < Route {...rest} render={(props) => {
            if (auth.isLoggedIn()) {
                return <Component {...props} />
            } else {
                props.history.push("/login")
            }
        }}/>
    )
}

export default ProtectedRoute;