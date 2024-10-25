import React, { useEffect, useState } from 'react'
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import "./styles.css"
import MDButton from 'components/MDButton';
import { useMaterialUIController } from 'context';
import EnhancedTable from 'components/CustomTable';
import MDTypography from 'components/MDTypography';
import { Link, useNavigate } from "react-router-dom";
import MDBox from 'components/MDBox';
import { Button, Icon } from '@mui/material';
import DashboardNavbar from 'examples/Navbars/DashboardNavbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Toggle from 'react-bootstrap-toggle';
import {
  MDBBtn,
  MDBFooter,
  MDBModal,
  MDBModalBody,
  MDBModalContent,
  MDBModalDialog,
  MDBModalHeader,
  MDBModalTitle,
} from 'mdb-react-ui-kit';
import CustomInput from 'components/CustomInuput';
import Arrow from "@mui/icons-material/ArrowBackIos";
import { getMenuTable, createMenu } from 'utility/apiService';
import Footer from 'examples/Footer';
import MenuStatusModel from 'components/MenuStatusModel';
import MDInput from 'components/MDInput';
import DeleteIcon from '@mui/icons-material/Delete';
import DeleteMenuStatus from 'components/MenuStatusModel/DeleteMenuStatus';
import { indexof } from 'stylis';
import RestoreIcon from '@mui/icons-material/Restore';
import RecoverMenuModel from 'components/MenuStatusModel/recoverMenu';
import DeleteRole from './DeleteRole';
import { getRoleTable } from 'utility/apiService';
import RoleStatusModel from 'components/RoleStatusModel';
import DeleteRoleStatus from 'components/RoleStatusModel/DeleteRoleStatus';
import { createRole } from 'utility/apiService';
const Role = () => {

  let textColor = "white";
  const navigation=useNavigate()
  const [dataFromApi, setDataFromApi] = useState([]);
  const [open,setOpen]=useState(false)
  const [deleteopen,setDeleteOpen]=useState(false)
  const toggle = () => setOpen(!open);
  const toggle1 = () =>{
    setDeleteOpen(!deleteopen)
  };
  const [controller] = useMaterialUIController();
  const { miniSidenav, transparentSidenav, whiteSidenav, darkMode, sidenavColor } = controller;
  const [code,setCode]=useState();
  const [role,setRole]=useState();
  const [gridModal, setGridModal] = useState(false);
  const [deletegridModal, setDeleteGridModal] = useState(false);
  const [id,setId]=useState()
  const [menuListApi, setmenuListApi] = useState({
    "columns": [
      {
        "label": "Name",
        "field": "name",
        "width": 20,
        
      },
      {
        "label": "Role Code",
        "field": "roleCode",
        "width": 20
      },
      {
        "label": "Status",
        "field": "view",
        "width": 20
      },
      {
        "label": "Edit",
        "field": "edit",
        "width": 20
      },
      {
        "label": "Delete",
        "field": "delete",
        "width": 10
      },
    ],
  });

  let color
  if(sidenavColor=="info") color="blue"
  else if(sidenavColor=="error") color="red"
  else if(sidenavColor=="warning") color="orange"
  else if(sidenavColor=="success") color="green"
  else if(sidenavColor=="primary") color="pink"
  else if(sidenavColor=="dark") color="black"
  
    if (transparentSidenav || (whiteSidenav && !darkMode)) {
      textColor = "dark";
    } else if ( darkMode) {
      textColor = "inherit";
    }
    useEffect(()=>{
      getRoleTable()
      .then((data) =>{
        let rows=[]
        data.data?.map((item,index)=>(
          // item.isBlock == true ? data.splice(indexof(item),1) :
          rows.push({"name" : item.roleType,"roleCode" : item.code, 
            // view:<center><Icon style={{cursor:"pointer"}} >check</Icon></center> ,id:item._id,
            view:<MDTypography sx={{fontSize:"1rem", fontWeight:"500"}}>
              {item.isActive==true?(<MDTypography sx={{fontSize:"1rem", fontWeight:"500",color:"green"}}>Active</MDTypography>):(<MDTypography sx={{fontSize:"1rem", fontWeight:"500",color:"red"}}>Blocked</MDTypography>)}
              </MDTypography>,
            edit: <Icon style={{cursor:"pointer",marginLeft: "38%"}} onClick={()=>toggleShow(item)}  color="red" fontSize="small">edit</Icon>,id:item._id,
            delete: <DeleteIcon style={{cursor:"pointer",marginLeft: "38%"}} onClick={()=>toggleDelete(item)}  color="red" fontSize="small"/>,id:item._id
          })
        ))
        setmenuListApi({...menuListApi,rows})
        // console.log(rows);
      }
      ).catch((e)=>console.log("error "+e))


    },[open,gridModal,deletegridModal,deleteopen])
    const handleSubmit=()=>{
      if(!role){
        return(
          toast.error(`Role field required!`,{
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
          })
        )
      }  
      createRole({roleType:role})
      .then((data) =>{
        // console.log(data.message);
        if(!data.ok){
          return (
            toast.error(`${data?.message}`,{
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true
            })
          )
        }
        toast.success(`${data?.message}` , {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true
          });
          setOpen(false)
      }
      ).catch((e)=>{console.log("error "+e)
      toast.error("Error",{
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      })})
    }

    const toggleShow = (id) => {
      // 
      setId(id)
      setGridModal(!gridModal);

    }
    const toggleDelete = (id) => {
      // 
      setId(id)
      setDeleteGridModal(!deletegridModal)
    }
    const reset=()=>{
      setMenuname("")
    }
    // console.log("hello id",id);

  return (
    <DashboardLayout>
        <DashboardNavbar />
        <div style={{ minHeight: "calc(100vh - 190px)",width:"100%" ,backgroundColor:textColor}}>
          {deleteopen?
          (<DeleteRole deleteopen={deleteopen} setDeleteOpen={setDeleteOpen}/>):(
            !open?
              (
                <>
                    <MDBox fullwidth="true" mt={5} sx={{ display:"flex",flexDirection:"row",margin:"15px",justifyContent:"space-between"}}>
                      <MDTypography variant="h4" fontWeight="medium" color="dark" mt={1} sx={{padding:2}}>
                        Role 
                      </MDTypography>
                      <MDButton variant="contained" aria-label="fingerprint" onClick={toggle} sx={{display:"flex",margin:"15px",fontSize:"18px"}} color={sidenavColor} >
                      {/* <Icon>add</Icon> */}
                       &nbsp;Create
                      </MDButton>
                    </MDBox>
                    {/* Restore Button */}
                    <MDBox sx={{display:"flex",justifyContent:"right", paddingRight:"3%"}}>
                      <RestoreIcon onClick={toggle1} />
                      </MDBox>
                    <MDBox  sx={{display:"flex",justifyContent:"center"}} >
                      <MDBox sx={{width:"95%"}}>
                        <EnhancedTable data={menuListApi} />
                      </MDBox>
                    </MDBox>
          
                </>
              ):(
                <>
                     <MDBox fullwidth="true">  
                      <MDBox fullwidth="true" mt={5} sx={{display:"flex",flexDirection:"row",margin:"15px",alignItems:"baseline"}}>
                        <MDBox mt={"18px"}  sx={{alignItems:"flex-start",borderRadius:"100%",boxShadow: "0 2px 8px 0 rgb(99 99 99 / 20%)",cursor:"pointer",display:"flex", background:"white",
                        height:"40px",justifyContent:"center",marginRight: "10px",width:"40px"}} onClick={()=>setOpen(false)} >
                            <Arrow style={{marginLeft:"7px",marginTop:"7px"}}  color={sidenavColor} fontSize="medium">ArrowBackIosIcon</Arrow>
                         </MDBox>
                        <MDTypography variant="h4" fontWeight="medium" color="dark" mt={0} sx={{padding:0,display:"flex",alignItems:"center"  } }>
                        Role Creating
                        </MDTypography>
          
                         </MDBox>
          
                        <MDBox sx={{paddingLeft:"55px",padding:"55px"}}> 
                          <MDTypography>Role Name</MDTypography>
                          <CustomInput width='300px' setValue={setRole}  />
                        </MDBox>
                      
                      
                      <MDBox mt={"30px"} sx={{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"end",padding:"0"}}>
                            <MDButton type="reset" variant="contained" aria-label="fingerprint" sx={{displat:"flex",margin:"15px",alignSelf:"left"}} color="error" onClick={reset} >
                              Reset
                            </MDButton>
                            <MDButton variant="contained" aria-label="fingerprint" sx={{displat:"flex",margin:"15px",alignSelf:"left"}} color={sidenavColor} onClick={handleSubmit} >
                              Submit
                            </MDButton>
                      </MDBox>
                      
                      
              </MDBox>
              </>
              )
            
          )}
    {}
  {gridModal  && <RoleStatusModel gridModal={gridModal} setGridModal={setGridModal} data={id} value={dataFromApi}  />}
  {deletegridModal  && <DeleteRoleStatus gridModal={deletegridModal} setGridModal={setDeleteGridModal} data={id} value={dataFromApi}  />}
  {/* {recovergridModal  && <RecoverMenuModel gridModal={recovergridModal} setGridModal={setRecoverGridModal} data={id} value={dataFromApi}  />} */}
  </div>
  <ToastContainer />
  <Footer/>
    </DashboardLayout>
  )
}

export default Role
