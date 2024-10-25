import { Grid } from '@mui/material';
import { Divider } from 'antd';
import MDBox from 'components/MDBox';
import MDTypography from 'components/MDTypography';
import { useMaterialUIController } from 'context';
import React from 'react';

export default function Education({ educationdata }) {
     const [controller] = useMaterialUIController();
     const { miniSidenav, transparentSidenav, whiteSidenav, darkMode, sidenavColor } = controller;

     let textColor = "inherit";
     
     if (transparentSidenav || (whiteSidenav && !darkMode)) {
         textColor = "dark";
       } else if ( darkMode) {
         textColor = "inherit";
       }
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
                                        School Name :&nbsp;&nbsp;<b>{educationdata?.sslc?.sslcSchoolName}</b>
                                   </MDTypography>
                              </MDBox>
                         </Grid>
                         <Grid item xs={12} md={6}>
                              <MDBox mb={2}>
                                   <MDTypography variant='body2' color={textColor}>
                                        Board of Studied :&nbsp;&nbsp;<b>{educationdata?.sslc?.sslcBoard}</b>
                                   </MDTypography>
                              </MDBox>
                         </Grid>
                    </Grid>
                    <Grid container spacing={3}>
                         <Grid item xs={12} md={6}>
                              <MDBox mb={2}>
                                   <MDTypography variant='body2' color={textColor}>
                                        Year of Passing :&nbsp;&nbsp;<b>{educationdata?.sslc?.sslcYearOfPassing}</b>
                                   </MDTypography>
                              </MDBox>
                         </Grid>
                         <Grid item xs={12} md={6}>
                              <MDBox mb={2}>
                                   <MDTypography variant='body2' color={textColor}>
                                        Percentage :&nbsp;&nbsp;<b>{educationdata?.sslc?.sslcPercentage}</b>
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
                                   <MDTypography variant='body2' color={textColor}>
                                        School Name :&nbsp;&nbsp;<b>{educationdata?.hsc?.hscSchoolName}</b>
                                   </MDTypography>
                              </MDBox>
                         </Grid>
                         <Grid item xs={12} md={6}>
                              <MDBox mb={2}>
                                   <MDTypography variant='body2' color={textColor}>
                                        Board of Studied :&nbsp;&nbsp;<b>{educationdata?.hsc?.hscBoard}</b>
                                   </MDTypography>
                              </MDBox>
                         </Grid>
                    </Grid>
                    <Grid container spacing={3}>
                         <Grid item xs={12} md={6}>
                              <MDBox mb={2}>
                                   <MDTypography variant='body2' color={textColor}>
                                        Year of Passing :&nbsp;&nbsp;<b>{educationdata?.hsc?.hscYearOfPassing}</b>
                                   </MDTypography>
                              </MDBox>
                         </Grid>
                         <Grid item xs={12} md={6}>
                              <MDBox mb={2}>
                                   <MDTypography variant='body2' color={textColor}>
                                        Percentage :&nbsp;&nbsp;<b>{educationdata?.hsc?.hscPercentage}</b>
                                   </MDTypography>
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
                                   <MDTypography variant='body2' color={textColor}>
                                        University Name :&nbsp;&nbsp;<b>{educationdata?.ug?.ugUniversityName}</b>
                                   </MDTypography>
                              </MDBox>
                              <MDBox mb={2}>
                                   <MDTypography variant='body2' color={textColor}>
                                        Course :&nbsp;&nbsp;<b>{educationdata?.ug?.ugDepartmentCourse}</b>
                                   </MDTypography>
                              </MDBox>
                         </Grid>
                         <Grid item xs={12} md={6}>
                              <MDBox mb={2}>
                                   <MDTypography variant='body2' color={textColor}>
                                        Institution Name :&nbsp;&nbsp;<b>{educationdata?.ug?.ugInstituteName}</b>
                                   </MDTypography>
                              </MDBox>
                              <MDBox mb={2}>
                                   <MDTypography variant='body2' color={textColor}>
                                   Percentage / CGPA :&nbsp;&nbsp;<b>{educationdata?.ug?.ugCgpa}</b>
                              </MDTypography>
                              </MDBox>
                         </Grid>
                    </Grid>
                    {/* <Grid container spacing={3}>
                         <Grid item xs={12} md={6} lg={6}>
                              <MDBox mb={2}>
                                   <MDTypography variant='body2' color={textColor}>
                                        Course :&nbsp;&nbsp;<b>{educationdata.ug?.ugDepartmentCourse}</b>
                                   </MDTypography>
                              </MDBox>
                         </Grid>
                    </Grid> */}
                    <Grid container spacing={3}>
                         <Grid item xs={12} md={6}>
                              <MDBox mb={2}>
                                   <MDTypography variant='body2' color={textColor}>
                                        Year of Passing :&nbsp;&nbsp;<b>{educationdata?.ug?.ugYearOfPassing}</b>
                                   </MDTypography>
                              </MDBox>
                         </Grid>
                         {/* <Grid item xs={12} md={6}>
                              <MDBox mb={2}>
                                   <MDTypography variant='body2' color={textColor}>
                                   Percentage / CGPA :&nbsp;&nbsp;<b>{educationdata.ug?.ugCgpa}</b>
                              </MDTypography>
                              </MDBox>
                         </Grid> */}
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
                                   <MDTypography variant='body2' color={textColor}>
                                        University Name :&nbsp;&nbsp;<b>{educationdata?.pg?.pgUniversityName}</b>
                                   </MDTypography>
                              </MDBox>
                              <MDBox mb={2}>
                                   <MDTypography variant='body2' color={textColor}>
                                        Course :&nbsp;&nbsp;<b>{educationdata?.pg?.pgDepartmentCourse}</b>
                                   </MDTypography>
                              </MDBox>
                         </Grid>
                         <Grid item xs={12} md={6}>
                              <MDBox mb={2}>
                                   <MDTypography variant='body2' color={textColor}>
                                        Institution Name :&nbsp;&nbsp;<b>{educationdata?.pg?.pgInstitutionName}</b>
                                   </MDTypography>
                              </MDBox>
                              <MDBox mb={2}>
                                   <MDTypography variant='body2' color={textColor}>
                                        Percentage / CGPA :&nbsp;&nbsp;<b>{educationdata?.pg?.pgCgpa}</b>
                                   </MDTypography>
                              </MDBox>
                         </Grid>
                    </Grid>
                    {/* <Grid container spacing={3}>
                         <Grid item xs={12} md={6} lg={6}>
                              <MDBox mb={2}>
                                   <MDTypography variant='body2' color={textColor}>
                                        Course :&nbsp;&nbsp;<b>{educationdata.pg?.pgDepartmentCourse}</b>
                                   </MDTypography>
                              </MDBox>
                         </Grid>
                    </Grid> */}

                    <Grid container spacing={3}>
                         <Grid item xs={12} md={6}>
                              <MDBox mb={2}>
                                   <MDTypography variant='body2' color={textColor}>
                                        Year of Passing :&nbsp;&nbsp;<b>{educationdata?.pg?.pgYearOfPassing}</b>
                                   </MDTypography>
                              </MDBox>
                         </Grid>
                         {/* <Grid item xs={12} md={6}>
                              <MDBox mb={2}>
                                   <MDTypography variant='body2' color={textColor}>
                                        Percentage / CGPA :&nbsp;&nbsp;<b>{educationdata.pg?.pgCgpa}</b>
                                   </MDTypography>
                              </MDBox>
                         </Grid> */}
                    </Grid>
                    <Divider />
               </MDBox>
          </>
     );
}
