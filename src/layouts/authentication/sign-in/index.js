/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useContext, useEffect, useState } from "react";

// react-router-dom components
import { Link,useNavigate } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";

// import MuiLink from "@mui/material/Link";

// @mui icons
// import FacebookIcon from "@mui/icons-material/Facebook";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import GoogleIcon from "@mui/icons-material/Google";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";
// import data from "data.json"
// Images
import bgImage from "assets/images/bg-sign-in-basic.jpeg";
import { userLogin } from "utility/apiService";
import { getProfile } from "utility/apiService";
import roleMenuAccessContext from "context/roleMenuAccess";
import { getRoleMenuAccessById } from "utility/apiService";




function Basic() {

  const [rememberMe, setRememberMe] = useState(false);
  const [email,setEmail] =useState("")
  const [password,setPassword] =useState("")
  const [token,setToken] =useState("")
  const [role,setRole] =useState("")
  const [owner,setOwner] =useState(false)
  const [error, setError] = useState({
    emailError: ''
  })
  const roleMenu=useContext(roleMenuAccessContext)
  const  navigate = useNavigate();
console.log({email,password});
console.log(roleMenu);




  const formSubmitter =(e)=> {
		e.preventDefault();
		// if(!emailValidator(email)) return alert('Please enter valid email id');
    // if(!email) return alert('Please enter valid email id');
    if(!password && !email) return alert("Email&Password requird")
		if(!password)return alert('Please enter Password ');
    if (!email) {
      return alert("Please enter email")
      } else if (!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{3}$/.test(email)) {
      setError((pre) => ({ ...pre, emailError: 'Email is invalid' }));
      } else {
      setError((pre) => ({ ...pre, emailError: '' }));
      }
    
    userLogin(email,password)
   .then(res=>{
    if(!res.ok) return alert(res.message)
      setToken(res?.token) 
      console.log(res?.token)
      localStorage.setItem("hrms-auth-token",JSON.stringify(res.token))
      getProfile(res?.token)
      .then(res=>{
        if(res.data.isOwner==true){
          console.log(res.data.isOwner);
          setOwner(true)
          roleMenu.user.isOwner=true         
          navigate('/dashboard')
        } if (res.data.isOwner!=true && res.data.role){
          setRole(res.data.role)
          console.log(res.data.role)
          getRoleMenuAccessById(res.data.role).then((res)=>{
            roleMenu.user.roleMenuAccess=res.data
            navigate('/dashboard')
          }).catch((e)=>{
            console.log("error "+e);
          })
        }
      }).catch(e=>{
        console.log("error",e);
      })
    }).catch(e=>{
      console.log("error",e);
    })
  
	}; 
  
  const handleSetRememberMe = () => setRememberMe(!rememberMe);
  return (
    <BasicLayout image={bgImage}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="info"
          mx={2}
          mt={-3}
          p={2}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Sign in
          </MDTypography>

        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox  >  
            <MDBox mb={2}>
              <MDInput type="email" label="Email" fullWidth  onChange={(e)=>setEmail(e.target.value)}/>
              {error.emailError && (
            <MDTypography variant='body2' style={{ color: 'red' }}>
            {error.emailError}
            </MDTypography>
            )}
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="password" label="Password" fullWidth onChange={(e)=>setPassword(e.target.value)}/>
            </MDBox>
            <MDBox display="flex" alignItems="center" ml={-1}>
             <Switch checked={rememberMe} onChange={handleSetRememberMe} />
              <MDTypography
                variant="button"
                fontWeight="regular"
                color="text"
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;Remember me
              </MDTypography>
            </MDBox>
            <MDBox mt={4} mb={1}  > 
              <MDButton variant="gradient" 
              color="info" 
              fullWidth 
              onClick={formSubmitter}>
                sign in
              </MDButton>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </BasicLayout>
  );
}

export default Basic;
