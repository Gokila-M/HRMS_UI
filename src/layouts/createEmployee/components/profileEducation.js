import { Grid } from '@mui/material';
import { Divider } from 'antd';
import MDBox from 'components/MDBox';
import MDTypography from 'components/MDTypography';
import { useMaterialUIController } from 'context';
import React, { useEffect, useState } from 'react';
// import jwt_decode from "jwt-decode";
// import { getEducationById } from 'utility/apiService';
// import { educationView } from 'utility/apiService';

export default function ProfileEducation({ educationdata }) {
     const [controller] = useMaterialUIController();
     const { miniSidenav, transparentSidenav, whiteSidenav, darkMode, sidenavColor } = controller;
     // const [val,setVal]=useState({})

     let textColor = "inherit";
     
     if (transparentSidenav || (whiteSidenav && !darkMode)) {
         textColor = "dark";
       } else if ( darkMode) {
         textColor = "inherit";
       }

       
     //   const token= JSON.parse(localStorage.getItem("hrms-auth-token"))
     //   console.log("hello", token);
     //  let decode=jwt_decode(token);
     //   console.log("decode:",decode);
     //   let id=decode.id;
     // console.log("id from token",id);
    
     // console.log(educationdata?)
    
     return (
          <>
               <MDTypography variant='h6' color={textColor} ml={2}>
                    SSLC
               </MDTypography>
               <MDBox display='flex' flexDirection='column' alignItems='center' p={2}>
                    <Grid container spacing={3}>
                         <Grid item xs={12} md={6}>
                              <MDBox mb={2}>
                                   <MDTypography variant='body2' color={textColor}>
                                        School Name :  <b>{educationdata?.sslc?.sslcSchoolName}</b>
                                   </MDTypography>
                              </MDBox>
                         </Grid>
                         <Grid item xs={12} md={6}>
                              <MDBox mb={2}>
                                   <MDTypography variant='body2' color={textColor}>
                                        Board of Studied :  <b>{educationdata?.sslc?.sslcBoard}</b>
                                   </MDTypography>
                              </MDBox>
                         </Grid>
                    </Grid>
                    <Grid container spacing={3}>
                         <Grid item xs={12} md={6}>
                              <MDBox mb={2}>
                                   <MDTypography variant='body2' color={textColor}>
                                        Year of Passing :  <b>{educationdata?.sslc?.sslcYearOfPassing}</b>
                                   </MDTypography>
                              </MDBox>
                         </Grid>
                         <Grid item xs={12} md={6}>
                              <MDBox mb={2}>
                                   <MDTypography variant='body2' color={textColor}>
                                        Percentage :  <b>{educationdata?.sslc?.sslcPercentage} %</b> 
                                   </MDTypography>
                              </MDBox>
                         </Grid>
                    </Grid>
               </MDBox>
               <Divider />
               <MDTypography variant='h6' color={textColor} ml={2}>
                    HSC
               </MDTypography>
               <MDBox display='flex' flexDirection='column' alignItems='center' p={2}>
                    <Grid container spacing={3}>
                         <Grid item xs={12} md={6}>
                              <MDBox mb={2}>
                                   <MDTypography variant='body2' color={textColor}>School Name :  <b>{educationdata?.hsc?.hscSchoolName} </b> </MDTypography>
                              </MDBox>
                         </Grid>
                         <Grid item xs={12} md={6}>
                              <MDBox mb={2}>
                                   <MDTypography variant='body2' color={textColor}>Board of Studied :  <b>{educationdata?.hsc?.hscBoard} </b></MDTypography>
                              </MDBox>
                         </Grid>
                    </Grid>
                    <Grid container spacing={3}>
                         <Grid item xs={12} md={6}>
                              <MDBox mb={2}>
                                   <MDTypography variant='body2' color={textColor}>Year of Passing : <b>{educationdata?.hsc?.hscYearOfPassing} </b> </MDTypography>
                              </MDBox>
                         </Grid>
                         <Grid item xs={12} md={6}>
                              <MDBox mb={2}>
                                   <MDTypography variant='body2' color={textColor}>Percentage :  <b>{educationdata?.hsc?.hscPercentage}% </b></MDTypography>
                              </MDBox>
                         </Grid>
                    </Grid>
               </MDBox>
               <Divider />
               <MDTypography variant='h6' color={textColor} ml={2}>
                    UG (Under Graduate)
               </MDTypography>
               <MDBox display='flex' flexDirection='column' alignItems='center' p={2}>
                    <Grid container spacing={3}>
                         <Grid item xs={12} md={6} lg={6}>
                              <MDBox mb={2}>
                                   <MDTypography variant='body2' color={textColor}>University Name :<b>{educationdata?.ug?.ugUniversityName}</b> </MDTypography>
                              </MDBox>
                         </Grid>
                         <Grid item xs={12} md={6}>
                              <MDBox mb={2}>
                                   <MDTypography variant='body2' color={textColor}>Institution Name :<b>{educationdata?.ug?.ugInstituteName}</b></MDTypography>
                              </MDBox>
                         </Grid>
                    </Grid>
                    <Grid container spacing={3}>
                         <Grid item xs={12} md={6} lg={6}>
                              <MDBox mb={2}>
                                   <MDTypography variant='body2' color={textColor}>Course : <b>{educationdata?.ug?.ugDepartmentCourse}</b></MDTypography>
                              </MDBox>
                         </Grid>
                    </Grid>
                    <Grid container spacing={3}>
                         <Grid item xs={12} md={6}>
                              <MDBox mb={2}>
                                   <MDTypography variant='body2' color={textColor}>Year of Passing : <b> {educationdata?.ug?.ugYearOfPassing}</b></MDTypography>
                              </MDBox>
                         </Grid>
                         <Grid item xs={12} md={6}>
                              <MDBox mb={2}>
                                   <MDTypography variant='body2' color={textColor}>Percentage / CGPA : <b> {educationdata?.ug?.ugCgpa}</b>%  </MDTypography>
                              </MDBox>
                         </Grid>
                    </Grid>
               </MDBox>
               <Divider />
               <MDTypography variant='h6' color={textColor} ml={2}>
                    PG (Post Graduate)
               </MDTypography>

               <MDBox display='flex' flexDirection='column' alignItems='center' p={2}>
                    <Grid container spacing={3}>
                         <Grid item xs={12} md={6}>
                              <MDBox mb={2}>
                                   <MDTypography variant='body2' color={textColor}>University Name :  <b> {educationdata?.pg?.pgUniversityName}</b> </MDTypography>
                              </MDBox>
                         </Grid>
                         <Grid item xs={12} md={6}>
                              <MDBox mb={2}>
                                   <MDTypography variant='body2' color={textColor}>Institution Name :  <b> {educationdata?.pg?.pgInstituteName}</b> </MDTypography>
                              </MDBox>
                         </Grid>
                    </Grid>
                    <Grid container spacing={3}>
                         <Grid item xs={12} md={6} lg={6}>
                              <MDBox mb={2}>
                                   <MDTypography variant='body2' color={textColor}>Course : <b> {educationdata?.pg?.pgDepartmentCourse}</b> </MDTypography>
                              </MDBox>
                         </Grid>
                    </Grid>

                    <Grid container spacing={3}>
                         <Grid item xs={12} md={6}>
                              <MDBox mb={2}>
                                   <MDTypography variant='body2' color={textColor}>Year of Passing :<b> {educationdata?.pg?.pgYearOfPassing}</b></MDTypography>
                              </MDBox>
                         </Grid>
                         <Grid item xs={12} md={6}>
                              <MDBox mb={2}>
                                   <MDTypography variant='body2' color={textColor}>Percentage / CGPA : <b> {educationdata?.pg?.pgCgpa}</b> </MDTypography>
                              </MDBox>
                         </Grid>
                    </Grid>
                    <Divider />
               </MDBox>
          </>
     );
}
