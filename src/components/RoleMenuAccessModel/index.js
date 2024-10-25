import React, { useEffect, useState } from 'react';
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';
import MDBox from 'components/MDBox';
import EnhancedTable from 'components/CustomTable';
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout';
import { getRoleMenuById } from 'utility/apiService';
import { Icon } from '@mui/material';
import RoleMenuUpdateModal from './RoleMenuUpdateModal';
import datass from "components/CustomTable/data.json"
import "components/RoleMenuAccessModel/RoleMenuUpdateModal.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function RoleMenuAccessModel({gridModal,setGridModal,id}) {
  const [toggleModal, setToggleModal] = useState(false);
  const [RoleMenu, setRoleMenu] = useState("");
  const [data,setData]=useState({
    "columns": [
      {
        "label": "Role Name",
        "field": "roleName",
        "width": 270,
        
      },
      {
        "label": "Menu Name",
        "field": "menuName",
        "width": 170
      },
      {
        "label": "Access",
        "field": "access",
        "width": 150
      },
      {
        "label": "Edit",
        "field": "edit",
        "width": 150
      },
    ],
  })
  const toggleShow = () => setGridModal(!gridModal);
  const toggleShowModel = (id) => {
    setRoleMenu(id);
    setToggleModal(!toggleModal)
  }

  useEffect(()=>{
    getRoleMenuById(id).then((res)=>{
      let rows=[]
      res.data.map((item)=>{
        console.log(item.get?"get":null);
        let ass=""
        item.get ? ass=`Get`: null
        console.log(ass)
        item.create ? ass=`${ass}/Create`: null
        item.update ? ass=`${ass}/Update`: null
        item.delete ? ass=`${ass}/Delete`: null
        rows.push({roleName:item.role.roleType,menuName:item.menu.menuName,access:ass,
          edit: <p style={{}}><Icon style={{cursor:"pointer",marginLeft: "38%"}} color="red" onClick={()=>toggleShowModel(item)} fontSize="small">edit</Icon></p>
        })
      })
      setData({...data,rows})
    }).catch((e)=>{
      console.log("error "+e);
    })
  },[toggleModal])
  return (
    <>
      <MDBModal  style={{display:"flex",alignItems:'center',marginTop:"85px"}} show={gridModal} setShow={setGridModal}>
        <MDBModalDialog scrollable style={{minWidth:"60%"}} >
          <MDBModalContent style={{minHeight:"80%"}} className="modelRoleMenuTable">
            <MDBModalHeader>
              <MDBModalTitle>Role Menu Access</MDBModalTitle>
              <MDBBtn
                type='button'
                className='btn-close'
                color='none'
                onClick={toggleShow}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <MDBox sx={{display:"flex",justifyContent:"center"}} >
                <MDBox sx={{width:"100%"}}>
                  <EnhancedTable data={data} />
                </MDBox>
              </MDBox>
            </MDBModalBody>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
      {toggleModal && <RoleMenuUpdateModal setToggleModal={setToggleModal} toggleShow={toggleShow}  toggleModal={toggleModal} RoleMenu={RoleMenu} />}
    </>
  );
}