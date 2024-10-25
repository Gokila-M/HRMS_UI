import { Grid, Icon, Radio, RadioGroup } from '@mui/material';
import CustomButton from 'components/CustomButton';
import CustomInput from 'components/CustomInuput';
import CustomSelect from 'components/CustomSelect';
import MDBox from 'components/MDBox';
import MDButton from 'components/MDButton';
import MDInput from 'components/MDInput';
import MDTypography from 'components/MDTypography';
import { useMaterialUIController } from 'context';
import UserId from 'context/userIdContext';
import React, { useState ,useEffect, useContext} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addExperience } from 'utility/apiService';
import { userUpdate } from 'utility/apiService';
import { workCurrentCompany } from 'utility/apiService';
import { getRoles } from 'utility/apiService';

export default function WorkDetails() {
     let userId=useContext(UserId);
     const [controller] = useMaterialUIController();
     const { miniSidenav, transparentSidenav, whiteSidenav, darkMode, sidenavColor } = controller;

     let textColor = 'white';

     if (transparentSidenav || (whiteSidenav && !darkMode)) {
          textColor = 'dark';
     } else if (darkMode) {
          textColor = 'inherit';
     }
     const handleCompanyAdd = () => {
          const value = [...previousCompany];
          value.push({
               pName: '',
               pDesignation: '',
               pDescription: '',
               pSalary: null,
               pJoiningDate: '',
               pLeavingDate: '',
               pExperience: '',
          });
          setPreviousCompany(value);
     };

     const handleCompany = (e, index) => {
          const { name, value } = e.target;
          // console.log(name,value);
          const list = [...previousCompany];
          list[index][name] = value;
          setPreviousCompany(list);
     };

     const handleCompanyRemove = (index) => {
          const value = [...previousCompany];
          value.splice(index, 1);
          setPreviousCompany(value);
     };
     const [departments, setDepartments] = useState([
          {
               value: 'Information Technology',
               label: 'Information Technology',
               designation: [{ value: 'Software Developer', label: 'Software Developer' }],
          },
          { value: 'Admin', label: 'Admin', designation: [{ value: 'Admin', label: 'Admin' }] },
          { value: 'Developing', label: 'Developing', designation: [{ value: 'Software Developer', label: 'Software Developer' }] },
          {
               value: 'Testing',
               label: 'Testing',
               designation: [
                    { value: 'Manual Tester', label: 'Manual Tester' },
                    { value: 'Automation Tester', label: 'Automation Tester' },
               ],
          },
          { value: 'Human Resources', label: 'Human Resources', designation: [{ value: 'HR', label: 'HR' }] },
          {
               value: 'Accounts',
               label: 'Accounts',
               designation: [
                    { value: 'Sr Account Executive', label: 'Sr Account Executive' },
                    { value: 'Assistant Manager', label: 'Assistant Manager' },
               ],
          },
          { value: 'HR Department', label: 'HR Department', designation: [{ value: 'HR Executive', label: 'HR Executive' }] },
     ]);
     const [department, setDepartment] = useState('');
     const [designation, setDesignation] = useState('');
     // const [role, setRole] = useState([
     //      { value: 'Tester', label: 'Tester' },
     //      { value: 'Admin', label: 'Admin' },
     //      { value: 'Chief Accounting Officer', label: 'Chief Accounting Officer' },
     //      { value: 'UI Developer', label: 'UI Developer' },
     // ]);
     const [role, setRole] = useState({});
     const handleRole = async() => {
          const response=await getRoles();
          setRole(response.data?.map((item)=>{
               return {
                    value:item.roleType || '',
                    label:item.roleType || '',
                    id:item._id || ''
               }
          }))
          // console.log(response.data);
     }
     const [selectedRole, setSelectedRole] = useState('');
     const [reportingTo, setReportingTo] = useState([
          { value: 'Salman Raju Galimutti', label: 'Salman Raju Galimutti' },
          { value: 'Vijay Kumar', label: 'Vijay Kumar' },
          { value: 'Soudar T', label: 'Soudar T' },
          { value: 'Bharath S', label: 'Bharath S' },
          { value: 'Saran Raj', label: 'Saran Raj' },
          { value: 'Nitheesh AK', label: 'Nitheesh AK' },
          { value: 'Prakash Kumar', label: 'Prakash Kumar' },
     ]);
     const [slectedReportingTo, setslectedReportingTo] = useState('');
     const [salary, setSalary] = useState(null);
     const [joiningDate, setJoiningDate] = useState('');
     const [fresher, setFresher] = useState(true);

     const [previousCompany, setPreviousCompany] = useState([
          {
               companyName: '',
               designation: '',
               description: '',
               salary: null,
               startDate: '',
               endDate: '',
               experience: '',
          },
     ]);
     const handleReset = () => {
          setDepartment('');
          setDesignation('');
          setSelectedRole('');
          setslectedReportingTo('');
          setSalary('');
          setJoiningDate('');
          setFresher(true);
          setError(false);
          setPreviousCompany([
               {
                    companyName: '',
                    designation: '',
                    description: '',
                    salary: null,
                    startDate: '',
                    endDate: '',
                    experience: '',
               },
          ]);
     };
     const [error, setError] = useState({
          departmentError: '',
          designationError: '',
          roleError: '',
          reportingToError: '',
          salaryError: '',
          joiningDateError: '',
          isFreasherError: '',
          pNameError: '',
          pDesignationError: '',
          pDescriptionError: '',
          pSalaryError: '',
          pJoiningDateError: '',
          pLeavingDateError: '',
          pExperienceError: '',
     });

     const handleSubmit = async(e) => {
          e.preventDefault();
          // console.log(selectedRole.id);
          if (!department) {
               setError((pre) => ({ ...pre, departmentError: 'Department is required' }));
               // console.log(department);
          } else {
               setError((pre) => ({ ...pre, departmentError: '' }));
          }
          if (!designation) {
               setError((pre) => ({ ...pre, designationError: 'Designation is required' }));
          } else {
               setError((pre) => ({ ...pre, designationError: '' }));
          }
          if (!selectedRole) {
               setError((pre) => ({ ...pre, roleError: 'Role is required' }));
          } else {
               setError((pre) => ({ ...pre, roleError: '' }));
          }
          if (!slectedReportingTo) {
               setError((pre) => ({ ...pre, reportingToError: 'Reporting To is required' }));
          } else {
               setError((pre) => ({ ...pre, reportingToError: '' }));
          }
          if (!salary) {
               setError((pre) => ({ ...pre, salaryError: 'Salary is required' }));
          } else {
               setError((pre) => ({ ...pre, salaryError: '' }));
          }
          if (!joiningDate) {
               setError((pre) => ({ ...pre, joiningDateError: 'Date of joining is required' }));
          } else {
               setError((pre) => ({ ...pre, joiningDateError: '' }));
          }
          if (!fresher) {
               previousCompany.map((item, index) => {
                    if (!item.companyName) {
                         setError((prev) => ({ ...prev, pNameError: 'Name is required' }));
                    } else {
                         setError((prev) => ({ ...prev, pNameError: '' }));
                    }
                    if (!item.designation) {
                         setError((prev) => ({ ...prev, pDesignationError: 'Designation is required' }));
                    } else {
                         setError((prev) => ({ ...prev, pDesignationError: '' }));
                    }
                    if (!item.description) {
                         setError((prev) => ({ ...prev, pDescriptionError: 'Description is required' }));
                    } else {
                         setError((prev) => ({ ...prev, pDescriptionError: '' }));
                    }
                    if (!item.salary) {
                         setError((prev) => ({ ...prev, pSalaryError: 'Salary is required' }));
                    } else {
                         setError((prev) => ({ ...prev, pSalaryError: '' }));
                    }
                    if (!item.startDate) {
                         setError((prev) => ({ ...prev, pJoiningDateError: 'ervice Start Date is required' }));
                    } else {
                         setError((prev) => ({ ...prev, pJoiningDateError: '' }));
                    }
                    if (!item.endDate) {
                         setError((prev) => ({ ...prev, pLeavingDateError: 'Service End Date is required' }));
                    } else {
                         setError((prev) => ({ ...prev, pLeavingDateError: '' }));
                    }
                    if (!item.experience) {
                         setError((prev) => ({ ...prev, pExperienceError: 'Experience is required' }));
                    } else {
                         setError((prev) => ({ ...prev, pExperienceError: '' }));
                    }
               });
          }

          const preComp = previousCompany.map((item, index) => {
               if (
                    !item.companyName ||
                    !item.designation ||
                    !item.description ||
                    !item.salary ||
                    !item.startDate ||
                    !item.endDate ||
                    !item.experience
               ) {
                    return true;
               } else {
                    return false;
               }
          });
          if (!department || !designation || !selectedRole || !slectedReportingTo || !salary || !joiningDate || 
               !fresher &&
               preComp[0] == true
               ) {
               console.log('error');
          } else {
               try {
                    await workCurrentCompany(userId.userId.id,{
                         department:department.value,
                         designation:designation.value,
                         role:selectedRole.id,
                         salary:salary,
                         joiningDate:joiningDate,
                         reportedTo:slectedReportingTo.value,
                    }).then((workd)=>{
                         console.log(workd)
                         if(workd.ok){
                              toast.success('Work Details Added Successfully')
                              userUpdate({
                                   id:userId.userId.id,
                                   role:selectedRole.id,
                              }).then((upd)=>{
                                   console.log(upd)
                              }).catch((err)=>{
                                   console.log(err)
                              })
                              if(!fresher){
                                   previousCompany.map((item, index) => {
                                        addExperience(userId.userId.id,item).then((res)=>{
                                             console.log(res)
                                        }).catch((err)=>{
                                             console.log(err)
                                        })
                                   });
                              }
                              console.log(workd);
                         }else{
                              toast.error(workd.message)
                         }
                         
                    }).catch((err)=>{
                         console.log(err)
                    })
       
               } catch (error) {
                    console.log(error);
               }
          }
     };
     useEffect(() => {
          handleRole();
     }, []);

     return (
          <>
               <div style={{ paddingLeft: '1%', backgroundColor: 'white' }}>
                    <MDBox sx={{ paddingLeft: '5%' }}>
                    <MDBox mb={2}>
                              <MDTypography variant='h5' color='secondary'>
                                   Current Company Details
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
                                        <CustomSelect
                                             option={departments}
                                             placeholder='Select'
                                             selectedOptions={department}
                                             setSelectedOptions={setDepartment}
                                             name='Department'
                                             widthForSelect='100%'
                                             isSearchable={true}
                                             isMulti={false}
                                             width='300px'
                                             required={true}
                                        />
                                        {error.departmentError ? (
                                             <p style={{ paddingLeft: '14px', color: 'red', fontSize: '14px' }}>
                                                  {error.departmentError}
                                             </p>
                                        ) : null}
                                   </MDBox>
                                   <MDBox>
                                        <CustomSelect
                                             option={department.designation}
                                             placeholder='Select'
                                             selectedOptions={designation}
                                             setSelectedOptions={setDesignation}
                                             isSearchable={true}
                                             name='Designation'
                                             isMulti={false}
                                             width='300px'
                                             required={true}
                                        />
                                        {error.designationError ? (
                                             <p style={{ paddingLeft: '14px', color: 'red', fontSize: '14px' }}>
                                                  {error.designationError}
                                             </p>
                                        ) : null}
                                   </MDBox>
                                   <MDBox>
                                        <CustomSelect
                                             option={role}
                                             placeholder='Select'
                                             selectedOptions={selectedRole}
                                             setSelectedOptions={setSelectedRole}
                                             isSearchable={true}
                                             name='Role'
                                             isMulti={false}
                                             width='300px'
                                             required={true}
                                        />
                                        {error.roleError ? (
                                             <p style={{ paddingLeft: '14px', color: 'red', fontSize: '14px' }}>
                                                  {error.roleError}
                                             </p>
                                        ) : null}
                                   </MDBox>
                                   <MDBox>
                                        <CustomSelect
                                             option={reportingTo}
                                             placeholder='Select'
                                             selectedOptions={slectedReportingTo}
                                             setSelectedOptions={setslectedReportingTo}
                                             isSearchable={true}
                                             name='Reporting To'
                                             isMulti={false}
                                             width='300px'
                                             required={true}
                                        />
                                        {error.reportingToError ? (
                                             <p style={{ paddingLeft: '14px', color: 'red', fontSize: '14px' }}>
                                                  {error.roleError}
                                             </p>
                                        ) : null}
                                   </MDBox>

                                   <MDBox>
                                        <CustomInput title='Salary' type='number' value={salary} setValue={setSalary} width='300px' />
                                        {error.salaryError ? (
                                             <p style={{ paddingLeft: '14px', color: 'red', fontSize: '14px' }}>{error.salaryError}</p>
                                        ) : null}
                                   </MDBox>
                                   <MDBox>
                                        <CustomInput
                                             title='Date of Joining'
                                             type='date'
                                             value={joiningDate}
                                             setValue={setJoiningDate}
                                             width='300px'
                                        />
                                        {error.joiningDateError ? (
                                             <p style={{ paddingLeft: '14px', color: 'red', fontSize: '14px' }}>
                                                  {error.joiningDateError}
                                             </p>
                                        ) : null}
                                   </MDBox>
                              </MDBox>
                         </MDBox>
                         <Grid container spacing={3} ml={1} mt={2}>
                              <Grid item xs={6} md={3}>
                                   <MDBox mb={2}>
                                        <MDTypography variant='h6'>Is the new Employee a Fresher ?</MDTypography>
                                   </MDBox>
                              </Grid>
                              <Grid item xs={6} md={3}>
                                   <MDBox mb={2}>
                                        <RadioGroup row aria-label='position' name='position' defaultValue={true}>
                                             <Radio value={true} onChange={() => setFresher(true)} />
                                             <MDTypography variant='h6' mt={0.8}>
                                                  Yes
                                             </MDTypography>
                                             <Radio value={false} onChange={() => setFresher(false)} />
                                             <MDTypography variant='h6' mt={0.8}>
                                                  No
                                             </MDTypography>
                                        </RadioGroup>
                                   </MDBox>
                              </Grid>
                         </Grid>
                         <MDBox>
                         {!fresher && (
                              <>
                                   {' '}
                                   <MDBox mb={2} >
                                        <MDTypography variant='h5' color='secondary'>
                                             Previous Company Details
                                             <Icon
                                                  color='none'
                                                  fontSize='large'
                                                  sx={{ marginLeft: '3px', float: 'right', cursor: 'pointer' }}
                                                  onClick={handleCompanyAdd}>
                                                  add
                                             </Icon>
                                        </MDTypography>
                                   </MDBox>
                                   <hr style={{ width: '100%' }} />
                                   {previousCompany.map((pCompany, index) => (
                                        <MDBox key={index} display='flex' flexDirection='column' sx={{ width: '100%' }}>
                                             <MDBox mb={2}>
                                                  {index < 1 ? (
                                                       <MDTypography variant='body1' color='black'>
                                                            Company {index + 1}
                                                       </MDTypography>
                                                  ) : (
                                                       <MDTypography variant='body1' color='black'>
                                                            Company {index + 1}
                                                            <Icon
                                                                 color='none'
                                                                 fontSize='large'
                                                                 sx={{ marginLeft: '3px', float: 'right', cursor: 'pointer' }}
                                                                 onClick={handleCompanyRemove}>
                                                                 remove
                                                            </Icon>
                                                       </MDTypography>
                                                  )}
                                             </MDBox>
                                             <MDBox
                                                  key={index}
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
                                                       }}>
                                                       <MDBox>
                                                            <div style={{ width: '300px' }}>
                                                                 <MDTypography
                                                                      variant='h6'
                                                                      fontWeight='medium'
                                                                      color='dark'
                                                                      mt={1}
                                                                      sx={{ paddingLeft: '20px' }}>
                                                                      Company Name
                                                                 </MDTypography>
                                                                 <input
                                                                      name='companyName'
                                                                      value={pCompany.companyName}
                                                                      type='text'
                                                                      onChange={(e) => handleCompany(e, index)}
                                                                      className='inp'
                                                                      style={{
                                                                           width: '90%',
                                                                           border: '1px solid #d2d2d2',
                                                                           outline: 'none',
                                                                           borderRadius: '5px',
                                                                           padding: '8px',
                                                                           margin: '5px',
                                                                      }}
                                                                 />
                                                            </div>
                                                            {error.pNameError ? (
                                                                 <p style={{ paddingLeft: '14px', color: 'red', fontSize: '14px' }}>
                                                                      {error.pNameError}
                                                                 </p>
                                                            ) : null}
                                                       </MDBox>
                                                       <MDBox>
                                                            <div style={{ width: '300px' }}>
                                                                 <MDTypography
                                                                      variant='h6'
                                                                      fontWeight='medium'
                                                                      color='dark'
                                                                      mt={1}
                                                                      sx={{ paddingLeft: '20px' }}>
                                                                      Designation
                                                                 </MDTypography>
                                                                 <input
                                                                      type='text'
                                                                      name='designation'
                                                                      value={pCompany.designation}
                                                                      onChange={(e) => handleCompany(e, index)}
                                                                      className='inp'
                                                                      style={{
                                                                           width: '90%',
                                                                           border: '1px solid #d2d2d2',
                                                                           outline: 'none',
                                                                           borderRadius: '5px',
                                                                           padding: '8px',
                                                                           margin: '5px',
                                                                      }}
                                                                 />
                                                            </div>
                                                            {error.pDesignationError ? (
                                                                 <p style={{ paddingLeft: '14px', color: 'red', fontSize: '14px' }}>
                                                                      {error.pDesignationError}
                                                                 </p>
                                                            ) : null}
                                                       </MDBox>
                                                       <MDBox>
                                                            <div style={{ width: '300px' }}>
                                                                 <MDTypography
                                                                      variant='h6'
                                                                      fontWeight='medium'
                                                                      color='dark'
                                                                      mt={1}
                                                                      sx={{ paddingLeft: '20px' }}>
                                                                      Description
                                                                 </MDTypography>
                                                                 <input
                                                                      type='text'
                                                                      name='description'
                                                                      value={pCompany.description}
                                                                      onChange={(e) => handleCompany(e, index)}
                                                                      className='inp'
                                                                      style={{
                                                                           width: '90%',
                                                                           border: '1px solid #d2d2d2',
                                                                           outline: 'none',
                                                                           borderRadius: '5px',
                                                                           padding: '8px',
                                                                           margin: '5px',
                                                                      }}
                                                                 />
                                                            </div>
                                                            {error.pDescriptionError ? (
                                                                 <p style={{ paddingLeft: '14px', color: 'red', fontSize: '14px' }}>
                                                                      {error.pDescriptionError}
                                                                 </p>
                                                            ) : null}
                                                       </MDBox>
                                                       <MDBox>
                                                            <div style={{ width: '300px' }}>
                                                                 <MDTypography
                                                                      variant='h6'
                                                                      fontWeight='medium'
                                                                      color='dark'
                                                                      mt={1}
                                                                      sx={{ paddingLeft: '20px' }}>
                                                                      Salary
                                                                 </MDTypography>
                                                                 <input
                                                                      type='number'
                                                                      name='salary'
                                                                      value={pCompany.salary}
                                                                      onChange={(e) => handleCompany(e, index)}
                                                                      className='inp'
                                                                      style={{
                                                                           width: '90%',
                                                                           border: '1px solid #d2d2d2',
                                                                           outline: 'none',
                                                                           borderRadius: '5px',
                                                                           padding: '8px',
                                                                           margin: '5px',
                                                                      }}
                                                                 />
                                                            </div>
                                                            {error.pSalaryError ? (
                                                                 <p style={{ paddingLeft: '14px', color: 'red', fontSize: '14px' }}>
                                                                      {error.pSalaryError}
                                                                 </p>
                                                            ) : null}
                                                       </MDBox>
                                                       <MDBox>
                                                            <div style={{ width: '300px' }}>
                                                                 <MDTypography
                                                                      variant='h6'
                                                                      fontWeight='medium'
                                                                      color='dark'
                                                                      mt={1}
                                                                      sx={{ paddingLeft: '20px' }}>
                                                                      Service Start Date
                                                                 </MDTypography>
                                                                 <input
                                                                      type='date'
                                                                      name='startDate'
                                                                      value={pCompany.startDate}
                                                                      onChange={(e) => handleCompany(e, index)}
                                                                      className='inp'
                                                                      style={{
                                                                           width: '90%',
                                                                           border: '1px solid #d2d2d2',
                                                                           outline: 'none',
                                                                           borderRadius: '5px',
                                                                           padding: '8px',
                                                                           margin: '5px',
                                                                      }}
                                                                 />
                                                            </div>
                                                            {error.pJoiningDateError ? (
                                                                 <p style={{ paddingLeft: '14px', color: 'red', fontSize: '14px' }}>
                                                                      {error.pJoiningDateError}
                                                                 </p>
                                                            ) : null}
                                                       </MDBox>
                                                       <MDBox>
                                                            <div style={{ width: '300px' }}>
                                                                 <MDTypography
                                                                      variant='h6'
                                                                      fontWeight='medium'
                                                                      color='dark'
                                                                      mt={1}
                                                                      sx={{ paddingLeft: '20px' }}>
                                                                      Service End Date
                                                                 </MDTypography>
                                                                 <input
                                                                      type='date'
                                                                      name='endDate'
                                                                      value={pCompany.endDate}
                                                                      onChange={(e) => handleCompany(e, index)}
                                                                      className='inp'
                                                                      style={{
                                                                           width: '90%',
                                                                           border: '1px solid #d2d2d2',
                                                                           outline: 'none',
                                                                           borderRadius: '5px',
                                                                           padding: '8px',
                                                                           margin: '5px',
                                                                      }}
                                                                 />
                                                            </div>
                                                            {error.pLeavingDateError ? (
                                                                 <p style={{ paddingLeft: '14px', color: 'red', fontSize: '14px' }}>
                                                                      {error.pLeavingDateError}
                                                                 </p>
                                                            ) : null}
                                                       </MDBox>
                                                       <MDBox>
                                                            <div style={{ width: '300px' }}>
                                                                 <MDTypography
                                                                      variant='h6'
                                                                      fontWeight='medium'
                                                                      color='dark'
                                                                      mt={1}
                                                                      sx={{ paddingLeft: '20px' }}>
                                                                      Experience
                                                                 </MDTypography>
                                                                 <input
                                                                      type='text'
                                                                      name='experience'
                                                                      value={pCompany.experience}
                                                                      onChange={(e) => handleCompany(e, index)}
                                                                      className='inp'
                                                                      style={{
                                                                           width: '90%',
                                                                           border: '1px solid #d2d2d2',
                                                                           outline: 'none',
                                                                           borderRadius: '5px',
                                                                           padding: '8px',
                                                                           margin: '5px',
                                                                      }}
                                                                 />
                                                            </div>
                                                            {error.pExperienceError ? (
                                                                 <p style={{ paddingLeft: '14px', color: 'red', fontSize: '14px' }}>
                                                                      {error.pExperienceError}
                                                                 </p>
                                                            ) : null}
                                                       </MDBox>
                                                  </MDBox>
                                             </MDBox>
                                        </MDBox>
                                   ))}
                              </>
                         )}
                    </MDBox>

                         <MDBox mt={'30px'} sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'end' }}>
                              <MDButton
                                   type='reset'
                                   variant='contained'
                                   aria-label='fingerprint'
                                   sx={{ displat: 'flex', margin: '15px', alignSelf: 'left' }}
                                   color='error'
                                   onClick={handleReset}>
                                   Reset
                              </MDButton>
                              <MDButton
                                   variant='contained'
                                   aria-label='fingerprint'
                                   sx={{ displat: 'flex', margin: '15px', alignSelf: 'left' }}
                                   color={sidenavColor}
                                   onClick={handleSubmit}>
                                   Submit
                              </MDButton>
                         </MDBox>
                    </MDBox>
               </div>

               <>
                    
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
               </>
          </>
     );
}