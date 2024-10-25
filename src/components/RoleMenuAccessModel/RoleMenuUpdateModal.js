import React, { useState } from 'react';
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
} from 'mdb-react-ui-kit';
import MDBox from 'components/MDBox';
import CustomSwitchButton from 'components/CustomSwitchButton';
import MDButton from 'components/MDButton';
import { useMaterialUIController } from 'context';
import Switch from "react-switch";
import { updateRoleMenuById } from 'utility/apiService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const RoleMenuUpdateModal=({toggleModal,setToggleModal,RoleMenu})=> {
  const [getAccess, setGetAccess] = useState(RoleMenu.get);
  const [createAccess, setCreateAccess] = useState(RoleMenu.create);
  const [updateAccess, setUpdateAccess] = useState(RoleMenu.update);
  const [deleteAccess, setDeleteAccess] = useState(RoleMenu.delete);
  const [controller] = useMaterialUIController();
  const { sidenavColor } = controller;

  const handleSubmit=()=>{
    let obj={get:getAccess,create:createAccess,update:updateAccess,delete:deleteAccess}
    updateRoleMenuById(RoleMenu._id,obj).then((res)=>{
      toast.success(res.message);
    }).catch((e)=>{
      console.log("error "+e);
    })
    setToggleModal(!toggleModal)
  }

  return (
    <>
      <MDBModal show={toggleModal} setShow={setToggleModal} tabIndex='-1'>
        <MDBModalDialog centered style={{padding:"17px"}}>
          <MDBModalContent className='upRoleMenu'>
            <MDBModalHeader>
              <MDBModalTitle>{RoleMenu.role.roleType} - {RoleMenu.menu.menuName
              }</MDBModalTitle>
              <MDBBtn
                className='btn-close'
                color='none'
                onClick={() => setToggleModal(!toggleModal)}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <MDBox sx={{display:"flex",flexDirection:"row",flexWrap:"wrap",alignItems:"center",justifyContent:"center"}}>
                <MDBox sx={{display:"flex",flexDirection:"row",flexWrap:"wrap",alignItems:"center",justifyContent:"space-around"}}>
                  <CustomSwitchButton name={"Get"} checked={getAccess} setchecked={setGetAccess}/>
                  <CustomSwitchButton name={"Create"} checked={createAccess} setchecked={setCreateAccess} />
                </MDBox>
                <MDBox sx={{display:"flex",flexDirection:"row",flexWrap:"wrap",alignItems:"center",justifyContent:"space-around"}}>
                  <CustomSwitchButton name={"Update"} checked={updateAccess} setchecked={setUpdateAccess} />
                  <CustomSwitchButton name={"Delete"} checked={deleteAccess} setchecked={setDeleteAccess} />
                </MDBox>
              </MDBox>
              <MDBox mt={"30px"} sx={{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"end"}}>
                <MDButton type="reset" variant="contained" aria-label="fingerprint" sx={{display:"flex",margin:"15px",alignSelf:"left"}} color="error" onClick={() => setToggleModal(!toggleModal)} >
                  Cancel
                </MDButton>
                <MDButton variant="contained" aria-label="fingerprint" sx={{display:"flex",margin:"15px",alignSelf:"left"}} color={sidenavColor} onClick={handleSubmit} >
                  Submit
                </MDButton>
              </MDBox>
            </MDBModalBody>
            
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}

export default RoleMenuUpdateModal