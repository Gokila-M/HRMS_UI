import { Grid } from '@mui/material';
import { Divider } from 'antd';
import MDBox from 'components/MDBox';
import MDTypography from 'components/MDTypography';
import { useMaterialUIController } from 'context';
import React from 'react';

export default function Experience({expData}) {
const [controller] = useMaterialUIController();
const { miniSidenav, transparentSidenav, whiteSidenav, darkMode, sidenavColor } = controller;

     let textColor = "inherit";
     
     if (transparentSidenav || (whiteSidenav && !darkMode)) {
         textColor = "dark";
       } else if ( darkMode) {
         textColor = "inherit";
       }
     //   console.log(expData);
     return (
          <>
          { expData?.map((item,index) => (
               <>
               <MDBox key={index} display='flex' flexDirection='column' alignItems='center' p={2}>
                    <Grid container spacing={3}>
                         <Grid item xs={12} md={6}>
                              <MDBox mb={2}>
                                   <MDTypography variant='body2' color={textColor}>
                                        Company Name :&nbsp;&nbsp;<b>{item.companyName}</b>
                                   </MDTypography>
                              </MDBox>
                         </Grid>
                         <Grid item xs={12} md={6}>
                              <MDBox mb={2}>
                                   <MDTypography variant='body2' color={textColor}>
                                        Designation :&nbsp;&nbsp;<b>{item.designation}</b>
                                   </MDTypography>
                              </MDBox>
                         </Grid>
                    </Grid>
                    <Grid container spacing={3}>
                         <Grid item xs={12} md={6}>
                              <MDBox mb={2}>
                                   <MDTypography variant='body2' color={textColor}>
                                        Job Description :&nbsp;&nbsp;<b>{item.description}</b>
                                   </MDTypography>
                              </MDBox>
                         </Grid>
                         <Grid item xs={12} md={6}>
                              <MDBox mb={2}>
                                   <MDTypography variant='body2' color={textColor}>
                                        Salary :&nbsp;&nbsp;<b>{item.salary}</b>
                                   </MDTypography>
                              </MDBox>
                         </Grid>
                    </Grid>
                    <Grid container spacing={3}>
                         <Grid item xs={12} md={6}>
                              <MDBox mb={2}>
                                   <MDTypography variant='body2' color={textColor}>
                                        Service Start Date :&nbsp;&nbsp;<b>{item.startDate}</b>
                                   </MDTypography>
                              </MDBox>
                         </Grid>
                         <Grid item xs={12} md={6}>
                              <MDBox mb={2}>
                                   <MDTypography variant='body2' color={textColor}>
                                        Service End Date :&nbsp;&nbsp;<b>{item.endDate}</b>
                                   </MDTypography>
                              </MDBox>
                         </Grid>
                    </Grid>
                    <Grid container spacing={3}>
                         <Grid item xs={12} md={6}>
                              <MDBox mb={2}>
                                   <MDTypography variant='body2' color={textColor}>
                                        Experience :&nbsp;&nbsp;<b>{item.experience}</b>
                                   </MDTypography>
                              </MDBox>
                         </Grid>
                    </Grid>
               </MDBox>
               <Divider />
               </>
               ))}
          </>
     );

// console.log(expData);
return (
<>
{ expData?.map((item,index) => (
<>
<MDBox key={index} display='flex' flexDirection='column' alignItems='center' p={2}>
<Grid container spacing={3}>
<Grid item xs={12} md={6}>
<MDBox mb={2}>
<MDTypography variant='body2' color={textColor}>
Company Name :&nbsp;&nbsp;<b>{item.companyName}</b>
</MDTypography>
</MDBox>
</Grid>
<Grid item xs={12} md={6}>
<MDBox mb={2}>
<MDTypography variant='body2' color={textColor}>
Designation :&nbsp;&nbsp;<b>{item.designation}</b>
</MDTypography>
</MDBox>
</Grid>
</Grid>
<Grid container spacing={3}>
<Grid item xs={12} md={6}>
<MDBox mb={2}>
<MDTypography variant='body2' color={textColor}>
Job Description :&nbsp;&nbsp;<b>{item.description}</b>
</MDTypography>
</MDBox>
</Grid>
<Grid item xs={12} md={6}>
<MDBox mb={2}>
<MDTypography variant='body2' color={textColor}>
Salary :&nbsp;&nbsp;<b>{item.salary}</b>
</MDTypography>
</MDBox>
</Grid>
</Grid>
<Grid container spacing={3}>
<Grid item xs={12} md={6}>
<MDBox mb={2}>
<MDTypography variant='body2' color={textColor}>
Service Start Date :&nbsp;&nbsp;<b>{item.startDate}</b>
</MDTypography>
</MDBox>
</Grid>
<Grid item xs={12} md={6}>
<MDBox mb={2}>
<MDTypography variant='body2' color={textColor}>
Service End Date :&nbsp;&nbsp;<b>{item.endDate}</b>
</MDTypography>
</MDBox>
</Grid>
</Grid>
<Grid container spacing={3}>
<Grid item xs={12} md={6}>
<MDBox mb={2}>
<MDTypography variant='body2' color={textColor}>
Experience :&nbsp;&nbsp;<b>{item.experience}</b>
</MDTypography>
</MDBox>
</Grid>
</Grid>
</MDBox>
<Divider />
</>
))}
</>
);
}