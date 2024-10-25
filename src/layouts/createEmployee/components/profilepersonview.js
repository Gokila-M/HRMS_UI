import { Icon } from '@mui/material';
import MDBox from 'components/MDBox';
import MDTypography from 'components/MDTypography';
import { useMaterialUIController } from 'context';
import { MDBTabs, MDBTabsContent, MDBTabsItem, MDBTabsLink, MDBTabsPane } from 'mdb-react-ui-kit';
import React, { useState } from 'react';
import { currentCompanyView } from 'utility/apiService';

export default function PersonView({user, designation, firstname ,lastName, email,mobileNo }) {
     const [controller] = useMaterialUIController();
     const { miniSidenav, transparentSidenav, whiteSidenav, darkMode, sidenavColor } = controller;

     const [justifyActive, setJustifyActive] = useState('tab1');

     const handleJustifyClick = (value) => {
          if (value === justifyActive) {
               return;
          }

          setJustifyActive(value);
     };

     let textColor = 'inherit';

     if (transparentSidenav || (whiteSidenav && !darkMode)) {
          textColor = 'dark';
     } else if (darkMode) {
          textColor = 'inherit';
     }




 // console.log(user);
//  const [company, setCompany] = useState({});
//  const [role, setRole] = useState({});

//  const userDetaills = async () => {
//       try {
//            const resCurrent = await currentCompanyView(user._id);
//            setCompany(resCurrent);

//            const resRole = await getUserRole(user?.role);
//            console.log(resRole);
//            setRole(resRole.data);



//       } catch (error) {
//            console.log(error);
//       }
//  };
 // currentCompany();


     return (
          <div style={{ width: '100%', backgroundColor: '#fff', padding: '10px', borderRadius: '10px' }}>
               <MDTypography variant='h5' fontWeight='medium' color={textColor}>
                    {firstname}'s Profile
               </MDTypography>
               <MDBox display='flex' alignItems='start' flexDirection='row' sx={{ flexWrap: 'wrap', justifyContent: 'center' }}>
                    <MDBox
                         component='img'
                         src='https://www.w3schools.com/howto/img_avatar.png'
                         alt='avatar'
                         width='150px'
                         height='150px'
                         borderRadius='50%'
                         ml={1.3}
                         mt={2}
                         mb={2}
                    />
                    <MDBox ml={2} mt={2} mb={2} display='flex' flexDirection='column'>
                         <MDTypography variant='h5' mb={"20px"} fontWeight='medium' style={{display:"flex"}} color={textColor}>
                              {firstname} {lastName}
                         </MDTypography>
                         <MDBox display='flex' flexDirection='column' width='16rem'>
                              <MDBox display='flex' flexDirection='row'>
                                   <MDTypography variant='body2' fontSize='14px' style={{fontWeight:'500'}} color={textColor}>
                                        Designation
                                   </MDTypography>
                                   &nbsp;
                                   <MDTypography variant='body1' fontWeight='medium' fontSize='14px' color={textColor}>
                                        : {designation}
                                   </MDTypography>
                              </MDBox>
                              <MDBox display='flex' flexDirection='row'>
                                   <MDTypography variant='body2' fontSize='14px' style={{fontWeight:'500'}} color={textColor}>
                                        E-Mail
                                   </MDTypography>
                                   &nbsp;
                                   <MDTypography variant='body1' fontWeight='medium' ml={'36px'} fontSize='14px' color={textColor}>
                                        : {email}
                                   </MDTypography>
                              </MDBox>
                              <MDBox display='flex' flexDirection='row'>
                                   <MDTypography variant='body2' fontSize='14px' style={{fontWeight:'500'}} color={textColor}>
                                        Mobile No
                                   </MDTypography>
                                   &nbsp;
                                   <MDTypography variant='body1' fontWeight='medium' ml={'11px'} fontSize='14px' color={textColor}>
                                        : {mobileNo}
                                   </MDTypography>
                              </MDBox>
                             
                         </MDBox>
                    </MDBox>
                    
               </MDBox>
          </div>
     );
}
