import { Icon } from '@mui/material';
import MDBox from 'components/MDBox';
import MDTypography from 'components/MDTypography';
import { useMaterialUIController } from 'context';
import { MDBTabs, MDBTabsContent, MDBTabsItem, MDBTabsLink, MDBTabsPane } from 'mdb-react-ui-kit';
import React, { useEffect, useState } from 'react';
import { getUserRole } from 'utility/apiService';
import { currentCompanyView } from 'utility/apiService';

export default function PersonView({user, designation, }) {
     const [controller] = useMaterialUIController();
     const { miniSidenav, transparentSidenav, whiteSidenav, darkMode, sidenavColor } = controller;

     const [justifyActive, setJustifyActive] = useState('tab1');

     // console.log(user)
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
     const [company, setCompany] = useState({});
     const [role, setRole] = useState({});

     const userDetaills = async () => {
          //console.log(user);
          try {
               const resCurrent = await currentCompanyView(user._id);
               // console.log(resCurrent);
               setCompany(resCurrent);

               const resRole = await getUserRole(user.role);
               setRole(resRole.data);



          } catch (error) {
               console.log(error);
          }
     };
     // currentCompany();
     useEffect(() => {
          userDetaills();
     }, []);

     return (
          <div style={{ width: '100%', backgroundColor: '#fff', padding: '10px', borderRadius: '10px' }}>
               <MDTypography variant='h5' fontWeight='medium' color={textColor}>
                    {user?.firstName}'s Profile
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
                              {user?.firstName} {user?.lastName}
                              {user?.isActive ? (
                                   <Icon color='none' fontSize='medium' sx={{ marginLeft: '2px', color: 'green' }}>
                                        check_circle
                                   </Icon>
                              ) : user?.isBlocked ? (
                                   <Icon color='none' fontSize='medium' sx={{ marginLeft: '3px', color: 'red' }}>
                                        cancel
                                   </Icon>
                              ) : (
                                   <Icon color='none' fontSize='medium' sx={{ marginLeft: '3px', color: 'red' }}>
                                        cancel
                                   </Icon>
                              )}
                         </MDTypography>
                         <MDBox display='flex' flexDirection='column' width='16rem'>
                              <MDBox display='flex' flexDirection='row'>
                                   <MDTypography variant='body2' fontSize='14px' style={{fontWeight:'500'}} color={textColor}>
                                        Role
                                   </MDTypography>
                                   &nbsp;
                                   <MDTypography variant='body1' fontWeight='medium' ml={'48px'} fontSize='12px' color={textColor}>
                                        : {role?.roleType ? role?.roleType : '--'}
                                   </MDTypography>
                              </MDBox>
                              <MDBox display='flex' flexDirection='row'>
                                   <MDTypography variant='body2' fontSize='14px' style={{fontWeight:'500'}} color={textColor}>
                                        Designation
                                   </MDTypography>
                                   &nbsp;
                                   <MDTypography variant='body1' fontWeight='medium' fontSize='14px' color={textColor}>
                                        : {designation?designation:'--'}
                                   </MDTypography>
                              </MDBox>
                              <MDBox display='flex' flexDirection='row'>
                                   <MDTypography variant='body2' fontSize='14px' style={{fontWeight:'500'}} color={textColor}>
                                        E-Mail
                                   </MDTypography>
                                   &nbsp;
                                   <MDTypography variant='body1' fontWeight='medium' ml={'36px'} fontSize='14px' color={textColor}>
                                        : {user?.email}
                                   </MDTypography>
                              </MDBox>
                              <MDBox display='flex' flexDirection='row'>
                                   <MDTypography variant='body2' fontSize='14px' style={{fontWeight:'500'}} color={textColor}>
                                        Mobile No
                                   </MDTypography>
                                   &nbsp;
                                   <MDTypography variant='body1' fontWeight='medium' ml={'11px'} fontSize='14px' color={textColor}>
                                        : {user?.mobileNo}
                                   </MDTypography>
                              </MDBox>  
                         </MDBox>
                    </MDBox>
                    <MDBox mt={2} sx={{width:"300px"}} >
                         <MDBTabs
                              pills
                              className='mb-3 '
                              style={{
                                   backgroundColor: '#dddd',
                                   borderRadius: '5px',
                                   width: '210px',
                                   fontSize: '13px',
                                   marginLeft:"32px"
                              }}>
                              <MDBTabsItem>
                                   <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
                                        Basic Info
                                   </MDBTabsLink>
                              </MDBTabsItem>
                              <MDBTabsItem>
                                   <MDBTabsLink
                                        style={{ width: '110%' }}
                                        onClick={() => handleJustifyClick('tab2')}
                                        active={justifyActive === 'tab2'}>
                                        Personal Info
                                   </MDBTabsLink>
                              </MDBTabsItem>
                         </MDBTabs>

                         <MDBTabsContent>
                              <MDBTabsPane show={justifyActive === 'tab1'}>
                                   <MDBox >
                                        <MDBox display='flex' flexDirection='row'>
                                             <MDTypography variant='body2' fontSize='14px'  style={{fontWeight:'500'}} color={textColor}>
                                                  Joining Date :
                                             </MDTypography>
                                             &nbsp;
                                             <MDTypography variant='body1' fontWeight='medium' fontSize='14px' color={textColor}  style={{fontWeight:'500',color:"black"}}>
                                                  {/* Joining Date */}
                                                  {company?.joiningDate}
                                             </MDTypography>
                                        </MDBox>
                                        <MDBox display='flex' flexDirection='row'>
                                             <MDTypography variant='body2' fontSize='14px'  style={{fontWeight:'500'}} color={textColor}>
                                                  Gender 
                                             </MDTypography>
                                             &nbsp;
                                             <MDTypography variant='body1' fontWeight='medium' ml={"34px"} fontSize='14px'   style={{fontWeight:'500',color:"black"}}>
                                                  : {user?.gender}
                                             </MDTypography>
                                        </MDBox>
                                        {/* <MDBox display='flex' flexDirection='row'>
                                             <MDTypography variant='body2' fontSize='14px'  style={{fontWeight:'500'}} color={textColor}>
                                                  Employee ID :
                                             </MDTypography>
                                             &nbsp;
                                             <MDTypography variant='body1' fontWeight='medium' fontSize='14px'  style={{fontWeight:0'}}>
                                                  {/* {user?.firstName.substring(0, 2) + '_' + user?._id.substring(0,5)} 
                                             </MDTypography>
                                        </MDBox> */}
                                   </MDBox>
                              </MDBTabsPane>
                              <MDBTabsPane show={justifyActive === 'tab2'}>
                                   <MDBox mt={2}>
                                        <MDBox display='flex' flexDirection='row'>
                                             <MDTypography variant='body2' fontSize='14px'  style={{fontWeight:'500'}} color={textColor}>
                                                  Date of Birth 
                                             </MDTypography>
                                             &nbsp;
                                             <MDTypography variant='body1' fontWeight='medium' ml={"9px"} fontSize='14px'  style={{fontWeight:'500',color:"black"}}>
                                                  :  {user?.dob}
                                             </MDTypography>
                                        </MDBox>
                                        <MDBox display='flex' flexDirection='row'>
                                             <MDTypography variant='body2' fontSize='14px'  style={{fontWeight:'500'}} color={textColor}>
                                                  Marital Status 
                                             </MDTypography>
                                             &nbsp;
                                             <MDTypography variant='body1' fontWeight='medium'  fontSize='14px'  style={{fontWeight:'500',color:"black"}}>
                                                  :  {user?.marriageStatus}
                                             </MDTypography>
                                        </MDBox>
                                        <MDBox display='flex' flexDirection='row'>
                                             <MDTypography variant='body2' fontSize='14px'  style={{fontWeight:'500'}} color={textColor}>
                                                  Blood Group 
                                             </MDTypography>
                                             &nbsp;
                                             <MDTypography variant='body1' fontWeight='medium' ml={"11px"} fontSize='14px'  style={{fontWeight:'500',color:"black"}}>
                                                  :  {user?.bloodGroup}
                                             </MDTypography>
                                        </MDBox>
                                   </MDBox>
                              </MDBTabsPane>
                         </MDBTabsContent>
                    </MDBox>
               </MDBox>
          </div>
     );
}
