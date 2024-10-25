import React from 'react'
import "components/CustomInuput/CustomInput.css"
import MDTypography from 'components/MDTypography'
const CustomInput = ({type,title,width,setValue,value}) => {
    const handleChange = (e)=>{
        setValue(e.target.value)
    }
    return (
        <div style={{width:width}}>
             <MDTypography variant="h6" fontWeight="medium" color="dark" mt={1} sx={{paddingLeft:"20px"}}>{title}</MDTypography>
            <input type={type} value={value} onChange={handleChange} className="inp" 
                style={{width:"90%",border:"1px solid #d2d2d2",outline:"none",borderRadius:"5px",padding:"8px",margin:"5px"}}   
            />
        </div>
    )
}

export default CustomInput