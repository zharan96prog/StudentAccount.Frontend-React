import React, { Component } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import LoginPage from "../Pages/LoginPage/";
import RegistrationPage from "../Pages/RegisterPage/";
import ConfirmEmail from "../Pages/ConfirmEmail/";
//import Header from "../Pages/Header";
//import AdminPage from "../Admin/AdminPage/";
import StudentProfile from "../Pages/StudentProfile";

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
            <Route path="/" exact element={<LoginPage />}></Route>
            <Route path="/register" exact element={<RegistrationPage />}></Route>
            <Route path="/confirmemail" exact element={<ConfirmEmail />}></Route>
         </Routes>
      );
   }
}

export default App;
