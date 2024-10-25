import MDButton from 'components/MDButton';
import React, { useContext, useState } from 'react';
import MDTypography from 'components/MDTypography';
import MDBox from 'components/MDBox';
import MDInput from 'components/MDInput';
import CustomInput from 'components/CustomInuput';
import { Grid, Card } from '@mui/material';
import { Divider } from 'antd';
import CustomSelect from 'components/CustomSelect';
import { toast, ToastContainer } from 'react-toastify';
import { createEducation } from 'utility/apiService';
import { valid } from 'chroma-js';
import { fontSize } from '@mui/system';
import { logicalPropertiesLinter } from '@ant-design/cssinjs';
import { useMaterialUIController } from 'context';
import UserId from 'context/userIdContext';
export default function UpdateEducation(props) {
 
     const [controller] = useMaterialUIController();
     let userIdContext = useContext(UserId);

     const { miniSidenav, transparentSidenav, whiteSidenav, darkMode, sidenavColor } = controller;
     let textColor = 'white';

     if (transparentSidenav || (whiteSidenav && !darkMode)) {
          textColor = 'dark';
     } else if (darkMode) {
          textColor = 'inherit';
     }
     // const [userId, setUserId] = useState('');
     const [sslcSchoolName, setSslcSchoolName] = useState('');
     const [sslcYearOfPassing, setSslcYearOfPassing] = useState('');
     const [sslcPercentage, setSslcPercentage] = useState('');
     const [hscSchoolName, setHscSchoolName] = useState('');
     const [hscYearOfPassing, setHscYearOfPassing] = useState('');
     const [hscPercentage, setHscPercentage] = useState('');
     const [ugUniversityName, setUgUniversityName] = useState('');
     const [ugInstituteName, setUgInstituteName] = useState('');
     const [ugDepartmentCourse, setUgDepartmentCourse] = useState('');
     const [ugYearOfPassing, setUgYearOfPassing] = useState('');
     const [ugCgpa, setUgCgpa] = useState('');
     const [pgUniversityName, setPgUniversityName] = useState('');
     const [pgInstituteName, setPgInstituteName] = useState('');
     const [pgDepartmentCourse, setPgDepartmentCourse] = useState('');
     const [pgYearOfPassing, setPgYearOfPassing] = useState('');
     const [pgCgpa, setPgCgpa] = useState('');
     const [store, setStore] = useState('');

     //ErrorMessage useState
     const [sSchoolNameerrorMessage, setSSchoolNameErrorMessage] = useState('');
     const [syoperrorMessage, setSyopErrorMessage] = useState('');
     const [spercenterrorMessage, setSpercentErrorMessage] = useState('');
     const [sboarderrorMessage, setSboardErrorMessage] = useState('');
     const [hsnrrorMessage, setHsnErrorMessage] = useState('');
     const [hyoperrorMessage, setHyopErrorMessage] = useState('');
     const [hpercenterrorMessage, setHpercentErrorMessage] = useState('');
     const [hboarderrorMessage, setHboardErrorMessage] = useState('');
     const [ugunerrorMessage, setUgunErrorMessage] = useState('');
     const [uginerrorMessage, setUginErrorMessage] = useState('');
     const [ugdcerrorMessage, setUgdcErrorMessage] = useState('');
     const [ugyoperrorMessage, setUgyopErrorMessage] = useState('');
     const [ugpererrorMessage, setUgperErrorMessage] = useState('');

     const [selectedsboard, setSelectedSboard] = useState();
     const [selectedhboard, setSelectedHboard] = useState();
     const [sslcBoard, setSslcBoard] = useState([
          { value: 'StateBoard', label: 'StateBoard' },
          { value: 'CBSE', label: 'CBSE' },
          { value: 'ISC', label: 'ISC' },
          { value: 'ICSE', label: 'ICSE' },
          { value: 'NIOS', label: 'NIOS' },
     ]);
     const [hscBoard, setHscBoard] = useState([
          { value: 'StateBoard', label: 'StateBoard' },
          { value: 'CBSE', label: 'CBSE' },
          { value: 'ISC', label: 'ISC' },
          { value: 'ICSE', label: 'ICSE' },
          { value: 'NIOS', label: 'NIOS' },
     ]);
     const handleClick = async () => {
          valid = true;
          if (!sslcSchoolName) {
               setSSchoolNameErrorMessage('Schoolname Required');
               valid = false;
          } else {
               setSSchoolNameErrorMessage('');
          }
          if (!sslcYearOfPassing) {
               setSyopErrorMessage('YearOfPassing  Required');
               valid = false;
          } else {
               setSyopErrorMessage('');
          }
          if (!sslcPercentage) {
               setSpercentErrorMessage('Pecentage Required');
               valid = false;
          } else {
               setSpercentErrorMessage('');
          }
          if (!selectedsboard) {
               setSboardErrorMessage('Board Required');
               valid = false;
          } else {
               setSboardErrorMessage('');
          }

          if (!hscSchoolName) {
               setHsnErrorMessage('Schoolname Required');
               valid = false;
          } else {
               setHsnErrorMessage('');
          }
          if (!selectedhboard) {
               setHboardErrorMessage('Board Required');
               valid = false;
          } else {
               setHboardErrorMessage('');
          }
          if (!hscPercentage) {
               setHpercentErrorMessage('Percentage Required');
               valid = false;
          } else {
               setHpercentErrorMessage('');
          }
          if (!hscYearOfPassing) {
               setHyopErrorMessage('Yearofpassing Required');
               valid = false;
          } else {
               setHyopErrorMessage('');
          }
          if (!ugUniversityName) {
               setUgunErrorMessage('UniversityName Required');
               valid = false;
          } else {
               setUgunErrorMessage('');
          }
          if (!ugInstituteName) {
               setUginErrorMessage('Institutename Required');
               valid = false;
          } else {
               setUginErrorMessage('');
          }
          if (!ugDepartmentCourse) {
               setUgdcErrorMessage('Departmentcourse Required');
               valid = false;
          } else {
               setUgdcErrorMessage('');
          }
          if (!ugYearOfPassing) {
               setUgyopErrorMessage('YearofPassing Required');
               valid = false;
          } else {
               setUgyopErrorMessage('');
          }
          if (!ugCgpa) {
               setUgperErrorMessage('Cpga Required');
               valid = false;
          } else {
               setUgperErrorMessage('');
          }

          if (valid == true) {
               const userId = userIdContext.userId.id;
               createEducation(userId, {
                    sslcSchoolName: sslcSchoolName,
                    sslcBoard: selectedsboard?.value,
                    sslcYearOfPassing: sslcYearOfPassing,
                    sslcPercentage: sslcPercentage,
                    hscSchoolName: hscSchoolName,
                    hscBoard: selectedhboard?.value,
                    hscYearOfPassing: hscYearOfPassing,
                    hscPercentage: hscPercentage,
                    ugUniversityName: ugUniversityName,
                    ugInstituteName: ugInstituteName,
                    ugYearOfPassing: ugYearOfPassing,
                    ugDepartmentCourse: ugDepartmentCourse,
                    ugCgpa: ugCgpa,
                    pgUniversityName: pgUniversityName,
                    pgInstituteName: pgInstituteName,
                    pgDepartmentCourse: pgDepartmentCourse,
                    pgYearOfPassing: pgYearOfPassing,
                    pgCgpa: pgCgpa,
               })
                    .then((data) => {
                         console.log(userId);
                         console.log(data);
                         toast.success('Education datails created');
                    })
                    .catch((e) => console.log('error ' + e));
               // console.log(sslcBoard,hscBoard)
               // console.log(selectedsboard)
          }

          //  return valid
          // console.log(create);
     };
     return (
          <>
          <div style={{ paddingLeft: '1%', backgroundColor: textColor }}>
          <MDBox sx={{ paddingLeft: '5%' }}>
                <MDBox mb={2}>
                        <MDTypography variant='h5' color='secondary'>
                            SSLC
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
                        title='School Name'
                        type='text'
                        value={sslcSchoolName}
                        setValue={setSslcSchoolName}
                        width='300px'
                        />
                 {sSchoolNameerrorMessage && <p className="error" style={{paddingLeft: '14px',color:"red",fontSize:"12px"}}> {sSchoolNameerrorMessage} </p>}
                </MDBox>
                <MDBox>
                <CustomSelect 
                 option={sslcBoard} 
                 name='Board'
                 placeholder="Select" 
                 selectedOptions={selectedsboard}
                 setSelectedOptions={setSelectedSboard} 
                 isSearchable={true} 
                 isMulti={false} 
                 width='300px'
                 widthForSelect='100%' 
                 value={sslcBoard} 
                 setvalue={setSslcBoard}
                                                />
                 {sboarderrorMessage && <p className="error" style={{paddingLeft: '14px',color:"red",fontSize:"12px"}}> {sboarderrorMessage} </p>}
                </MDBox>
                <MDBox>
                    <CustomInput
                        title='YearofPassing'
                        type='number'
                        value={sslcYearOfPassing}
                        setValue={setSslcYearOfPassing}
                        width='300px'
                   />
         {syoperrorMessage && <p className='error' style={{paddingLeft: '14px', color: 'red', fontSize: '12px' }}> {syoperrorMessage}</p> }
                </MDBox>
                <MDBox>
                    <CustomInput
                        title='percentage'
                        type='number'
                        value={sslcPercentage}
                        setValue={setSslcPercentage}
                        width='300px'
                   />
         {spercenterrorMessage &&  <p className='error' style={{paddingLeft: '14px', color: 'red', fontSize: '12px' }}> {spercenterrorMessage}</p>}
                </MDBox>   
            </MDBox>
          </MDBox>
          <MDBox mb={2}>
                        <MDTypography variant='h5' color='secondary'>
                           HSC
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
                        title='School Name'
                        type='text'
                        value={hscSchoolName}
                        setValue={setHscSchoolName}
                        width='300px'
                        />
          {hsnrrorMessage && <p className='error' style={{paddingLeft: '14px', color: 'red', fontSize: '12px' }}>{hsnrrorMessage}</p>}
                </MDBox>
                <MDBox>
                 <CustomSelect  
                 option={hscBoard}
                 name='Board'
                 placeholder='Select'
                 selectedOptions={selectedhboard}
                 setSelectedOptions={setSelectedHboard}
                 isSearchable={true}
                 isMulti={false}
                 width='300px'
                 widthForSelect='100%'
                 value={hscBoard}
                 setValue={setHscBoard}
                 />
         {hboarderrorMessage && <p className='error' style={{ paddingLeft: '14px',color: 'red', fontSize: '12px' }}>{hboarderrorMessage} </p>}
                </MDBox>
                <MDBox>
                    <CustomInput
                        title='YearofPassing'
                        type='number'
                        min="0"
                        value={hscYearOfPassing}
                        setValue={setHscYearOfPassing}
                        width='300px'
                   />
         {hyoperrorMessage && <p className='error' style={{paddingLeft: '14px', color: 'red', fontSize: '12px' }}>{hyoperrorMessage}</p>}
                </MDBox>
                <MDBox>
                    <CustomInput
                        title='percentage'
                        type='number'
                        value={hscPercentage}
                        setValue={setHscPercentage}
                        width='300px'
                   />
        {hpercenterrorMessage &&<p className='error' style={{paddingLeft: '14px', color: 'red', fontSize: '12px' }}>{hpercenterrorMessage}</p>}
                </MDBox>   
            </MDBox>
          </MDBox>
          <MDBox mb={2}>
                        <MDTypography variant='h5' color='secondary'>
                          UG(Under Graduate)
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
                        title='University Name'
                        type='text'
                        value={ugUniversityName}
                        setValue={setUgUniversityName}
                        width='300px'
                        />
        {ugunerrorMessage &&<p className='error' style={{ paddingLeft: '14px',color: 'red', fontSize: '12px' }}>{ugunerrorMessage}</p>}
                </MDBox>
                <MDBox>
                <CustomInput
                        title='Institute Name'
                        type='text'
                        value={ugInstituteName}
                        setValue={setUgInstituteName}
                        width='300px'
                        />
        {uginerrorMessage && <p className='error' style={{paddingLeft: '14px', color: 'red', fontSize: '12px' }}>{uginerrorMessage}</p>}
                </MDBox>
                <MDBox>
                <CustomInput
                        title='Department-Course'
                        type='text'
                        value={ugDepartmentCourse}
                        setValue={setUgDepartmentCourse}
                        width='300px'
                        />
         {ugdcerrorMessage &&<p className='error' style={{ paddingLeft: '14px',color: 'red', fontSize: '12px' }}>{ugdcerrorMessage}</p>}
                </MDBox>
                <MDBox>
                    <CustomInput
                        title='YearofPassing'
                        type='number'
                        value={ugYearOfPassing}
                        setValue={ setUgYearOfPassing}
                        width='300px'
                   />
         {ugyoperrorMessage &&<p className='error' style={{ paddingLeft: '14px',color: 'red', fontSize: '12px' }}>{ugyoperrorMessage}</p>}
                </MDBox>
                <MDBox>
                    <CustomInput
                        title='percentage'
                        type='number'
                        value={ugCgpa}
                        setValue={setUgCgpa}
                        width='300px'
                   />
                    {ugpererrorMessage &&  <p className='error' style={{ paddingLeft: '14px',color: 'red', fontSize: '12px' }}>{ugpererrorMessage}</p>}
                </MDBox>   
            </MDBox>
          </MDBox>
          <MDBox mb={2}>
                        <MDTypography variant='h5' color='secondary'>
                          PG(Post Graduate)
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
                        title='University Name'
                        type='text'
                        value={pgUniversityName}
                        setValue={setPgUniversityName}
                        width='300px'
                        />
                </MDBox>
                <MDBox>
                <CustomInput
                        title='Institute Name'
                        type='text'
                        value={pgInstituteName}
                        setValue={setPgInstituteName}
                        width='300px'
                        />
                </MDBox>
                <MDBox>
                <CustomInput
                        title='Department-Course'
                        type='text'
                        value={pgDepartmentCourse}
                        setValue={setPgDepartmentCourse}
                        width='300px'
                        />
                </MDBox>
                <MDBox>
                    <CustomInput
                        title='YearofPassing'
                        type='number'
                        value={pgYearOfPassing}
                        setValue={setPgYearOfPassing}
                        width='300px'
                   />
                </MDBox>
                <MDBox>
                    <CustomInput
                        title='percentage'
                        type='number'
                        value={pgCgpa}
                        setValue={setPgCgpa}
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
                             onClick={handleReset}>
                             Reset
                        </MDButton> */}
                        <MDButton
                             variant='contained'
                             aria-label='fingerprint'
                             sx={{ displat: 'flex', margin: '15px', alignSelf: 'left' }}
                             color={sidenavColor}
                             onClick={handleClick}>
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
     );
}
