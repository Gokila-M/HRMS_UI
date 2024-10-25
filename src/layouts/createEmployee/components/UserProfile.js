import React, { useEffect, useState } from 'react';
import {
     MDBBtn,
     MDBFooter,
     MDBModal,
     MDBModalBody,
     MDBModalContent,
     MDBModalDialog,
     MDBModalHeader,
     MDBModalTitle,
     MDBTabs,
     MDBTabsContent,
     MDBTabsItem,
     MDBTabsLink,
     MDBTabsPane,
} from 'mdb-react-ui-kit';
import { Grid, Icon } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import MDBox from 'components/MDBox';
import { Divider } from 'antd';
import MDTypography from 'components/MDTypography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Education from './Education';
import PersonView from './PersonView';
import Experience from './Experience';
import KYC from './KYC';
import Addresses from './Addresses';
import { useMaterialUIController } from 'context';
import { currentCompanyView, AddressView, educationView,experienceView,documentView} from 'utility/apiService';
import "layouts/createEmployee/components/userProfile.css"

export default function UserProfile({ user }) {
     const [model, setModel] = useState(false);
     const toggleShow = () => setModel(!model);
     const [controller] = useMaterialUIController();
     const { miniSidenav, transparentSidenav, whiteSidenav, darkMode, sidenavColor } = controller;

     let textColor = 'inherit';

     if (transparentSidenav || (whiteSidenav && !darkMode)) {
          textColor = 'dark';
     } else if (darkMode) {
          textColor = 'inherit';
     }

     const [userD, setUserD] = useState(user);
     const [company, setCompany] = useState({});
     const [address, setAddress] = useState({});
     const [education, setEducation] = useState({});
     const [experience, setExperience] = useState([]);
     const [document, setDocument] = useState({});
     const userDetails = async () => {
          // console.log(user._id);
          try {
               const resCurrent = await currentCompanyView(user._id);
               setCompany(resCurrent);

               const resAddress = await AddressView(user._id);
               setAddress(resAddress.data);

               const resEducation = await educationView(user._id);
               // console.log(resEducation.data);
               setEducation(resEducation.data);

               const resExperience = await experienceView(user._id);
               // console.log(resExperience.data);
               setExperience(resExperience.data);

               const resDocument = await documentView(user._id);
               // console.log(resDocument);
               setDocument(resDocument.data);

          } catch (error) {
               console.log(error);
          }
     };
     // currentCompany();
     useEffect(() => {
          userDetails();
     }, []);
     //    console.log(userD);
     return (
          <div maxWidth='550'ml={10}>
               <MDBox width='28px' height='26px' borderRadius='50%'  bgColor={sidenavColor} >
                    <Icon
                         color='none'
                         fontSize='small'
                         onClick={toggleShow}
                         sx={{ marginLeft: '4px', color: '#fff', marginTop: '3px' }}>
                         visibility
                    </Icon>
               </MDBox>
               <MDBModal tabIndex='-1' show={model} setShow={setModel}>
                    <MDBModalDialog size='xl' scrollable centered >
                         <MDBModalContent style={{marginTop:"1%",maxHeight:"87vh"}  } className='modalForuserProfile' >
                              <MDBModalHeader>
                                   <MDBModalTitle style={{ fontSize: '1.25rem', fontWeight: '500' }}>MY Profile</MDBModalTitle>
                                   <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                              </MDBModalHeader>

                              <MDBModalBody>
                                   {/* <MDTypography variant='body 2'>Parvan's Profile</MDTypography> */}
                                   <MDBox>
                                        <MDBox >
                                             <PersonView
                                                  user={user}
                                                  designation={company?.designation}
                                             />
                                        </MDBox>
                                   </MDBox>
                                   <Divider />
                                   <MDBox mt={2}>
                                        <Accordion sx={{ marginTop: '10px' }}>
                                             <AccordionSummary
                                                  expandIcon={<ExpandMoreIcon />}
                                                  aria-controls='panel1a-content'
                                                  id='panel1a-header'>
                                                  <MDTypography variant='h5' fontWeight='medium' color={textColor}>
                                                       Address Details
                                                  </MDTypography>
                                             </AccordionSummary>
                                             <AccordionDetails>
                                                  {/* Address card */}
                                                  <Addresses
                                                  addressData={address}
                                                  />
                                             </AccordionDetails>
                                        </Accordion>
                                        <Accordion sx={{ marginTop: '10px' }}>
                                             <AccordionSummary
                                                  expandIcon={<ExpandMoreIcon />}
                                                  aria-controls='panel1a-content'
                                                  id='panel1a-header'>
                                                  <MDTypography variant='h5' fontWeight='medium' color={textColor}>
                                                       Education Details
                                                  </MDTypography>
                                             </AccordionSummary>
                                             <AccordionDetails>
                                                  {/* Education card */}
                                                  <Education
                                                  educationdata={education}
                                                   />
                                             </AccordionDetails>
                                        </Accordion>
                                        <Accordion sx={{ marginTop: '10px' }}>
                                             <AccordionSummary
                                                  expandIcon={<ExpandMoreIcon />}
                                                  aria-controls='panel1a-content'
                                                  id='panel1a-header'>
                                                  <MDTypography variant='h5' fontWeight='medium' color={textColor}>
                                                       Experience Details
                                                  </MDTypography>
                                             </AccordionSummary>
                                             <AccordionDetails>
                                                  {/* Experience card */}
                                                  <Experience
                                                  expData={experience}
                                                   />
                                             </AccordionDetails>
                                        </Accordion>
                                        <Accordion sx={{ marginTop: '10px' }}>
                                             <AccordionSummary
                                                  expandIcon={<ExpandMoreIcon />}
                                                  aria-controls='panel1a-content'
                                                  id='panel1a-header'>
                                                  <MDTypography variant='h5' fontWeight='medium' color={textColor}>
                                                       KYC Details
                                                  </MDTypography>
                                             </AccordionSummary>
                                             <AccordionDetails>
                                                  {/* KYC card */}
                                                  <KYC
                                                  kycData={document}
                                                   />
                                             </AccordionDetails>
                                        </Accordion>
                                   </MDBox>
                              </MDBModalBody>
                         </MDBModalContent>
                    </MDBModalDialog>
               </MDBModal>
          </div>
     );
}
