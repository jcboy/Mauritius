import {Redirect, Route} from "react-router-dom";

const ProtectedRoute = ({component: Component, ...rest}) => {


    /* <Route {...rest} render={(props) => {
         if (auth.isAuthenticated) {
             return <Component {...props} />
         } else {
             <Redirect to={
                 {
                     pathname: "/",
                     state: {
                         from: props.location
                     }
                 }
             } />
         }
     }} />*/

}

export default ProtectedRoute;