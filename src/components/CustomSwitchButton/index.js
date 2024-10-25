import React, { useState } from 'react'
import Switch1 from '@mui/material/Switch';

import Switch from "react-switch";
import MDBox from 'components/MDBox';
import MDTypography from 'components/MDTypography';


const CustomSwitchButton = ({ name,checked,setchecked }) => {
    // const [checked,setchecked]=useState(false) 
    // console.log(checked);
    return (
        // check ? 
        <MDBox  sx={{display:"flex",flexDirection:"column",flexWrap:"wrap",alignItems:"center",justifyContent:"center",margin:"10px"}}>
            <MDTypography color="inherit" variant="h6" mt={1} sx={{padding:3}}>
                {name}
            </MDTypography>
            <Switch onChange={()=>setchecked(!checked)} checked={checked} />
        </MDBox>
        
        // <Switch  />
    )
}
export default CustomSwitchButton