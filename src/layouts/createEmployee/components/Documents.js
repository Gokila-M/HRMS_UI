//import CustomButton from 'components/CustomButton';
import MDButton from 'components/MDButton';
import MDInput from 'components/MDInput';
import MDTypography from 'components/MDTypography';
import MDBox from 'components/MDBox';
import { Grid, Card } from '@mui/material';
import { Divider } from 'antd'
import React, {useState} from 'react';
import CustomButton from 'components/CustomButton';
export default function Documents(props) {
    const [document , setDocument] = useState({
      
        accountNo: "",
        ifsc: "",
        branch:"",   
        bankName:"", 
        name:  "",
        adhaarNo:"",
        panNo:"",
        passportNo:"",
        uanNo:"",
        pfNo:"",
        esiNo:"",
        vaccination1Date:"",
        vaccination2Date:""
      
    })
    const handleChange = (e) => {
        const {id , value} = e.target   
        setCompany(prevState => ({
            ...prevState,
            [id] : value
        }))
    }
    return(
        <div>
            
        <MDBox >
          {/* <MDTypography>User Name:</MDTypography>
          <MDInput /> */}
    <MDBox mb={3} paddingLeft= '2%'>
          <MDTypography variant='h5' color='black'>
             BankDetails:
           </MDTypography>
     </MDBox>
     <hr style={{ width: '100%' }} />
                 <MDBox display='flex' flexDirection='column' alignItems='center' p={2} sx={{width:"100%"}}>
                      <Grid container spacing={3}>
                           <Grid item xs={6} md={3}>
                                <MDBox mb={2}>
                                     <MDTypography variant='h6'>Account Number</MDTypography>
                                     <MDInput ></MDInput>
                                </MDBox>
                           </Grid>
                           <Grid item xs={6} md={3}>
                                <MDBox mb={2}>
                                     <MDTypography variant='h6'>IFSC</MDTypography>
                                     <MDInput ></MDInput>
                                </MDBox>
                           </Grid>
                           <Grid item xs={6} md={3}>
                                <MDBox mb={2}>
                                     <MDTypography variant='h6'>Branch</MDTypography>
                                     <MDInput ></MDInput>
                                </MDBox>
                           </Grid>
                           <Grid item xs={6} md={3}>
                                <MDBox mb={2}>
                                     <MDTypography variant='h6'>Bank Name</MDTypography>
                                     <MDInput ></MDInput>
                                </MDBox>
                           </Grid>
                           <Grid item xs={6} md={3}>
                                <MDBox mb={2}>
                                     <MDTypography variant='h6'>Name</MDTypography>
                                     <MDInput ></MDInput>
                                </MDBox>
                           </Grid>
                         </Grid>
                 </MDBox>
 <MDBox mb={3} paddingLeft= '2%'>
      <MDTypography variant='h5' color='black'>
          Indentification Details:
       </MDTypography>
</MDBox>
           <Divider/>
                 <MDBox display='flex' flexDirection='column' alignItems='center' p={2} sx={{width:"100%"}}>
                      <Grid container spacing={3}>
                           <Grid item xs={6} md={3}>
                                <MDBox mb={2}>
                                     <MDTypography variant='h6'>Aadhaar Number</MDTypography>
                                     <MDInput ></MDInput>
                                </MDBox>
                           </Grid>
                           <Grid item xs={6} md={3}>
                                <MDBox mb={2}>
                                     <MDTypography variant='h6'>PAN Number</MDTypography>
                                     <MDInput ></MDInput>
                                </MDBox>
                           </Grid>
                           <Grid item xs={6} md={3}>
                                <MDBox mb={2}>
                                     <MDTypography variant='h6'>Passport Number</MDTypography>
                                     <MDInput ></MDInput>
                                </MDBox>
                           </Grid>
                           <Grid item xs={6} md={3}>
                                <MDBox mb={2}>
                                     <MDTypography variant='h6'>UAN Number</MDTypography>
                                     <MDInput ></MDInput>
                                </MDBox>
                           </Grid>
                           <Grid item xs={6} md={3}>
                                <MDBox mb={2}>
                                     <MDTypography variant='h6'>PF Number</MDTypography>
                                     <MDInput ></MDInput>
                                </MDBox>
                           </Grid>
                           <Grid item xs={6} md={3}>
                                <MDBox mb={2}>
                                     <MDTypography variant='h6'>ESI Number</MDTypography>
                                     <MDInput ></MDInput>
                                </MDBox>
                           </Grid>
                           
  
                      </Grid>
                      
                 </MDBox>

                    <MDBox mb={3} paddingLeft= '2%'>
          <MDTypography variant='h5' color='black'>
             MedicalDetails:
           </MDTypography>
     </MDBox>
           <Divider/>
                 <MDBox display='flex' flexDirection='column' alignItems='center' p={2} sx={{width:"100%"}}>
                      <Grid container spacing={3}>
                           <Grid item xs={6} md={3}>
                                <MDBox mb={2}>
                                     <MDTypography variant='h6'>Vaccination 1 Date</MDTypography>
                                     <input type={"date"} style={{border:"0.1px",}}/>
                                </MDBox>
                           </Grid>
                           <Grid item xs={6} md={3}>
                                <MDBox mb={2}>
                                     <MDTypography variant='h6'>Vaccination 2 Date</MDTypography>
                                     <input type={"date"} style={{border:"0.1px",}}/>
                                </MDBox>
                           </Grid>
                             </Grid>
                      
                 </MDBox>
                 <Grid container spacing={3} mt={2}>
                                   <Grid item xs={6} md={3}>
                                        <MDBox mb={2} sx={{ fontSize: '17px' }}>
                                            <CustomButton variant='contained' backgroundColor='red' sx={{ width: '100%' }} name='Reset'/>
                                        </MDBox>
                                   </Grid>
                                   <Grid item xs={6} md={3}>
                                        <MDBox mb={2} sx={{ fontSize: '17px' }}>
                                            <CustomButton variant='contained' color='primary' sx={{ width: '100%' }} name='Next'/>
                                        </MDBox>
                                   </Grid>
                              </Grid>
        </MDBox>
       
      </div>
    )}


    const styles={
        label :{
            color: "#3d3d3d",
            display: "block",            
            fontSize: 14,
            fontWeight: 500,
            marginBottom: 5
          },  
              

    }