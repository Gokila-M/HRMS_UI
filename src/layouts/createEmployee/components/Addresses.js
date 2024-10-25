import { Divider} from 'antd';
import { Grid } from '@mui/material';
import MDBox from 'components/MDBox';
import MDTypography from 'components/MDTypography';
import { useMaterialUIController } from 'context';
import React from 'react';

export default function Addresses({ addressData}) {
     const [controller] = useMaterialUIController();
     const { miniSidenav, transparentSidenav, whiteSidenav, darkMode, sidenavColor } = controller;

     let textColor = 'inherit';

     if (transparentSidenav || (whiteSidenav && !darkMode)) {
          textColor = 'dark';
     } else if (darkMode) {
          textColor = 'inherit';
     }

     return (
          <>
               <MDBox display='flex' flexDirection='column' alignItems='center' p={2}>
                    <Grid container spacing={3}>
                         <Grid item xs={12} md={6}>
                              <MDBox mb={2}>
                                   <MDTypography variant='body2' color={textColor}>
                                        Address 1 :&nbsp;&nbsp;<b>{addressData?.address1}</b>
                                   </MDTypography>
                              </MDBox>
                         </Grid>
                         <Grid item xs={12} md={6}>
                              <MDBox mb={2}>
                                   <MDTypography variant='body2' color={textColor}>
                                        Address 2 :&nbsp;&nbsp;<b>{addressData?.address2}</b>
                                   </MDTypography>
                              </MDBox>
                         </Grid>
                    </Grid>
                    <Grid container spacing={3}>
                         <Grid item xs={12} md={6}>
                              <MDBox mb={2}>
                                   <MDTypography variant='body2' color={textColor}>
                                        Country :&nbsp;&nbsp;<b>{addressData?.country}</b>
                                   </MDTypography>
                              </MDBox>
                              <MDBox mb={2}>
                                   <MDTypography variant='body2' color={textColor}>
                                        State :&nbsp;&nbsp;<b>{addressData?.state}</b>
                                   </MDTypography>
                              </MDBox>
                         </Grid>
                         <Grid item xs={12} md={6}>
                              <MDBox mb={2}>
                                   <MDTypography variant='body2' color={textColor}>
                                        City :&nbsp;&nbsp;<b>{addressData?.city}</b>
                                   </MDTypography>
                              </MDBox>
                              
                              <MDBox mb={2}>
                                   <MDTypography variant='body2' color={textColor}>
                                        Postal Code :&nbsp;&nbsp;<b>{addressData?.postalCode}</b>
                                   </MDTypography>
                              </MDBox>
                              
                         </Grid>
                    </Grid>
               </MDBox>
               <Divider />
          </>
     );
}
