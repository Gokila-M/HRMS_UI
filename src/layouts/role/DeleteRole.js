import MDBox from 'components/MDBox';
import MDButton from 'components/MDButton';
import MDTypography from 'components/MDTypography';
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout'
import DashboardNavbar from 'examples/Navbars/DashboardNavbar'
import Arrow from "@mui/icons-material/ArrowBackIos";
import React, { useEffect, useState } from 'react'
import { useMaterialUIController } from 'context';
import EnhancedTable from 'components/CustomTable';
import { getDeletedMenu } from 'utility/apiService';
import {  Icon } from '@mui/material';
import RecoverMenuModel from 'components/MenuStatusModel/recoverMenu';
import { getDeletedRole } from 'utility/apiService';
import RecoverRoleModel from 'components/RoleStatusModel/recoverRole';
const DeleteRole = ({deleteopen,setDeleteOpen}) => {
    // console.log(deleteopen)
    const toggle=()=>{setDeleteOpen(!deleteopen)}
    const [id,setId]=useState()
    const [recovergridModal, setRecoverGridModal] = useState(false);
    const [controller] = useMaterialUIController();
    const { miniSidenav, transparentSidenav, whiteSidenav, darkMode, sidenavColor } = controller;
    let textColor = "white";
    const toggleShow = (id) => { 
        setId(id)
        setRecoverGridModal(!recovergridModal);
      }
    const [table,setTable]=useState({
        "columns": [
            {
              "label": "Name",
              "field": "name",
              "width": 20,
              
            },
            {
              "label": "Role Code",
              "field": "code",
              "width": 20
            },
            {
              "label": "Status",
              "field": "view",
              "width": 20
            },
          ],
    })

    useEffect(()=>{
        getDeletedRole()
        .then((res)=>{
            // console.log(res);
            let rows=[]
            res.data?.map((item)=>(
                rows.push({"name" : item.roleType,"code" : item.code, 
                  view: <Icon style={{cursor:"pointer"}} onClick={()=>toggleShow(item)}  color="red" fontSize="small">edit</Icon>,id:item._id,
                })
              ))
              setTable({...table,rows})
            }
            ).catch((e)=>console.log("error "+e))
    },[recovergridModal])
  return (
        <div style={{ minHeight: "calc(100vh - 190px)",width:"100%" ,backgroundColor:textColor}}>
            <MDBox fullwidth="true" mt={5} sx={{display:"flex",flexDirection:"row",margin:"15px",alignItems:"baseline"}}>
                <MDBox fullwidth="true" mt={5} sx={{ display:"flex",flexDirection:"row",margin:"15px",justifyContent:"space-between"}}>
                    <MDBox mt={"18px"}  sx={{alignItems:"flex-start",borderRadius:"100%",boxShadow: "0 2px 8px 0 rgb(99 99 99 / 20%)",cursor:"pointer",display:"flex", background:"white",
                        height:"40px",justifyContent:"center",marginRight: "10px",width:"40px"}} onClick={toggle} >
                        <Arrow style={{marginLeft:"7px",marginTop:"7px"}}  color={sidenavColor} fontSize="medium">ArrowBackIosIcon</Arrow>
                    </MDBox>
                    <MDTypography variant="h4" fontWeight="medium" color="dark" mt={1} sx={{padding:2}}>
                        Deleted Role 
                    </MDTypography>
                </MDBox>
            </MDBox>

            <MDBox  sx={{display:"flex",justifyContent:"center"}} >
                <MDBox sx={{width:"95%"}}>
                    <EnhancedTable data={table} />
                </MDBox>
            </MDBox>
              {recovergridModal  && <RecoverRoleModel gridModal={recovergridModal} setGridModal={setRecoverGridModal} data={id} value={table}  />}
        </div>   
  )
}

export default DeleteRole
