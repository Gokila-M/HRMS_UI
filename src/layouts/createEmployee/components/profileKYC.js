import { Grid } from '@mui/material';
import { Divider } from 'antd';
import MDBox from 'components/MDBox';
import MDTypography from 'components/MDTypography';
import { useMaterialUIController } from 'context';
import React from 'react';

export default function profileKYC({profileKYC}) {
     const [controller] = useMaterialUIController();
     const { miniSidenav, transparentSidenav, whiteSidenav, darkMode, sidenavColor } = controller;

     let textColor = "inherit";
     
     if (transparentSidenav || (whiteSidenav && !darkMode)) {
         textColor = "dark";
       } else if ( darkMode) {
         textColor = "inherit";
       }

    //    console.log(profileKYC?.bankDetails?.accountNo);
     return (
          <>
               <MDBox display='flex' flexDirection='column' alignItems='center' p={2}>
                    <Grid container spacing={3}>
                         <Grid item xs={12} md={6}>
                              <MDBox mb={2}>
                                   <MDTypography variant='body2' color={textColor}>
                                        Account Number : <b>{profileKYC?.bankDetails?.accountNo}</b>
                                   </MDTypography>
                              </MDBox>
                         </Grid>
                         <Grid item xs={12} md={6}>
                              <MDBox mb={2}>
                                   <MDTypography variant='body2' color={textColor}>
                                        IFSC CODE :<b>{profileKYC?.bankDetails?.ifsc}</b>
                                   </MDTypography>
                              </MDBox>
                         </Grid>
                    </Grid>
                    <Grid container spacing={3}>
                         <Grid item xs={12} md={6}>
                              <MDBox mb={2}>
                                   <MDTypography variant='body2' color={textColor}>
                                        Branch Name :&nbsp;&nbsp;<b>{profileKYC?.bankDetails?.branch}</b>
                                   </MDTypography>
                              </MDBox>
                         </Grid>
                         <Grid item xs={12} md={6}>
                              <MDBox mb={2}>
                                   <MDTypography variant='body2' color={textColor}>
                                        Name :&nbsp;&nbsp;<b>{profileKYC?.bankDetails?.bankName}</b>
                                   </MDTypography>
                              </MDBox>
                         </Grid>
                    </Grid>
               </MDBox>
               <MDTypography variant='h6' color={textColor} ml={2}>
                    Identification Details
               </MDTypography>

               <MDBox display='flex' flexDirection='column' alignItems='center' p={2}>
                    <Grid container spacing={3}>
                         <Grid item xs={12} md={6}>
                              <MDBox mb={2}>
                                   <MDTypography variant='body2' color={textColor}>
                                        Aadhaar Number :&nbsp;&nbsp;<b>{profileKYC?.identificationDetails?.aadhaarNo}</b>
                                   </MDTypography>
                              </MDBox>
                         </Grid>
                         <Grid item xs={12} md={6}>
                              <MDBox mb={2}>
                                   <MDTypography variant='body2' color={textColor}>
                                        PAN Number :&nbsp;&nbsp;<b>{profileKYC?.identificationDetails?.panNo}</b>
                                   </MDTypography>
                              </MDBox>
                         </Grid>
                    </Grid>
                    <Grid container spacing={3}>
                         <Grid item xs={12} md={6}>
                              <MDBox mb={2}>
                                   <MDTypography variant='body2' color={textColor}>
                                        Passport Number :&nbsp;&nbsp;<b>{profileKYC?.identificationDetails?.passportNo}</b>
                                   </MDTypography>
                              </MDBox>
                         </Grid>
                         <Grid item xs={12} md={6}>
                              <MDBox mb={2}>
                                   <MDTypography variant='body2' color={textColor}>
                                        UAN Number :&nbsp;&nbsp;<b>{profileKYC?.identificationDetails?.pfNo}</b>
                                   </MDTypography>
                              </MDBox>
                         </Grid>
                    </Grid>
                    <Grid container spacing={3}>
                         <Grid item xs={12} md={6}>
                              <MDBox mb={2}>
                                   <MDTypography variant='body2' color={textColor}>
                                        Provident Fund :&nbsp;&nbsp;<b>{profileKYC?.identificationDetails?.esiNo}</b>
                                   </MDTypography>
                              </MDBox>
                         </Grid>
                    </Grid>
               </MDBox>
               <Divider />
          </>
     );
}
