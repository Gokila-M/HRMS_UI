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

// @mui material components
// import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
// import MDBox from "components/MDBox";

// Material Dashboard 2 React example components

import MDBox from 'components/MDBox';
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout';
import DashboardNavbar from 'examples/Navbars/DashboardNavbar';
import React, { useState, useEffect } from 'react';
import { getProfile } from 'utility/apiService';
import Grid from '@mui/material/Grid';
import ComplexStatisticsCard from 'examples/Cards/StatisticsCards/ComplexStatisticsCard';
import src from 'assets/video.mp4'
// import DashTable from 'examples/DashboardTable/DashTable';
// import Footer from "examples/Footer";
import Footer from 'examples/Footer';
import Documents from 'layouts/createEmployee/components/Documents';
import Profile from 'examples/Cards/InfoCards/ProfileViewCard';
import DashCard from 'examples/Cards/StatisticsCards/ComplexStatisticsCard/DashCard';

import UserForm2 from 'layouts/createEmployee/components/UserForm2';
import DashTable from 'examples/DashboardTable/DashTable';
// import TopSearchSelect from 'layouts/Tables1';


// Data

// Dashboard components
function Dashboard() {
     const [data, setData] = useState('');
     // const [role,setRole]=useState("")
     let token=JSON.parse(localStorage.getItem("hrms-auth-token"))
     useEffect(()=>{
          getProfile(token).then((data)=>{
              //  console.log(data?.data)
               setData(data?.data)
          })},[])

let Name=data?.firstName
let email=data?.email
let mobileNo=data?.mobileNo
// let time=data?.updatedAt

     return (
          <DashboardLayout>
               <DashboardNavbar />
               <MDBox py={3} >
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
               <MDBox>
                    <Profile
                         title={Name}
                         designation={mobileNo}
                         email={email}
                    />
               </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3} height sx={{alignSelf:"center"}}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="success"
                icon="weekend"
                title="TOTAL WORKING DAYS"
                count={26}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3} height  sx={{alignSelf:"center"}}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="error"
                icon="weekend"
                title="TOTAL LEAVE TAKEN"
                count={0}
              />
            </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={3} height sx={{alignSelf:"center"}}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="dark"
                icon="weekend"
                title="TOTAL ATTENDENCE"
                count={28}
              />
            </MDBox>
          </Grid>   
        </Grid>    
      </MDBox>

      <MDBox>
        <DashTable/>
      </MDBox>
          </DashboardLayout>
     );
}

export default Dashboard;
