//import CustomButton from 'components/CustomButton';
import MDButton from 'components/MDButton';
import MDInput from 'components/MDInput';
import MDTypography from 'components/MDTypography';
import MDBox from 'components/MDBox';
import { Grid, Card, Icon } from '@mui/material';
import { Divider } from 'antd';
import React, { useContext, useState } from 'react';
import CustomButton from 'components/CustomButton';
import { valid } from 'chroma-js';
import { createDocuments } from 'utility/apiService';
import CustomInput from 'components/CustomInuput';
import { useMaterialUIController } from 'context';
import { toast, ToastContainer } from 'react-toastify';
import UserId from 'context/userIdContext';

export default function UpdateDocumentDetails() {
     let userIdContext=useContext(UserId)
     const [accountNo,setAccountNo]=useState()
     const [ifsc,setIfsc]=useState()
     const [branch,setBranch]=useState()
     const [bankName,setBankName]=useState()
     const [name,setName]=useState()
     const [adhaarNo,setAdhaarNo]=useState()
     const [panNo,setPanNo]=useState()
     const [passportNo,setPassportNo]=useState()
     const [uanNo,setUanNo]=useState()
     const [pfNo,setPfNo]=useState()
     const [esiNo,setEsiNo]=useState()
     const [vaccination1Date,setvaccination1Date]=useState()
     const [vaccination2Date,setvaccination2Date]=useState()

     //Errormessage

     const [anoerrorMessage, setAnoerrorMessage] = useState("");
     const [ifscerrorMessage, setIfscerrorMessage] = useState("");
     const [brancherrorMessage, setBrancherrorMessage] = useState("");
     const [banknameerrorMessage, setBanknameerrorMessage] = useState("");
     const [nameerrorMessage, setNameerrorMessage] = useState("");
     const [adhaarerrorMessage, setAdhaarerrorMessage] = useState("");
     const [panerrorMessage, setPanerrorMessage] = useState("");
     const [passporterrorMessage, setPassporterrorMessage] = useState("");
     const [uanerrorMessage, setUanerrorMessage] = useState("");
     const [pferrorMessage, setPferrorMessage] = useState("");
     const [esierrorMessage, setEsierrorMessage] = useState("");
     const [v1errorMessage, setV1errorMessage] = useState("");
     // const [v2errorMessage, setV2errorMessage] = useState("");
     const [controller] = useMaterialUIController();
     const { miniSidenav, transparentSidenav, whiteSidenav, darkMode, sidenavColor } = controller;
     const handleSubmit = (e) => {
          console.log(accountNo,ifsc,passportNo,name,branch,panNo,uanNo,esiNo,adhaarNo,vaccination1Date,vaccination2Date,pfNo)
          // const id="63d4b9cd587c10e47ec23703"
          let   pan = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/
          let passport=/^[A-PR-WY][1-9]\d\s?\d{4}[1-9]$/
          let uan=/[0-9]{4}[0-9]{4}[0-9]{2}[0-9]{10}/
          let pf=/[A-Z]{2}[\s\/]?[A-Z]{3}[\s\/]?[0-9]{7}[\s\/]?[0-9]{3}[\s\/]?[0-9]{7}$/
          valid=true
          if(!accountNo){
               setAnoerrorMessage("Accountno Required")
               valid=false
          }
             else{
               setAnoerrorMessage("")
          }
          if(!ifsc) {
               setIfscerrorMessage("Ifscno  Required")
               valid=false
               }
            else{
               setIfscerrorMessage("")
            }
               if(!bankName){
               setBanknameerrorMessage("BankName Required")
               valid=false
               } 
               else{
                    setBanknameerrorMessage("")
                 }         
               if(!branch){
                setBrancherrorMessage("Branch Required")
                valid=false
                } 
                else{
                    setBrancherrorMessage("")
                 } 
              
                 if (!adhaarNo) {
                    setAdhaarerrorMessage( 'Adhaar No is required' );
                    valid=false
               } else if (adhaarNo.length < 12 || adhaarNo.length > 12) {
                    setAdhaarerrorMessage('Adhaar No must be 12 characters long' );
                    valid=false
               } else {
                    setAdhaarerrorMessage('');
               }
               if(!name){
                    setNameerrorMessage("Name Required")
                    valid =false
                    }
                    else{
                         setNameerrorMessage("")
                      }  
               if(!panNo){
                   setPanerrorMessage("Panno Required")
                   valid=false
               
               }
                   else  if(panNo){
                    if (!pan.test(panNo)) {
                         setPanerrorMessage("invalid")
                         valid=false
                    } else {
                         setPanerrorMessage("")
                        
                    }
                    }
                    else{
                         setPanerrorMessage("")
                      } 
               if(!passportNo){
                    setPassporterrorMessage("Passportno Required")
                    valid =false
                    }
                    else  if(passportNo){
                         if (!passport.test(passportNo)) {
                         setPassporterrorMessage("invalid")
                         valid=false
                     
                         } else {
                              setPassporterrorMessage("")
                             
                         }
                  }
                    else{
                         setPassporterrorMessage("")
                      }  
               if(!uanNo){
                    setUanerrorMessage("Uanno Required")
                    valid =false
                    }
                    else   if(uanNo){
                         if (!uan.test(uanNo)) {
                         setUanerrorMessage("invalid")
                         valid=false
                         } else {
                              setUanerrorMessage("")
                              
                         }
                  }
                    else{
                         setUanerrorMessage("")
                      }  
               if(!pfNo){
                    setPferrorMessage("Pfno Required")
                    valid =false
                    } 
                    else  if(pfNo){
                         if (!pf.test(pfNo)) {
                         setPferrorMessage("invalid")
                         valid=false
                       
                         } else {
                              setPferrorMessage("")
                              
                         }
                    }
                    else{
                         setPferrorMessage("")
                      } 
               if(!esiNo){
                    setEsierrorMessage("Esino Required")
                    valid =false
                    } 
                    else{
                         setEsierrorMessage("")
                      } 
               if(!vaccination1Date){
                    setV1errorMessage("vaccinate1 Required")
                    valid =false
                    } 
                    else{
                         setV1errorMessage("")
                      } 

              if(valid==true){
               //const userId=localStorage.getItem('userId') 
                //console.log("wwww",userrId),
                 UpdateDocumentsById(
                         // console.log("wwww"),
                         userIdContext.userId.i,
                         {
                         accountNo:accountNo,
                         ifsc:ifsc,
                         branch:branch,
                         bankName: bankName,
                         accountHolderName:name,
                         aadhaarNo:adhaarNo,
                         panNo:panNo,
                         passportNo:passportNo,
                         uanNo:uanNo,
                         pfNo:pfNo,
                         esiNo:esiNo,
                         vaccination1Date: vaccination1Date,
                         vaccination2Date: vaccination2Date

                    })
                    .then((data) =>{
                         console.log(data)
                              toast.success(" Document details created")
                         
                       }
                       ).catch((e)=>console.log("error "+e))
               }
               //  else console.log("els working");
     };
     

     let textColor = 'white';

     if (transparentSidenav || (whiteSidenav && !darkMode)) {
          textColor = 'dark';
     } else if (darkMode) {
          textColor = 'inherit';
     }


     return (
          <>
          <div style={{ paddingLeft: '1%'}}>
          <MDBox sx={{ paddingLeft: '5%' }}>
          <MDBox mb={2}>
               <MDTypography variant='h5' color='secondary'>
               BankDetails
               </MDTypography>
           </MDBox>
           <hr style={{ width: '100%' }} />
           <MDBox
               sx={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
               }}>
           <MDBox
                mt={1}
                sx={{
                     display: 'flex',
                     flexDirection: 'row',
                     flexWrap: 'wrap',
                     alignItems: 'baseLine',
                     // justifyContent: 'space-between',
                  }}>
                      <MDBox>
                          <CustomInput
                          title='Account Number'
                          type='number'
                          value={accountNo}
                          // setValue={setAccountNo}
                          width='300px'
                          />
                         {anoerrorMessage && <p className="error" style={{paddingLeft: '14px',color:"red",fontSize:"12px"}}> {anoerrorMessage} </p>}
                      </MDBox> 
                      <MDBox>
                          <CustomInput
                          title='IFSC'
                          type='number'
                          value={ifsc}
                          setValue={setIfsc}
                          width='300px'
                          />
                          {ifscerrorMessage && <p className="error" style={{paddingLeft: '14px',color:"red",fontSize:"12px"}}> {ifscerrorMessage} </p>}
                      </MDBox>
                      <MDBox>
                          <CustomInput
                          title='Branch'
                          type='text'
                          value={branch}
                          setValue={setBranch}
                          width='300px'
                          />
                         {brancherrorMessage && <p className="error" style={{paddingLeft: '14px',color:"red",fontSize:"12px"}}> {brancherrorMessage} </p>}
                      </MDBox>
                      <MDBox>
                          <CustomInput
                          title='Bank Name'
                          type='text'
                          value={bankName}
                          setValue={setBankName}
                          width='300px'
                          />
                         {banknameerrorMessage && <p className="error" style={{paddingLeft: '14px',color:"red",fontSize:"12px"}}> {banknameerrorMessage} </p>}
                      </MDBox>         
                      <MDBox>
                          <CustomInput
                          title='Name'
                          type='text'
                          value={name}
                          setValue={setName}
                          width='300px'
                          />
                         {nameerrorMessage && <p className="error" style={{paddingLeft: '14px',color:"red",fontSize:"12px"}}> {nameerrorMessage} </p>}
                      </MDBox>
           </MDBox>
           </MDBox>
           <MDBox mb={2}>
               <MDTypography variant='h5' color='secondary'>
               Indentification Details
               </MDTypography>
           </MDBox>
           <hr style={{ width: '100%' }} />
           <MDBox
               sx={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
               }}>
           <MDBox
                mt={1}
                sx={{
                     display: 'flex',
                     flexDirection: 'row',
                     flexWrap: 'wrap',
                     alignItems: 'baseLine',
                     // justifyContent: 'space-between',
                  }}>
                      <MDBox>
                          <CustomInput
                          title='Aadhaar Number'
                          type='number'
                          value={adhaarNo}
                          // setValue={setAdhaarNo}
                          width='300px'
                          />
                          {adhaarerrorMessage && <p className="error" style={{paddingLeft: '14px',color:"red",fontSize:"12px"}}> {adhaarerrorMessage} </p>}
                      </MDBox> 
                      <MDBox>
                          <CustomInput
                          title='PAN Number'
                          type='text'
                          value={panNo}
                          setValue={setPanNo}
                          width='300px'
                          />
                         {panerrorMessage && <p className="error" style={{paddingLeft: '14px',color:"red",fontSize:"12px"}}> {panerrorMessage} </p>}
                      </MDBox>
                      <MDBox>
                          <CustomInput
                          title='Passport Number'
                          type='text'
                          value={passportNo}
                          setValue={setPassportNo}
                          width='300px'
                          />
                           {passporterrorMessage && <p className="error" style={{paddingLeft: '14px',color:"red",fontSize:"12px"}}> {passporterrorMessage} </p>}
                      </MDBox>
                      <MDBox>
                          <CustomInput
                          title='UAN Number'
                          type='number'
                          value={uanNo}
                          setValue={setUanNo}
                          width='300px'
                          />
                           {uanerrorMessage && <p className="error" style={{paddingLeft: '14px',color:"red",fontSize:"12px"}}> {uanerrorMessage} </p>}
                      </MDBox>         
                      <MDBox>
                          <CustomInput
                          title='PF Number'
                          type='text'
                          value={pfNo}
                          setValue={setPfNo}
                          width='300px'
                          />
                         {pferrorMessage && <p className="error" style={{paddingLeft: '14px',color:"red",fontSize:"12px"}}> {pferrorMessage} </p>}
                      </MDBox>
                      <MDBox>
                          <CustomInput
                          title='ESI Number'
                          type='text'
                          value={esiNo}
                          setValue={setEsiNo}
                          width='300px'
                          />
                         {esierrorMessage && <p className="error" style={{paddingLeft: '14px',color:"red",fontSize:"12px"}}> {esierrorMessage} </p>}
                      </MDBox>
           </MDBox>
           </MDBox>
           <MDBox mb={2}>
               <MDTypography variant='h5' color='secondary'>
               Medical Details
               </MDTypography>
           </MDBox>
           <hr style={{ width: '100%' }} />
           <MDBox
               sx={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
               }}>
           <MDBox
                mt={1}
                sx={{
                     display: 'flex',
                     flexDirection: 'row',
                     flexWrap: 'wrap',
                     alignItems: 'baseLine',
                     // justifyContent: 'space-between',
                  }}>
                      <MDBox>
                          <CustomInput
                           title='Vaccination Dose 1'
                           type={'date'} 
                           style={{ border: '0.1px' }}
                          value={vaccination1Date}
                          setValue={setvaccination1Date}
                          width='300px'
                          />
                    {v1errorMessage && <p className="error" style={{paddingLeft: '14px',color:"red",fontSize:"12px"}}> {v1errorMessage} </p>}
                      </MDBox> 
                      <MDBox>
                      <CustomInput
                           title='Vaccination Dose 2'
                           type={'date'} 
                           style={{ border: '0.1px' }}
                          value={vaccination2Date}
                          setValue={setvaccination2Date}
                          width='300px'
                          />
                      </MDBox>
                     
           </MDBox>
           </MDBox>
           <MDBox mt={'30px'} sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'end' }}>
                              {/* <MDButton
                                       type='reset'
                                       variant='contained'
                                       aria-label='fingerprint'
                                       sx={{ displat: 'flex', margin: '15px', alignSelf: 'left' }}
                                       color='error'
                                       onClick={handleReset}
                                       >
                                       Reset
                                  </MDButton> */}
                                  <MDButton
                                       variant='contained'
                                       aria-label='fingerprint'
                                       sx={{ displat: 'flex', margin: '15px', alignSelf: 'left' }}
                                       color={sidenavColor}
                                       onClick={handleSubmit}
                                       >
                                      Update
                                  </MDButton>
                       </MDBox>
          </MDBox>
          <ToastContainer
                              position='top-right'
                              autoClose={2000}
                              hideProgressBar={false}
                              newestOnTop={false}
                              closeOnClick
                              rtl={false}
                              pauseOnFocusLoss
                              draggable
                              pauseOnHover
                              theme='light'
                         />
          </div>
              </>
     )
}

