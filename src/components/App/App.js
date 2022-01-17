import React, { Component } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import LoginPage from "../Pages/LoginPage/";
import RegistrationPage from "../Pages/RegisterPage/";
import ConfirmEmail from "../Pages/ConfirmEmail/";

class App extends Component {
   PrivateRoute({ children, ...rest }) {
      return (
         <Route
            {...rest}
            render={({ location }) =>
               localStorage.getItem("studAcc-Token") ? (
                  children
               ) : (
                  <Navigate to={{ pathname: "/", state: { from: location } }} />
               )
            }
         />
      );
   }

   RoleRoute({ children, ...rest }) {
      return (
         <Route
            {...rest}
            render={({ location }) => {
               if (localStorage.getItem("studAcc-Role") === "admin") {
                  return children;
               } else {
                  return (
                     <Navigate
                        to={{ pathname: "/main", state: { from: location } }}
                     />
                  );
               }
            }}
         />
      );
   }

   render() {
      return (
         <Routes>
            <Route path="/" exact render={() => <LoginPage />} />
            <Route path="/register" exact render={() => <RegistrationPage />} />
            <Route path="/confirmemail" exact render={() => <ConfirmEmail />} />
         </Routes>
      );
   }
}

export default App;
