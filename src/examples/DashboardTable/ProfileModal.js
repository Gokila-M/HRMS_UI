import MDBox from 'components/MDBox'
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout'
import { MDBModalContent, MDBModalDialog, MDBModalTitle } from 'mdb-react-ui-kit'
import { MDBBtn, MDBModal, MDBModalBody, MDBModalFooter, MDBModalHeader } from 'mdbreact'
import React from 'react'

export default function ProfileModal({gridModal,setGridModal,data,setOpen}) {
    const toggleShow = () => setGridModal(!gridModal);
  return (
    <div>

    <DashboardLayout>
      <MDBModal  tabIndex='-1'show={gridModal} setShow={setGridModal}>
        <MDBModalDialog centered>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>User Profile</MDBModalTitle>
              <MDBBtn
                type='button'
                className='btn-close'
                color='none'
                onClick={toggleShow}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
            <MDBox sx={{display:"flex",flexDirection:"row",flexWrap:"wrap",alignItems:"center",justifyContent:"space-around"}}>

                </MDBox>

            </MDBModalBody>
            <MDBModalFooter>

            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
      </DashboardLayout>

    </div>
  )
}
