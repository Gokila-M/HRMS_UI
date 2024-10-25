import { Grid, TextField } from '@mui/material'
import MDBox from 'components/MDBox'
import MDInput from 'components/MDInput'
import MDTypography from 'components/MDTypography'
import React, { useState } from 'react'
import { KeyboardDatePicker } from "@material-ui/pickers";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";

import { useMaterialUIController } from 'context'
import CustomSelect from 'components/CustomSelect'
import { message } from 'antd'
import MDButton from 'components/MDButton'



const  UserDetailsForm = () => {
    const [selectedstatus, setSelectedstatus] = useState();
    const [selectedgender, setSelectedgender] = useState();
    const [gender, setGender] = useState([
        { value: "male", label: "male" },
        { value: "female", label: "female" },
        { value: "others", label: "others" },
      ]);
      const [status, setStatus] = useState([
        { value: "married", label: "married" },
        { value: "singel", label: "singel" },

      ]);
      const [controller] = useMaterialUIController();
      const { miniSidenav, transparentSidenav, whiteSidenav, darkMode, sidenavColor } = controller;

      let textColor = "white";
      
      if (transparentSidenav || (whiteSidenav && !darkMode)) {
          textColor = "dark";
        } else if ( darkMode) {
          textColor = "inherit";
        }
      
  return (
     <div style={{paddingLeft:"1%",backgroundColor:textColor}}>
      <MDBox>
        {/* <MDTypography>User Name:</MDTypography>
        <MDInput /> */}
        
               <MDBox display='flex' flexDirection='column' alignItems='center' mt={2} sx={{width:"100%"}}>
                    <Grid container spacing={3}>
                         <Grid item xs={6} md={3}>
                              <MDBox mb={2}>
                                   <MDTypography variant='body2'sx={{fontSize:"20px" ,fontWeight:"bold"}} color="dark">FirstName</MDTypography>
                                   <MDInput sx={{width:"100%",color:"black"}} color="dark"></MDInput>
                              </MDBox>
                         </Grid>
                         <Grid item xs={6} md={3}>
                              <MDBox mb={2}>
                                   <MDTypography variant='body2'sx={{fontSize:"20px" ,fontWeight:"bold"}} color="dark">LastName</MDTypography>
                                   <MDInput sx={{width:"100%"}} ></MDInput>
                              </MDBox>
                         </Grid>
                         <Grid item xs={6} md={3}>
                              <MDBox mb={2}>
                                   <MDTypography variant='body2'sx={{fontSize:"20px" ,fontWeight:"bold"}} color="dark">DOB</MDTypography>
                                  <input type={"date"} style={{border:"0.1px",}}/>
                              </MDBox>
                         </Grid>
                         <Grid item xs={6} md={3}>
                              <MDBox mb={2}>
                                   <MDTypography variant='body2'sx={{fontSize:"20px" ,fontWeight:"bold"}} color="dark">Email</MDTypography>
                                   <MDInput sx={{width:"100%"}} ></MDInput>
                              </MDBox>
                         </Grid>
                         <Grid item xs={6} md={3}>
                              <MDBox mb={2}>
                                   <MDTypography variant='body2'sx={{fontSize:"20px" ,fontWeight:"bold"}} color="dark">Gender</MDTypography>
                                   <CustomSelect 
                    option={gender}  placeholder="Select" selectedOptions={selectedgender}
                    setSelectedOptions={setSelectedgender} isSearchable={true} isMulti={false} width="200px" 
                  />
                              </MDBox>
                         </Grid>
                         <Grid item xs={6} md={3}>
                              <MDBox mb={2}>
                                   <MDTypography variant='body2'sx={{fontSize:"20px" ,fontWeight:"bold"}} color="dark">BloodGroup</MDTypography>
                                   <MDInput sx={{width:"100%"}} ></MDInput>
                              </MDBox>
                         </Grid>
                         <Grid item xs={6} md={3}>
                              <MDBox mb={2}>
                                   <MDTypography variant='body2'sx={{fontSize:"20px" ,fontWeight:"bold"}} color="dark">Marital Status</MDTypography>
                                   <CustomSelect 
                    option={status}  placeholder="Select" selectedOptions={selectedstatus}
                    setSelectedOptions={setSelectedstatus} isSearchable={true} isMulti={false} width="200px" 
                  />
                              </MDBox>
                         </Grid>
                         <Grid item xs={6} md={3}>
                              <MDBox mb={2}>
                                   <MDTypography variant='body2'sx={{fontSize:"20px" ,fontWeight:"bold"}} color="dark">Phone number</MDTypography>
                                   <MDInput sx={{width:"100%"}} ></MDInput>
                              </MDBox>
                         </Grid>
                         <Grid item xs={6} md={3}>
                              <MDBox mb={2}>
                                   <MDTypography variant='body2'sx={{fontSize:"20px" ,fontWeight:"bold"}} color="dark">Password </MDTypography>
                                   <MDInput sx={{width:"100%"}} ></MDInput>
                              </MDBox>
                         </Grid>
                         <Grid item xs={6} md={3}>
                              <MDBox mb={2}>
                                   <MDTypography variant='body2'sx={{fontSize:"20px" ,fontWeight:"bold"}} color="dark">Confirm Password </MDTypography>
                                   <MDInput sx={{width:"100%"}} ></MDInput>
                              </MDBox>
                         </Grid>

                    </Grid>
                    
               </MDBox>
               <MDTypography variant='h6' color='dark' ml={2} sx={{fontSize:"25px" }}>
                   Address
               </MDTypography>
               <MDBox display='flex' flexDirection='column' alignItems='center' p={2} sx={{width:"100%"}}>
                    <Grid container spacing={3}>
                         <Grid item xs={6} md={3}>
                              <MDBox mb={2}>
                                   <MDTypography variant='body2'sx={{fontSize:"20px" ,fontWeight:"bold"}} color="dark">Address 1</MDTypography>
                                   <MDInput sx={{width:"100%"}} ></MDInput>
                              </MDBox>
                         </Grid>
                         <Grid item xs={6} md={3}>
                              <MDBox mb={2}>
                                   <MDTypography variant='body2'sx={{fontSize:"20px" ,fontWeight:"bold"}} color="dark">Address 2</MDTypography>
                                   <MDInput sx={{width:"100%"}} ></MDInput>
                              </MDBox>
                         </Grid>
                         <Grid item xs={6} md={3}>
                              <MDBox mb={2}>
                                   <MDTypography variant='body2'sx={{fontSize:"20px" ,fontWeight:"bold"}} color="dark">Country</MDTypography>
                                   <MDInput sx={{width:"100%"}} ></MDInput>
                              </MDBox>
                         </Grid>
                         <Grid item xs={6} md={3}>
                              <MDBox mb={2}>
                                   <MDTypography variant='body2'sx={{fontSize:"20px" ,fontWeight:"bold"}} color="dark">State</MDTypography>
                                   <MDInput sx={{width:"100%"}} ></MDInput>
                              </MDBox>
                         </Grid>
                         <Grid item xs={6} md={3}>
                              <MDBox mb={2}>
                                   <MDTypography variant='body2'sx={{fontSize:"20px" ,fontWeight:"bold"}} color="dark">City</MDTypography>
                                   <MDInput sx={{width:"100%"}} ></MDInput>
                              </MDBox>
                         </Grid>
                         <Grid item xs={6} md={3}>
                              <MDBox mb={2}>
                                   <MDTypography variant='body2'sx={{fontSize:"20px" ,fontWeight:"bold"}} color="dark">Postal Code</MDTypography>
                                   <MDInput sx={{width:"100%"}} ></MDInput>
                              </MDBox>
                         </Grid>
                         

                    </Grid>
                    
               </MDBox>
               <MDTypography variant='h6' color='dark' ml={2} sx={{fontSize:"25px" }}>
                   Family
               </MDTypography>
               <MDBox display='flex' flexDirection='column' alignItems='center' p={2} sx={{width:"100%"}}>
                    <Grid container spacing={3}>
                         <Grid item xs={6} md={3}>
                              <MDBox mb={2}>
                                   <MDTypography variant='body2'sx={{fontSize:"20px" ,fontWeight:"bold"}} color="dark">Name</MDTypography>
                                   <MDInput sx={{width:"100%"}} ></MDInput>
                              </MDBox>
                         </Grid>
                         <Grid item xs={6} md={3}>
                              <MDBox mb={2}>
                                   <MDTypography variant='body2'sx={{fontSize:"20px" ,fontWeight:"bold"}} color="dark">Relationship</MDTypography>
                                   <MDInput sx={{width:"100%"}} ></MDInput>
                              </MDBox>
                         </Grid>
                         <Grid item xs={6} md={3}>
                              <MDBox mb={2}>
                                   <MDTypography variant='body2'sx={{fontSize:"20px" ,fontWeight:"bold"}} color="dark">Occupation</MDTypography>
                                   <MDInput sx={{width:"100%"}} ></MDInput>
                              </MDBox>
                         </Grid>
                         <Grid item xs={6} md={3}>
                              <MDBox mb={2}>
                                   <MDTypography variant='body2'sx={{fontSize:"20px" ,fontWeight:"bold"}} color="dark">DOB</MDTypography>
                                   <input type={"date"} style={{border:"0.1px",}}/>
                              </MDBox>
                         </Grid>
                         <Grid item xs={6} md={3}>
                              <MDBox mb={2}>
                                   <MDTypography variant='body2'sx={{fontSize:"20px" ,fontWeight:"bold"}} color="dark">AdhaarNo</MDTypography>
                                   <MDInput sx={{width:"100%"}} ></MDInput>
                              </MDBox>
                         </Grid>
                         <Grid item xs={6} md={3}>
                              <MDBox mb={2}>
                                   <MDTypography variant='body2'sx={{fontSize:"20px" ,fontWeight:"bold"}} color="dark">Emergency Contact</MDTypography>
                                   <MDInput sx={{width:"100%"}} ></MDInput>
                              </MDBox>
                         </Grid>
                         

                    </Grid>
                    
               </MDBox>
               <MDBox display='flex'>
               <MDButton  onClick={()=>{alert('clicked')}} color="dark">Reset</MDButton>
               <MDButton  onClick={()=>{alert('clicked')}} color="light">Submit</MDButton>
               </MDBox>
      </MDBox>
    </div>
  )
}


