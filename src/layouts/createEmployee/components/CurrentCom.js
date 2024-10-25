//import CustomButton from 'components/CustomButton';
import MDButton from 'components/MDButton';
import MDInput from 'components/MDInput';
import MDTypography from 'components/MDTypography';
import MDBox from 'components/MDBox';
import { Grid, Card } from '@mui/material';
import { Divider } from 'antd'
import React, {useState} from 'react';
export default function CurrentCom(props) {
    const [company , setCompany] = useState({
      
        department: "",
        designation: "",
        role:"",   
        salary:"", 
        joiningDate: "",
        reportedTo:"",
        isFresher:"",
        timestamps:"",
      
    })
    const handleChange = (e) => {
        const {id , value} = e.target   
        setCompany(prevState => ({
            ...prevState,
            [id] : value
        }))
    }
    return(
        <>
        <Card>    
           <MDBox p={4}> 
             <MDTypography variant='h4' fontWeight='medium'>
             Work Info:
             </MDTypography>
            </MDBox>
           <Divider/>
           <MDTypography variant='h6' color='dark' ml={2}>
            Current Company Details:
           </MDTypography>
<MDBox display='flex' flexDirection='column' alignItems='center' p={2}>
  <Grid container spacing={3}>
  <Grid item xs={12} md={6}>
<MDBox mb={2}>
  <MDTypography variant='body2'>Department</MDTypography>
   <MDInput                      
   id="department:"                        
     placeholder="Enter department:" 
   value={company.department}
     onChange={handleChange}
                />
           </MDBox>
         </Grid>
          <Grid item xs={12} md={6}>
          <MDBox mb={2}>
        <MDTypography variant='body2'> Designation: </MDTypography>
           <MDInput            
   id="designation:" 
   placeholder="Enter designation"
    value={company.designation}
   onChange={handleChange} 
                    />
         </MDBox>
         </Grid>
                               
        </Grid>
         <Grid container spacing={3}>
         <Grid item xs={12} md={6}>
         <MDBox mb={2}>
            <MDTypography variant='body2'>Role : </MDTypography>
                <MDInput            
                   id="role" 
                placeholder="Enter role"
                 value={company.role}
                    onChange={handleChange} />
        </MDBox>
        </Grid>
        <Grid item xs={12} md={6}>
    <MDBox mb={2}>
       <MDTypography variant='body2'>Salary : </MDTypography>
        <MDInput            
         id="salary" 
        placeholder="Enter salary"
       value={company.salary}
     onChange={handleChange}/>
      </MDBox>
    </Grid>
   <Grid item xs={12} md={6}>
    <MDBox mb={2}>
    <MDTypography variant='body2'>JoiningDate: </MDTypography>
    <input type={"date"} style={{border:"0.1px",}}/>
   </MDBox>  
    </Grid>
    <Grid item xs={12} md={6}>
    <MDBox mb={2}>
    <MDTypography variant='body2'>Reported To: </MDTypography>
    <MDInput            
            id="reportedTo" 
            placeholder="EnterreportedTo"
            value={company.reportedTo}
            onChange={handleChange}/>
   </MDBox>  
    </Grid>
    <Grid item xs={12} md={6}>
    <MDBox mb={2}>
    <MDTypography variant='body2'>IsFresher: </MDTypography>
    <MDInput            
            id="isFresher" 
            placeholder="Enter isFresher"
            value={company.isFresher}
            onChange={handleChange}  />
   </MDBox>  
    </Grid>  
    
</Grid>
<MDBox display='flex' >
               <MDButton  onClick={()=>{alert('clicked')}} color="dark">Reset</MDButton>
               <MDButton  onClick={()=>{alert('clicked')}} color="secondary">Submit</MDButton>
               </MDBox>
</MDBox>
 {/* <Divider /> */}
 
   </Card>
    </>
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