import { useState,useEffect } from 'react';
import {
     MDBModalBody,
     MDBModalContent,
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
import MDTypography from '../../components/MDTypography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import Education from '../createEmployee/components/Education';

import PersonView1 from '../createEmployee/components/profilepersonview';
import Experience from '../createEmployee/components/profileExperience';
import ProfileKYC from '../createEmployee/components/profileKYC';
import { useMaterialUIController } from 'context';
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import { educationView } from 'utility/apiService';
// import ProfileEducation from '../createEmployee/components/ProfileEducation';
// import { experienceView } from 'utility/apiService';
import { getProfile } from 'utility/apiService';
// import { documentView } from 'utility/apiService';
import { experienceViewprofile } from 'utility/apiService';
import { documentViewprofile } from 'utility/apiService';
import ProfileEducation from 'layouts/createEmployee/components/profileEducation';
import { currentCompanyView } from 'utility/apiService';


export default function MyProfle({userId}) {
  

     const [justifyActive, setJustifyActive] = useState('tab1');

     const handleJustifyClick = (value) => {
          if (value === justifyActive) {
               return;
          }

          setJustifyActive(value);
     };

     const [controller] = useMaterialUIController();
      const { miniSidenav, transparentSidenav, whiteSidenav, darkMode, sidenavColor } = controller;

      let textColor = "inherit";
      
      if (transparentSidenav || (whiteSidenav && !darkMode)) {
          textColor = "dark";
        } else if ( darkMode) {
          textColor = "inherit";
        }


const [edu,setEdu]=useState({})
const [experience,setExperience]=useState({})
const [current,setCurrent]=useState({})
const [kyc,setKyc]=useState({})
const [gets,setGets]=useState("")
// const [userD, setUserD] = useState(user);

const handleApi=async()=>{
const response= await educationView(userId)
setEdu(response.data)
}


const exp=async()=>{
     const response= await experienceViewprofile(userId)
     console.log(response);
     console.log("idch",userId)
     // console.log(response.data)
 setExperience(response.data)
}

const company=async()=>{
     const response= await currentCompanyView(userId)
     console.log(response.joiningDate);
     // console.log("idch",userId)
     console.log(response)
     setCurrent(response)
}


let token=JSON.parse(localStorage.getItem("hrms-auth-token"))
useEffect(()=>{
     getProfile(token).then((data)=>{
          console.log(data)
          setGets(data?.data)
     })
},[])


const Accountkyc=async()=>{
     const response= await documentViewprofile(userId)
     setKyc(response.data)
}

console.log("profile",gets)
useEffect(()=>{
     handleApi()
     exp()
     Accountkyc()
     company()
},[])
      

    
     return (
        < DashboardLayout>
        <DashboardNavbar/>
                         <MDBModalContent>
                              <MDBModalBody>
                              <MDBModalHeader>
                                   <MDBModalTitle style={{ fontSize: '1.25rem', fontWeight: '500'}}>MY Profile</MDBModalTitle>
                                 
                              </MDBModalHeader>
                                
                                   <MDBox py={2} pl={2} pr={2} sx={{ backgroundColor: '#F5F5F5' }}>
                                        <Grid container spacing={3}>
                                             <Grid item xs={12} sm={6} maxWidth='230'>
                                                  <PersonView1
                                                  //  user={user}
                                                  //  role={user?.role?.roleType}
                                                  //  designation={'Software Engineer'}
                                                       firstname={gets.firstName}                                                  
                                                       lastName={gets.lastName}
                                                       designation={current?.designation}
                                                       email={gets?.email}
                                                       mobileNo={gets?.mobileNo}
                                                       isActive={true}
                                                       isBlocked={false}
                                                  />
                                             </Grid>
                                             <Grid item xs={12} sm={4.2}>
                                                  <MDBox mt={5}>
                                                       <MDBTabs
                                                            pills
                                                            className='mb-3 '
                                                            style={{
                                                                 backgroundColor: '#dddd',
                                                                 borderRadius: '5px',
                                                                 width: '40%',
                                                                 fontSize: '13px',
                                                            }}>
                                                            <MDBTabsItem>
                                                                 <MDBTabsLink
                                                                      onClick={() => handleJustifyClick('tab1')}
                                                                      active={justifyActive === 'tab1'}>
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
                                                                 <MDBox mt={2}>
                                                                      <MDBox display='flex' flexDirection='row'>
                                                                           <MDTypography variant='body2' fontSize='16px' color={textColor}>
                                                                                Joining Date : 
                                                                           </MDTypography>
                                                                           &nbsp;
                                                                           <MDTypography
                                                                                color="black"
                                                                                variant='body1'
                                                                                fontWeight='medium'
                                                                                fontSize='16px'>
                                                                               {current?.joiningDate}
                                                                           </MDTypography>
                                                                      </MDBox>
                                                                      <MDBox display='flex' flexDirection='row'>
                                                                           <MDTypography variant='body2' fontSize='16px' color={textColor}>
                                                                                Gender :
                                                                           </MDTypography>
                                                                           &nbsp;
                                                                           <MDTypography
                                                                                color="black"
                                                                                variant='body1'
                                                                                fontWeight='medium'
                                                                                fontSize='16px'>
                                                                               {gets?.gender}
                                                                           </MDTypography>
                                                                      </MDBox>
                                                                    
                                                                 </MDBox>
                                                            </MDBTabsPane>
                                                            <MDBTabsPane show={justifyActive === 'tab2'}>
                                                                 <MDBox mt={2}>
                                                                          <MDBox display='flex' flexDirection='row'>
                                                                               <MDTypography variant='body2' fontSize='16px' color={textColor}>
                                                                                    Date of Birth :<b>{gets?.dob}</b>
                                                                           </MDTypography>
                                                                           &nbsp;
                                                                           <MDTypography
                                                                                variant='body1'
                                                                                fontWeight='medium'
                                                                                fontSize='16px'>
                                                                                {/* DOB */}
                                                                           </MDTypography>
                                                                      </MDBox>
                                                                      <MDBox display='flex' flexDirection='row'>
                                                                           <MDTypography variant='body2' fontSize='16px' color={textColor}>
                                                                                Marital Status :<b>{gets?.marriageStatus}</b>
                                                                           </MDTypography>
                                                                           &nbsp;
                                                                           <MDTypography
                                                                                variant='body1'
                                                                                fontWeight='medium'
                                                                                fontSize='16px'>
                                                                                {/* Marital Status */}
                                                                           </MDTypography>
                                                                      </MDBox>
                                                                      <MDBox display='flex' flexDirection='row'>
                                                                           <MDTypography variant='body2' fontSize='16px' color={textColor}>
                                                                                Blood Group :<b>{gets?.bloodGroup}</b>
                                                                           </MDTypography>
                                                                           &nbsp;
                                                                           <MDTypography
                                                                                variant='body1'
                                                                                fontWeight='medium'
                                                                                fontSize='16px'>
                                                                                {/* Blood Group */}
                                                                           </MDTypography>
                                                                      </MDBox>
                                                                    
                                                                 </MDBox>
                                                            </MDBTabsPane>
                                                       </MDBTabsContent>
                                                  </MDBox>
                                             </Grid>
                                        </Grid>
                                   </MDBox>
                                   <Divider />
                                   <MDBox mt={2}>
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
                                                  <ProfileEducation 
                                                  educationdata={edu}
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
                                                  <Experience profilexp={experience} />
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
                                                  <ProfileKYC 
                                                  profileKYC={kyc}/>
                                             </AccordionDetails>
                                        </Accordion>
                                   </MDBox>
                              </MDBModalBody>  
                         </MDBModalContent>
          </DashboardLayout>
     );
}
