import DashboardLayout from 'examples/LayoutContainers/DashboardLayout'
import DashboardNavbar from 'examples/Navbars/DashboardNavbar'
import TopSearchSelect from 'components/CustomTable'
import React from 'react'
import { useState } from 'react'
import { MDBDataTableV5 } from 'mdbreact'
import { useMaterialUIController } from 'context'
import "./Styles.css"
import { useEffect } from 'react'
import { getAllUsers } from 'utility/apiService'
import { getRole } from 'utility/apiService'
import { getNoOwner } from 'utility/apiService'
import { Icon } from '@mui/material'
import MDTypography from 'components/MDTypography'
import MDBox from 'components/MDBox'
import PersonView from 'layouts/createEmployee/components/PersonView'
import ProfileModal from './ProfileModal'
const DashTable = () => {
    const [controller] = useMaterialUIController();
    const {sidenavColor } = controller;
    const data=[]
    const [count,setCount] = useState(0)
    let color
    if(sidenavColor=="info") color="blue"
    else if(sidenavColor=="error") color="red"
    else if(sidenavColor=="warning") color="orange"
    else if(sidenavColor=="success") color="green"
    else if(sidenavColor=="primary") color="pink"
    else if(sidenavColor=="dark") color="black"
    const [role,setRole]=useState()
    const [gridModal, setGridModal] = useState(false);
    const [tabledata,setTabledata]=useState({
        "columns": [
            // {
            //     "label": "SL No",
            //     "field": "sl",
            //     "width": 270,
                
            //   },
            {
              "label": "Employee Name",
              "field": "name",
              "width": 270,
              
            },
            {
              "label": "DOB",
              "field": "dob",
              "width": 20
            },
            {
              "label": "Mail Id",
              "field": "contact",
              "width": 170
            },
            {
              "label": "Contact",
              "field": "phn",
              "width": 50
            },
            // {
            //   "label": "View",
            //   "field": "view",
            //   "width": 50
            // },
          ],
        //   "rows":[]
    })
    const handleClick=(item)=>{
      setGridModal(!gridModal)
      console.log(item.firstName);
      data.push(item)
    }

    useEffect(()=>{
      let role=[]
             getRole()
        .then((res)=>{
            // console.log(res);
            role.push(res?.data)
        }).catch((e)=>{console.log("err",e);})
        getNoOwner()
        .then((response)=>{
            // console.log("NoOwner",response.data[0]);
            let rows=[]
            // setCount(count+1)
            // console.log(response.data);
            response.data[0].map((itme)=>{

              rows.push({"sl":count,"name":itme.firstName +"\n"+ itme.lastName,
              "contact":itme.email,"dob":itme.dob,"phn":itme.mobileNo
           })
            })
            setTabledata({...tabledata,rows})
        }).catch((e)=>{console.log("err",e);})
        // console.log("role",role);
    },[])
    // console.log("roles",tabledata);
    
  return (

    <div>
       <MDBDataTableV5
      entriesOptions={[5,10,15,20,25]}
      entries={5}
      pagesAmount={4}
      data={tabledata}
      searchTop
      searchBottom={false}
      materialSearch
      theadColor={color}
      className='table_02 z-depth-5 text-primary'
      searching
      fullPagination
      responsive
      theadTextWhite
      // tbodyColor='black'
      //  bordered
    />
    {gridModal  && <ProfileModal gridModal={gridModal} setGridModal={setGridModal} data={data}   />}
    </div>

  )
}

export default DashTable
