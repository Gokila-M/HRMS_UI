/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
  import "mdbreact/dist/css/mdb.css";
  import "@fortawesome/fontawesome-free/css/all.min.css";
import App from "App";
import 'bootstrap/dist/css/bootstrap.min.css';
import "mdbreact/dist/css/mdb.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
// Material Dashboard 2 React Context Provider
import { MaterialUIControllerProvider } from "context";
import RoleMenuAccess from "context/roleMenuAccess";
import UserId from "context/userIdContext";


ReactDOM.render(
  <BrowserRouter>
    <RoleMenuAccess.Provider value={{user:{roleMenuAccess:[],isOwner:false}}}>
      <UserId.Provider value={{userId:{id:""}}}>
        <MaterialUIControllerProvider>
          <App />
        </MaterialUIControllerProvider>
      </UserId.Provider>
    </RoleMenuAccess.Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
