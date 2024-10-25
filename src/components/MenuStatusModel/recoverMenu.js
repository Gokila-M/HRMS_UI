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
import MDTypography from 'components/MDTypography';
import { getMenuById } from 'utility/apiService';
import { Card, Grid, Typography } from '@mui/material';
import MDInput from 'components/MDInput';
import { useMaterialUIController } from 'context';
import MDButton from 'components/MDButton';
import CustomSwitchButton from 'components/CustomSwitchButton';
import { updateMenu } from 'utility/apiService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getMenuTable } from 'utility/apiService';
import { useNavigate } from 'react-router-dom';
import SendAndArchiveIcon from '@mui/icons-material/SendAndArchive';

export default function RecoverMenuModel({gridModal,setGridModal,data,setOpen}) {
  const navigate=useNavigate()
  let id= data._id
//   const [isActive, setIsActive] = useState(data.isActive);
  const [isBlock, setIsBlock] = useState(false);
  const [controller] = useMaterialUIController();
  const { sidenavColor } = controller;
  const toggleShow = () => setGridModal(!gridModal);

  useEffect(()=>{

  },[])

  const handleSubmit=()=>{

    let updates={isBlock:isBlock}
    updateMenu(id,updates)
    .then((data) =>{
      // console.log(data);
      if(!data.ok){
        return (
          toast.error(`${data?.message}`,{
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
          }
        ))}
      toast(`${data?.message}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
        });
        setGridModal(!gridModal)
        
    }
    ).catch((e)=>{console.log("error "+e)
      toast.error("Error in Update",{
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true
        }
      )})
  }
  return (
    <>
    <DashboardLayout>
      <MDBModal  tabIndex='-1'show={gridModal} setShow={setGridModal}>
        <MDBModalDialog centered>
          <MDBModalContent>
            <MDBModalHeader>
              <SendAndArchiveIcon fontSize='large'/>
              <MDBModalTitle style={{paddingLeft:"1%",fontSize:"1.2rem"}}>Recover</MDBModalTitle>
              <MDBBtn
                type='button'
                className='btn-close'
                color='none'
                onClick={toggleShow}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
            <MDBox sx={{display:"flex",flexDirection:"row",flexWrap:"wrap",alignItems:"center",justifyContent:"space-around"}}>
            <Typography>Are you sure! You wanna recover this menu</Typography>
            </MDBox>

            </MDBModalBody>
            <MDBModalFooter>
              <MDButton type="reset" variant="contained" aria-label="fingerprint" sx={{display:"flex",margin:"15px",alignSelf:"left"}} color="error" onClick={toggleShow} >
                No
              </MDButton>
              <MDButton variant="contained" aria-label="fingerprint" sx={{displat:"flex",margin:"15px",alignSelf:"left"}} color={sidenavColor} onClick={handleSubmit} >
                Yes
              </MDButton>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
      <ToastContainer />
      </DashboardLayout>
    </>
  );
}