import React, { useState } from 'react';
// import { educationView } from 'utility/apiService';
// import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
// import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// import { getProfile } from 'utility/apiService';
 import { useEffect } from 'react';
// import MDBox from 'components/MDBox';
// import MDTypography from 'components/MDTypography';
// import Grid from '@mui/material/Grid';
//import ProfileViewCard from 'examples/Cards/InfoCards/ProfileViewCard';
// import UserProfile from './MyProfle';
import jwt_decode from "jwt-decode";
import MyProfle from './MyProfle';
// import { getProfile } from 'utility/apiService';
// import { getAllUsers } from 'utility/apiService';
// import MDBox from 'components/MDBox';

 
function Account(){
// const[ids,setIds]=useState("")

  

const token= JSON.parse(localStorage.getItem("hrms-auth-token"))
//   useEffect(()=>{
//   getProfile(token).then((data)=>{
//     //  console.log(data.data)
//        setIds(data?.data._id);
//   })

// },[])

// console.log("profile",ids);



// let a=ids?._id
 let decode=jwt_decode(token);
 let id=decode.id;

    return(
        <>
      <MyProfle
      userId={id}
      />
        </>
    )
}
export default Account;