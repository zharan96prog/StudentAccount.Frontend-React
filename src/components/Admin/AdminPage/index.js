import React, { Component, Fragment } from "react";
import Header from "../../Pages/Header/index";
import StudentTable from "../../Admin/StudentTable";
class AdminPage extends Component {
   render() {
      return (
         <Fragment>
            <Header />
            <StudentTable />
         </Fragment>
      );
   }
}
export default AdminPage;
