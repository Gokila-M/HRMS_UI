  import CustomButton from 'components/CustomButton'
import CustomInput from 'components/CustomInuput'
import CustomSelect from 'components/CustomSelect'
import CustomSwitchButton from 'components/CustomSwitchButton'
import MDBox from 'components/MDBox'
import MDButton from 'components/MDButton'
import MDTypography from 'components/MDTypography'
import { useMaterialUIController } from 'context'
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout'
import DashboardNavbar from 'examples/Navbars/DashboardNavbar'
import React,{useEffect, useState} from 'react'
import EnhancedTable from 'components/CustomTable';
import IconArrow from "@mui/icons-material/ArrowBackIos";
import Footer from 'examples/Footer'
import { getRoleMenu ,getRole} from 'utility/apiService'
import { createRoleMenu } from 'utility/apiService'
import { Icon } from '@mui/material'
import RoleMenuAccessModel from 'components/RoleMenuAccessModel'  
import { getMenuTable } from 'utility/apiService'
import { toast, ToastContainer } from 'react-toastify'
  
const Mapping = () => {
  const [selectedOptionsRole, setSelectedOptionsRole] = useState();
  const [selectedOptionsMenu, setSelectedOptionsMenu] = useState();
  const [gridModal, setGridModal] = useState(false);
  const [getAccess, setGetAccess] = useState(false);
  const [createAccess, setCreateAccess] = useState(false);
  const [updateAccess, setUpdateAccess] = useState(false);
  const [deleteAccess, setDeleteAccess] = useState(false);
  const [id, setId] = useState();
  const [error, setError] = useState({
    roleError:"",
    menuError:"",
  });
  const [open, setOpen] = useState(false);
  const [roleListApi, setRoleListApi] = useState({
    "columns": [
      {
        "label": "Role Name",
        "field": "roleName",
        "width": 270,
        
      },
      {
        "label": "Role Code",
        "field": "roleCode",
        "width": 170
      },
      {
        "label": "View",
        "field": "view",
        "width": 150
      },
    ],
  });
  const [dataFromApi, setDataFromApi] = useState([]);
  const [data, setData] = useState();
  const [roleList, setRoleList] = useState();
  const [menuList, setMenuList] = useState();
  const [menuListDuplicate, setMenuListDuplicate] = useState();
  const [controller] = useMaterialUIController();
  const { miniSidenav, transparentSidenav, whiteSidenav, darkMode, sidenavColor } = controller;

  let textColor = "white";

  if (transparentSidenav || (whiteSidenav && !darkMode)) {
    textColor = "dark";
  } else if ( darkMode) {
    textColor = "inherit";
  }

  const toggleShow = (id) => {
    setId(id)
    setGridModal(!gridModal);
  }
  const reset=()=>{
    setSelectedOptionsRole("")
    setSelectedOptionsMenu("")
    setGetAccess(false)
    setCreateAccess(false)
    setUpdateAccess(false)
    setDeleteAccess(false)
    setError({roleError:"",menuError:""})
    getMenuTable().then((data) =>{
      let obj=[]
      data.data.map((item)=>{
        obj.push({ id:item._id,value: item?.menuName, label: item?.menuName })
      })
      setMenuList(obj)
    }
    ).catch((e)=>console.log("error "+e))
  }
  
  useEffect(()=>{
    getMenuTable().then((data) =>{
      let obj=[]
      data.data.map((item)=>{
        obj.push({ id:item._id,value: item?.menuName, label: item?.menuName })
      })
      setMenuList(obj)
      setMenuListDuplicate(obj)
    }
    ).catch((e)=>console.log("error "+e))

    getRole()
    .then((data) =>{
      let rows=[]
      data.data?.map((item)=>(
        rows.push({"roleName" : item.roleType,"roleCode" : item.code,
          view: <Icon style={{cursor:"pointer",marginLeft: "38%"}} onClick={()=>toggleShow(item?._id)} color="red" fontSize="small">visibility</Icon>,id:item._id
        })
      ))
      setRoleListApi({...roleListApi,rows})
    }
    ).catch((e)=>console.log("error "+e))
      
    getRoleMenu().then((data) =>{
      setDataFromApi(data.data)
    }
    ).catch((e)=>console.log("error "+e))
    getRole().then((data) =>{
      let obj=[]
      data.data.map((item)=>{
        obj.push({ id:item._id,value: item?.roleType, label: item?.roleType })
      })
      setRoleList(obj)
    }

    ).catch((e)=>console.log("error "+e))
    
  },[])
  useEffect(()=>{
    let obj=[]
    getMenuTable().then((data) =>{
      data.data.map((item)=>{
        obj.push({ id:item._id,value: item?.menuName, label: item?.menuName })
      })
      setMenuList(obj)
    }).catch((e)=>console.log("error "+e))
    getRoleMenu().then((data) =>{
      setDataFromApi(data.data)
    }
    ).catch((e)=>console.log("error "+e))
  },[open])

  useEffect(()=>{
    let arr=[]
    console.log("arr");
    console.log(arr);
    dataFromApi.map((data)=>{
      menuListDuplicate?.map((item,index)=>{
        if(selectedOptionsRole?.value==data.role.roleType){
          if(data.menu.menuName===item.value){
            arr.push(item)
          }
        }
      })
    })
    let unMapArr = menuListDuplicate?.filter(function(data) {
      console.log(data);
      return !arr?.find(function(item) {
        console.log(item);
        return data.id == item.id
      })
    })
    console.log(unMapArr);
    setMenuList(unMapArr)
  },[selectedOptionsRole])

  const handleSubmit=async()=>{
    if(!selectedOptionsRole){
      setError(prev => ({...prev, roleError:"Role is Required" }));
    }else setError(prev=>({...prev,roleError:""}))
    if(!selectedOptionsMenu){
      setError(prev => ({...prev, menuError:"Menu is Required" }));
    }else setError(prev=>({...prev,menuError:""}))
    if(selectedOptionsMenu && selectedOptionsRole){
      if (getAccess===false && createAccess===false && updateAccess===false && deleteAccess===false) {
        return toast.error("Please Select Atleast One Access")
        
      }
      createRoleMenu({role:selectedOptionsRole.id,menu:selectedOptionsMenu.id,get:getAccess,create:createAccess,update:updateAccess,delete:deleteAccess}).then((data) =>{
        if(data.ok){
          reset()
          toast.success(data.message)
          setOpen(false)
        }else{
          toast.error(data.message)
        }

      }).catch((e)=>console.log("error "+e))
    }
  }

  const handleOpenMapping=()=>{
    setOpen(!open)
    reset()
  }

  return (
    <DashboardLayout>  
      <DashboardNavbar />
      <div style={{ minHeight: "calc(100vh - 190px)",width:"100%" ,backgroundColor:textColor,borderRadius:20}}>
        {open==false ? (
          <>
        <MDBox mt={5} sx={{ display:"flex",flexDirection:"row",margin:"15px",justifyContent:"space-between"}} >
          <MDTypography variant="h4" fontWeight="medium" color="dark" mt={1} sx={{padding:2}}>
            Role Menu
          </MDTypography>
          <MDButton variant="contained" aria-label="fingerprint" onClick={()=>setOpen(!open)} sx={{display:"flex",margin:"15px",fontSize:"18px"}} color={sidenavColor} >
            Mapping
          </MDButton>
        </MDBox>
        <MDBox mt={10}  sx={{display:"flex",justifyContent:"center"}} >
          <MDBox sx={{width:"95%"}}>
            <EnhancedTable data={roleListApi} />
          </MDBox>
        </MDBox>
        </>):
          (
          <MDBox fullwidth="true">
          <MDBox mt={5} sx={{display:"flex",flexDirection:"row",margin:"15px"}}>
            <MDBox mt={"18px"} sx={{alignItems:"flex-start",borderRadius:"100%",boxShadow: "0 2px 8px 0 rgb(99 99 99 / 20%)",cursor:"pointer",display:"flex",height:"40px",justifyContent:"center",
              marginRight: "10px",width:"40px"}} onClick={handleOpenMapping} >
                <IconArrow style={{marginLeft:"7px",marginTop:"7px"}} fontSize="medium">ArrowBackIosIcon</IconArrow>
              </MDBox>
            <MDTypography variant="h4" fontWeight="medium" color="dark" mt={1} sx={{padding:2,display:"flex",alignItems:"center"  } }>
              Role Menu Mapping
            </MDTypography>
          </MDBox>
          <MDBox sx={{paddingLeft:"4%"}}>
            <MDBox sx={{width:"100%",display:"flex",flexDirection:"column",flexWrap:"wrap",alignItems:"flex-start",justifyContent:"center"}}>
              <MDBox mt={10} sx={{display:"flex",flexDirection:"row",flexWrap:"wrap",alignItems:"baseLine",justifyContent:"center"}}>
                <MDBox >
                  <CustomSelect widthForSelect="100%" 
                    option={roleList}  placeholder="Select" selectedOptions={selectedOptionsRole} name="Select the Role" 
                    setSelectedOptions={setSelectedOptionsRole} isSearchable={true} isMulti={false} width="300px" required={true}
                  />
                  {error.roleError ? <p style={{paddingLeft:"14px" ,color:"red",fontSize:"14px"}}>{error.roleError}</p>:null}
                </MDBox>
                <MDBox >
                  <CustomSelect widthForSelect="100%" disabled={selectedOptionsRole?false:true}
                    option={menuList}  placeholder="Select" selectedOptions={selectedOptionsMenu} name="Select the Menu" 
                    setSelectedOptions={setSelectedOptionsMenu} isSearchable={true} isMulti={false} width="300px" required={true}
                  />
                  {error.menuError ? <p style={{paddingLeft:"14px" ,color:"red",fontSize:"14px"}}>{error.menuError}</p>:null}
                </MDBox>
              </MDBox>
              <MDBox sx={{display:"flex",flexDirection:"row",flexWrap:"wrap",alignItems:"center",justifyContent:"center"}}>
                <MDBox sx={{width:"300px",display:"flex",flexDirection:"row",flexWrap:"wrap",alignItems:"center",justifyContent:"space-around"}}>
                  <CustomSwitchButton name={"Get"} checked={getAccess} setchecked={setGetAccess}/>
                  <CustomSwitchButton name={"Create"} checked={createAccess} setchecked={setCreateAccess} />
                </MDBox>
                <MDBox sx={{width:"300px",display:"flex",flexDirection:"row",flexWrap:"wrap",alignItems:"center",justifyContent:"space-around"}}>
                  <CustomSwitchButton name={"Update"} checked={updateAccess} setchecked={setUpdateAccess} />
                  <CustomSwitchButton name={"Delete"} checked={deleteAccess} setchecked={setDeleteAccess} />
                </MDBox>
              </MDBox>
            </MDBox>
            <MDBox mt={"30px"} sx={{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"end"}}>
              <MDButton type="reset" variant="contained" aria-label="fingerprint" sx={{display:"flex",margin:"15px",alignSelf:"left"}} color="error" onClick={reset} >
                Reset
              </MDButton>
              <MDButton variant="contained" aria-label="fingerprint" sx={{display:"flex",margin:"15px",alignSelf:"left"}} color={sidenavColor} onClick={handleSubmit} >
                Submit
              </MDButton>
            </MDBox>
          </MDBox>
        </MDBox> )}
      </div>
      <Footer/>
      {gridModal && <RoleMenuAccessModel gridModal={gridModal} setGridModal={setGridModal} id={id} value={dataFromApi} />}
      <ToastContainer />
    </DashboardLayout>
  )
}

export default Mapping