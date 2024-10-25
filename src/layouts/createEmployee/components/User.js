import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import { Divider } from 'antd'
import MDBox from 'components/MDBox'
import MDTypography from 'components/MDTypography'
import { MDBModalContent, MDBModalDialog, MDBModalTitle } from 'mdb-react-ui-kit'
import { MDBBtn, MDBModal, MDBModalBody, MDBModalHeader } from 'mdbreact'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Education from './Education'
import UserDetailsForm from './UserDetailsForm'
import CurrentCom from './CurrentCom'
const UserForm = () => {
    return (
      <div>
          <h1 style={{paddingLeft:"1%"}}>User Details</h1>
          <MDBox mt={2}>
           <Accordion sx={{ marginTop: '10px' }}>
                <AccordionSummary
                     expandIcon={<ExpandMoreIcon />}
                     aria-controls='panel1a-content'
                     id='panel1a-header'>
                     <MDTypography variant='h5' fontWeight='medium' color='dark'>
                     User Bio
                     </MDTypography>
                </AccordionSummary>
                <AccordionDetails> 
                               <UserDetailsForm.UserDetailsForm/>
                </AccordionDetails>
           </Accordion>
           <Accordion sx={{ marginTop: '10px' }}>
                <AccordionSummary
                     expandIcon={<ExpandMoreIcon />}
                     aria-controls='panel1a-content'
                     id='panel1a-header'>
                     <MDTypography variant='h5' fontWeight='medium'>
                          Education Details
                     </MDTypography>
                </AccordionSummary>
                <AccordionDetails>
                     <MDTypography variant='h6' fontWeight='medium'>
                          Experience
                     </MDTypography>
                </AccordionDetails>
           </Accordion>
           <Accordion sx={{ marginTop: '10px' }}>
                <AccordionSummary
                     expandIcon={<ExpandMoreIcon />}
                     aria-controls='panel1a-content'
                     id='panel1a-header'>
                     <MDTypography variant='h5' fontWeight='medium'>
                          Work info
                     </MDTypography>
                </AccordionSummary>
                <AccordionDetails> 
                               {/* <CurrentCom.CurrentCom/> */}
                </AccordionDetails>
           </Accordion>
      </MDBox>
      </div>
    )
  }
  
  export default UserForm