const Education=()=>{

}
const Work_info=()=>{
    return(
        <MDBox >
        <MDTypography variant='h6' color='dark' ml={2} sx={{fontSize:"25px" }}>
                   CurrentCompany
               </MDTypography>
               <MDBox display='flex' flexDirection='column' alignItems='center' p={2} sx={{width:"100%"}}>
                    <Grid container spacing={3}>
                         <Grid item xs={6} md={3}>
                              <MDBox mb={2}>
                                   <MDTypography variant='body2'sx={{fontSize:"20px" ,fontWeight:"bold"}} color="dark">UserId</MDTypography>
                                   <MDInput sx={{width:"100%"}} ></MDInput>
                              </MDBox>
                         </Grid>
                         <Grid item xs={6} md={3}>
                              <MDBox mb={2}>
                                   <MDTypography variant='body2'sx={{fontSize:"20px" ,fontWeight:"bold"}} color="dark">Department</MDTypography>
                                   <MDInput sx={{width:"100%"}} ></MDInput>
                              </MDBox>
                         </Grid>
                         <Grid item xs={6} md={3}>
                              <MDBox mb={2}>
                                   <MDTypography variant='body2'sx={{fontSize:"20px" ,fontWeight:"bold"}} color="dark">Designation</MDTypography>
                                   <MDInput sx={{width:"100%"}} ></MDInput>
                              </MDBox>
                         </Grid>
                         <Grid item xs={6} md={3}>
                              <MDBox mb={2}>
                                   <MDTypography variant='body2'sx={{fontSize:"20px" ,fontWeight:"bold"}} color="dark">salary</MDTypography>
                                   <MDInput sx={{width:"100%"}} ></MDInput>
                              </MDBox>
                         </Grid>
                         <Grid item xs={6} md={3}>
                              <MDBox mb={2}>
                                   <MDTypography variant='body2'sx={{fontSize:"20px" ,fontWeight:"bold"}} color="dark">JoiningDate</MDTypography>
                                   <input type={"date"} style={{border:"0.1px",}}/>
                              </MDBox>
                         </Grid>
                         <Grid item xs={6} md={3}>
                              <MDBox mb={2}>
                                   <MDTypography variant='body2'sx={{fontSize:"20px" ,fontWeight:"bold"}} color="dark">ReportedTo</MDTypography>
                                   <MDInput sx={{width:"100%"}} ></MDInput>
                              </MDBox>
                         </Grid>
                         <Grid item xs={6} md={3}>
                              <MDBox mb={2}>
                                   <MDTypography variant='body2'sx={{fontSize:"20px" ,fontWeight:"bold"}} color="dark">Fresher</MDTypography>
                                   <MDInput sx={{width:"100%"}} ></MDInput>
                              </MDBox>
                         </Grid>
                    </Grid>
                    
               </MDBox>
               <MDTypography variant='h6' color='dark' ml={2} sx={{fontSize:"25px" }}>
                   PreviewsCompanies
               </MDTypography>
               <MDBox display='flex' flexDirection='column' alignItems='center' p={2} sx={{width:"100%"}}>
                    <Grid container spacing={3}>
                         <Grid item xs={6} md={3}>
                              <MDBox mb={2}>
                                   <MDTypography variant='body2'sx={{fontSize:"20px" ,fontWeight:"bold"}} color="dark">Company Name</MDTypography>
                                   <MDInput sx={{width:"100%"}} ></MDInput>
                              </MDBox>
                         </Grid>
                         <Grid item xs={6} md={3}>
                              <MDBox mb={2}>
                                   <MDTypography variant='body2'sx={{fontSize:"20px" ,fontWeight:"bold"}} color="dark">Designation</MDTypography>
                                   <MDInput sx={{width:"100%"}} ></MDInput>
                              </MDBox>
                         </Grid>
                         <Grid item xs={6} md={3}>
                              <MDBox mb={2}>
                                   <MDTypography variant='body2'sx={{fontSize:"20px" ,fontWeight:"bold"}} color="dark">Description</MDTypography>
                                   <MDInput sx={{width:"100%"}} ></MDInput>
                              </MDBox>
                         </Grid>
                         <Grid item xs={6} md={3}>
                              <MDBox mb={2}>
                                   <MDTypography variant='body2'sx={{fontSize:"20px" ,fontWeight:"bold"}} color="dark">salary</MDTypography>
                                   <MDInput sx={{width:"100%"}} ></MDInput>
                              </MDBox>
                         </Grid>
                         <Grid item xs={6} md={3}>
                              <MDBox mb={2}>
                                   <MDTypography variant='body2'sx={{fontSize:"20px" ,fontWeight:"bold"}} color="dark">StartDate</MDTypography>
                                   <input type={"date"} style={{border:"0.1px",}}/>
                              </MDBox>
                         </Grid>
                         <Grid item xs={6} md={3}>
                              <MDBox mb={2}>
                                   <MDTypography variant='body2'sx={{fontSize:"20px" ,fontWeight:"bold"}} color="dark">EndDate</MDTypography>
                                   <input type={"date"} style={{border:"0.1px",}}/>
                              </MDBox>
                         </Grid>
                         <Grid item xs={6} md={3}>
                              <MDBox mb={2}>
                                   <MDTypography variant='body2'sx={{fontSize:"20px" ,fontWeight:"bold"}} color="dark">Experience</MDTypography>
                                   <MDInput sx={{width:"100%"}} ></MDInput>
                              </MDBox>
                         </Grid>
                         <Grid item xs={12} md={8} >
                              <MDBox mb={2}>
                                   <MDTypography variant='body2'sx={{fontSize:"20px" ,fontWeight:"bold"}} color="dark">Description</MDTypography>
                                   <MDInput sx={{width:"500px", height:"100px"}}></MDInput>
                              </MDBox>
                         </Grid>

                    </Grid>
                    
               </MDBox>
               </MDBox>
    )
}

export default {Form,Education,Work_info}
