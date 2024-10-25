import { Alert, Grid, Icon, TextField } from '@mui/material';
import MDBox from 'components/MDBox';
import MDInput from 'components/MDInput';
import MDTypography from 'components/MDTypography';
import React, { useContext, useState } from 'react';
import { useMaterialUIController } from 'context';
import { Label } from '@mui/icons-material';
import MDButton from 'components/MDButton';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CustomInput from 'components/CustomInuput';
import CustomSelect from 'components/CustomSelect';
import { userReg, userAddress } from 'utility/apiService';
import { userFamily } from 'utility/apiService';
import UserIdContext from 'context/userIdContext';
const GeneralDetails = () => {
     const [controller] = useMaterialUIController();

     let textColor = 'white';
     const { miniSidenav, transparentSidenav, whiteSidenav, darkMode, sidenavColor } = controller;

     if (transparentSidenav || (whiteSidenav && !darkMode)) {
          textColor = 'dark';
     } else if (darkMode) {
          textColor = 'inherit';
     }

     let userId = useContext(UserIdContext);
     // console.log(userId);
     // Personal Info
     const [firstName, setFirstName] = useState('');
     const [lastName, setLastName] = useState('');
     const [dob, setDob] = useState('');
     const [email, setEmail] = useState('');
     const [selectedOptionsGender, setSelectedOptionsGender] = useState('');
     const [selectedOptionsMarriageStatus, setSelectedOptionsMarriageStatus] = useState('');
     const [gender, setGender] = useState([
          { value: 'Male', label: 'Male' },
          { value: 'Female', label: 'Female' },
          { value: 'Others', label: 'Others' },
     ]);
     const [selectedgender, setSelectedgender] = useState('');
     const [bloodGroup, setBloodGroup] = useState('');
     const [selectedstatus, setSelectedstatus] = useState('');
     const [marriageStatus, setMarriageStatus] = useState([
          { value: 'Married', label: 'Married' },
          { value: 'Unmarried', label: 'Unmarried' },
     ]);

     const [mobileNo, setMobileNo] = useState();
     const [password, setPassword] = useState('codiis@123');
     const [confirmpassword, setConfirmPassword] = useState('');

     // Address Info
     const [address1, setAddress1] = useState('');
     const [address2, setAddress2] = useState('');
     const [country, setCountry] = useState('');
     const [state, setState] = useState('');
     const [city, setCity] = useState('');
     const [pincode, setPincode] = useState(null);

     // Family Info
     const [familyMembers, setFamilyMembers] = useState([
          { name: '', relationship: '', occupation: '', dob: '', adhaarNo: null, emergencyContact: null },
     ]);
     // console.log(familyMembers);
     // Family Member Add
     const handleFamilyMemberAdd = (e) => {
          e.preventDefault();
          const values = [...familyMembers];
          values.push({ name: '', relationship: '', occupation: '', dob: '', adhaarNo: null, emergencyContact: null });
          setFamilyMembers(values);
     };

     // Family Member Remove
     const handleFamilyMemberRemove = (e, index) => {
          e.preventDefault();
          const values = [...familyMembers];
          values.splice(index, 1);
          setFamilyMembers(values);
     };

     const handleFamilyMemberChange = (e, index) => {
          const { name, value } = e.target;
          console.log(name, value);
          const list = [...familyMembers];
          list[index][name] = value;
          setFamilyMembers(list);
     };
     const [error, setError] = useState({
          firstNameError: '',
          lastNameError: '',
          dobError: '',
          emailError: '',
          genderError: '',
          bloodGroupError: '',
          maritalStatusError: '',
          mobileNoError: '',
          address1Error: '',
          countryError: '',
          stateError: '',
          cityError: '',
          pincodeError: '',
          fNameError: '',
          fRelationError: '',
          fOccupationError: '',
          fDobError: '',
          fAdhaarnoError: '',
          fEmergencycontactError: '',
     });

     const [usrD, setUsrD] = useState('');
     const handleSubmit = async (e) => {
          e.preventDefault();
          // console.log(familyMembers);
          if (!firstName) {
               setError((pre) => ({ ...pre, firstNameError: 'First Name is required' }));
          } else {
               setError((pre) => ({ ...pre, firstNameError: '' }));
          }
          if (!lastName) {
               setError((pre) => ({ ...pre, lastNameError: 'Last Name is required' }));
          } else {
               setError((pre) => ({ ...pre, lastNameError: '' }));
          }
          if (!dob) {
               setError((pre) => ({ ...pre, dobError: 'Date of Birth is required' }));
          } else {
               setError((pre) => ({ ...pre, dobError: '' }));
          }
          if (!email) {
               setError((pre) => ({ ...pre, emailError: 'Email is required' }));
          } else if (!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{3}$/.test(email)) {
               setError((pre) => ({ ...pre, emailError: 'Email is invalid' }));
          } else {
               setError((pre) => ({ ...pre, emailError: '' }));
          }
          if (!selectedgender) {
               setError((pre) => ({ ...pre, genderError: 'Gender is required' }));
          } else {
               setError((pre) => ({ ...pre, genderError: '' }));
          }
          if (!bloodGroup) {
               setError((pre) => ({ ...pre, bloodGroupError: 'Blood Group is required' }));
          } else {
               setError((pre) => ({ ...pre, bloodGroupError: '' }));
          }
          if (!selectedstatus) {
               setError((pre) => ({ ...pre, maritalStatusError: 'Marital Status is required' }));
          } else {
               setError((pre) => ({ ...pre, maritalStatusError: '' }));
          }
          if (!mobileNo) {
               setError((pre) => ({ ...pre, mobileNoError: 'Mobile No is required' }));
          } else if (!/^\d{10}$/.test(mobileNo)) {
               setError((pre) => ({ ...pre, mobileNoError: 'Mobile No must be 10 characters long' }));
          } else {
               setError((pre) => ({ ...pre, mobileNoError: '' }));
          }
          if (!address1) {
               setError((pre) => ({ ...pre, address1Error: 'Address is required' }));
          } else {
               setError((pre) => ({ ...pre, address1Error: '' }));
          }
          if (!country) {
               setError((pre) => ({ ...pre, countryError: 'Country is required' }));
          } else {
               setError((pre) => ({ ...pre, countryError: '' }));
          }
          if (!state) {
               setError((pre) => ({ ...pre, stateError: 'State is required' }));
          } else {
               setError((pre) => ({ ...pre, stateError: '' }));
          }
          if (!city) {
               setError((pre) => ({ ...pre, cityError: 'City is required' }));
          } else {
               setError((pre) => ({ ...pre, cityError: '' }));
          }
          if (!pincode) {
               setError((pre) => ({ ...pre, pincodeError: 'Pincode is required' }));
          } else if (!/^(\d{6}|\d{6})$/.test(pincode)) {
               setError((pre) => ({ ...pre, pincodeError: 'Pincode must be 6 characters long' }));
          } else {
               setError((pre) => ({ ...pre, pincodeError: '' }));
          }
          familyMembers.map((item, index) => {
               if (!item.name) {
                    setError((pre) => ({ ...pre, fNameError: 'Name is required' }));
               } else {
                    setError((pre) => ({ ...pre, fNameError: '' }));
               }
               if (!item.relationship) {
                    setError((pre) => ({ ...pre, fRelationError: 'Relationship is required' }));
               } else {
                    setError((pre) => ({ ...pre, fRelationError: '' }));
               }
               if (!item.occupation) {
                    setError((pre) => ({ ...pre, fOccupationError: 'Occupation is required' }));
               } else {
                    setError((pre) => ({ ...pre, fOccupationError: '' }));
               }
               if (!item.dob) {
                    setError((pre) => ({ ...pre, fDobError: 'Date of Birth is required' }));
               } else {
                    setError((pre) => ({ ...pre, fDobError: '' }));
               }
               if (!item.adhaarNo) {
                    setError((pre) => ({ ...pre, fAdhaarnoError: 'Adhaar No is required' }));
               } else if (item.adhaarNo.length < 12 || item.adhaarNo.length > 12) {
                    setError((pre) => ({ ...pre, fAdhaarnoError: 'Adhaar No must be 12 characters long' }));
               } else {
                    setError((pre) => ({ ...pre, fAdhaarnoError: '' }));
               }
               if (!item.emergencyContact) {
                    setError((pre) => ({ ...pre, fEmergencycontactError: 'Emergency Contact No is required' }));
               } else if (item.emergencyContact.length < 10 || item.emergencyContact.length > 10) {
                    setError((pre) => ({ ...pre, fEmergencycontactError: 'Emergency Contact No must be 10 characters long' }));
               } else {
                    setError((pre) => ({ ...pre, fEmergencycontactError: '' }));
               }
          });

          const familyMember = familyMembers.map((item, index) => {
               if (
                    !item.name ||
                    !item.relationship ||
                    !item.occupation ||
                    !item.dob ||
                    !item.adhaarNo ||
                    item.adhaarNo.length < 12 ||
                    item.adhaarNo.length > 12 ||
                    !item.emergencyContact ||
                    item.emergencyContact.length < 10 ||
                    item.emergencyContact.length > 10
               ) {
                    return true;
               } else {
                    return false;
               }
          });

          if (
               !firstName ||
               !lastName ||
               !dob ||
               !email ||
               !/\S+@\S+\.\S+/.test(email) ||
               !selectedgender ||
               !bloodGroup ||
               !selectedstatus ||
               !mobileNo ||
               !/^\d{10}$/.test(mobileNo) ||
               !address1 ||
               !country ||
               !state ||
               !city ||
               !pincode ||
               !/^(\d{6}|\d{6})$/.test(pincode) ||
               familyMember[0] == true
          ) {
               console.log('Error');
          } else {
               // console.log('Success');
               let userObj = {
                    firstName,
                    lastName,
                    dob,
                    email,
                    gender: selectedgender.value,
                    bloodGroup,
                    marriageStatus: selectedstatus.value,
                    mobileNo: +mobileNo,
                    password,
               };
               let address = { address1, address2, city, state, country, postalCode: +pincode };
               try {
                    console.log(userId.userId);
                    await userReg(userObj)
                         .then((res) => {
                              console.log(res);
                              userId.userId.id = res.id;
                              userAddress(res.id, address)
                                   .then((add) => {
                                        familyMembers.map((item, index) => {
                                             userFamily(add.userId, item)
                                                  .then((family) => {
                                                       console.log(family);
                                                  })
                                                  .catch((err) => {
                                                       console.log(err);
                                                  });
                                        });
                                        console.log(add);
                                   })
                                   .catch((err) => {
                                        console.log(err);
                                   });
                              console.log(res);
                              if (res.id) {
                                   toast.success('User Registered Successfully');
                              } else {
                                   toast.error('User Registration Failed');
                              }
                         })
                         .catch((err) => {
                              console.log(err);
                         });
               } catch (error) {
                    console.log(error);
               }
          }
     };
     const handleReset = () => {
          setFirstName('');
          setLastName('');
          setDob('');
          setEmail('');
          setSelectedgender('');
          setBloodGroup('');
          setSelectedstatus('');
          setMobileNo(null);
          setPassword('');
          setConfirmPassword('');
          setAddress1('');
          setAddress2('');
          setCountry('');
          setState('');
          setCity('');
          setPincode(null);
          setFamilyMembers([{ name: '', relationship: '', occupation: '', dob: '', adhaarNo: null, emergencyContact: null }]);
          setError(false);
     };
     const values = {
          familyMembers: familyMembers.map((item) => {
               return {
                    name: item.name,
                    relation: item.relationship,
                    occupation: item.occupation,
                    dob: item.dob,
                    adhaarno: +item.adhaarNo,
                    emergencycontact: +item.emergencyContact,
               };
          }),
     };
     return (
          <div style={{ paddingLeft: '1%', backgroundColor: textColor }}>
               <MDBox sx={{ paddingLeft: '5%' }}>
                    <MDBox mb={2}>
                         <MDTypography variant='h5' color='secondary'>
                              Personal Info
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
                                        title='First Name'
                                        type='text'
                                        value={firstName}
                                        setValue={setFirstName}
                                        width='300px'
                                   />
                                   {error.firstNameError ? (
                                        <p style={{ paddingLeft: '14px', color: 'red', fontSize: '14px' }}>{error.firstNameError}</p>
                                   ) : null}
                              </MDBox>
                              <MDBox>
                                   <CustomInput title='Last Name' type='text' value={lastName} setValue={setLastName} width='300px' />
                                   {error.lastNameError ? (
                                        <p style={{ paddingLeft: '14px', color: 'red', fontSize: '14px' }}>{error.lastNameError}</p>
                                   ) : null}
                              </MDBox>
                              <MDBox>
                                   <CustomInput title='Date of Birth' type='date' value={dob} setValue={setDob} width='300px' />
                                   {error.dobError ? (
                                        <p style={{ paddingLeft: '14px', color: 'red', fontSize: '14px' }}>{error.dobError}</p>
                                   ) : null}
                              </MDBox>
                              <MDBox>
                                   <CustomInput title='Email' type='email' value={email} setValue={setEmail} width='300px' />
                                   {error.emailError ? (
                                        <p style={{ paddingLeft: '14px', color: 'red', fontSize: '14px' }}>{error.emailError}</p>
                                   ) : null}
                              </MDBox>
                              <MDBox>
                                   <CustomSelect
                                        option={gender}
                                        placeholder='Select'
                                        selectedOptions={selectedgender}
                                        name='Gender'
                                        widthForSelect='100%'
                                        setSelectedOptions={setSelectedgender}
                                        isSearchable={true}
                                        isMulti={false}
                                        width='300px'
                                        required={true}
                                   />
                                   {error.genderError ? (
                                        <p style={{ paddingLeft: '14px', color: 'red', fontSize: '14px' }}>{error.genderError}</p>
                                   ) : null}
                              </MDBox>
                              <MDBox>
                                   <CustomSelect
                                        option={marriageStatus}
                                        placeholder='Select'
                                        selectedOptions={selectedstatus}
                                        name='MarriageStatus'
                                        widthForSelect='100%'
                                        setSelectedOptions={setSelectedstatus}
                                        isSearchable={true}
                                        isMulti={false}
                                        width='300px'
                                        required={true}
                                   />
                                   {error.maritalStatusError ? (
                                        <p style={{ paddingLeft: '14px', color: 'red', fontSize: '14px' }}>
                                             {error.maritalStatusError}
                                        </p>
                                   ) : null}
                              </MDBox>
                              <MDBox>
                                   <CustomInput
                                        title='Mobile Number'
                                        type='tel'
                                        value={mobileNo}
                                        setValue={setMobileNo}
                                        width='300px'
                                   />
                                   {error.mobileNoError ? (
                                        <p style={{ paddingLeft: '14px', color: 'red', fontSize: '14px' }}>{error.mobileNoError}</p>
                                   ) : null}
                              </MDBox>
                              <MDBox>
                                   <CustomInput
                                        title='Blood Group'
                                        type='text'
                                        value={bloodGroup}
                                        setValue={setBloodGroup}
                                        width='300px'
                                   />
                                   {error.bloodGroupError ? (
                                        <p style={{ paddingLeft: '14px', color: 'red', fontSize: '14px' }}>{error.bloodGroupError}</p>
                                   ) : null}
                              </MDBox>
                         </MDBox>
                    </MDBox>
                    <MDBox mb={1}>
                         <MDTypography mt={5} variant='h5' color='secondary'>
                              Personal Info
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
                                   <CustomInput title='Address' type='text' value={address1} setValue={setAddress1} width='300px' />
                                   {error.address1Error ? (
                                        <p style={{ paddingLeft: '14px', color: 'red', fontSize: '14px' }}>{error.address1Error}</p>
                                   ) : null}
                              </MDBox>
                              <MDBox>
                                   <CustomInput title='Address 2' type='text' value={address2} setValue={setAddress2} width='300px' />
                              </MDBox>

                              <MDBox>
                                   <CustomInput title='Country' type='text' value={country} setValue={setCountry} width='300px' />
                                   {error.countryError ? (
                                        <p style={{ paddingLeft: '14px', color: 'red', fontSize: '14px' }}>{error.countryError}</p>
                                   ) : null}
                              </MDBox>
                              <MDBox>
                                   <CustomInput title='State' type='text' value={state} setValue={setState} width='300px' />
                                   {error.stateError ? (
                                        <p style={{ paddingLeft: '14px', color: 'red', fontSize: '14px' }}>{error.stateError}</p>
                                   ) : null}
                              </MDBox>
                              <MDBox>
                                   <CustomInput title='City' type='text' value={city} setValue={setCity} width='300px' />
                                   {error.cityError ? (
                                        <p style={{ paddingLeft: '14px', color: 'red', fontSize: '14px' }}>{error.cityError}</p>
                                   ) : null}
                              </MDBox>

                              <MDBox>
                                   <CustomInput
                                        title='PostalCode'
                                        type='number'
                                        min='0'
                                        value={pincode}
                                        setValue={setPincode}
                                        width='300px'
                                   />
                                   {error.pincodeError ? (
                                        <p style={{ paddingLeft: '14px', color: 'red', fontSize: '14px' }}>{error.pincodeError}</p>
                                   ) : null}
                              </MDBox>
                         </MDBox>
                    </MDBox>
                    <MDBox mb={2} mt={2}>
                         <MDTypography variant='h5' color='secondary'>
                              Family Details
                              <Icon
                                   color='none'
                                   fontSize='large'
                                   sx={{ marginLeft: '3px', float: 'right', cursor: 'pointer' }}
                                   onClick={handleFamilyMemberAdd}>
                                   add
                              </Icon>
                         </MDTypography>
                    </MDBox>
                    <hr style={{ width: '100%' }} />
                    {familyMembers.map(
                         (familyMember, index) => (
                              console.log(index),
                              (
                                   <>
                                        <MDBox mb={2} mt={2}>
                                             {index < 1 ? (
                                                  <MDTypography variant='body1' color='black'>
                                                       Family Member {index + 1}
                                                  </MDTypography>
                                             ) : (
                                                  <MDTypography variant='body1' color='black'>
                                                       Family Member {index + 1}
                                                       <Icon
                                                            color='none'
                                                            fontSize='large'
                                                            sx={{ marginLeft: '3px', float: 'right', cursor: 'pointer' }}
                                                            onClick={handleFamilyMemberRemove}>
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
                                                                 Name
                                                            </MDTypography>
                                                            <input
                                                                 type='text'
                                                                 value={familyMember.name}
                                                                 name='name'
                                                                 onChange={(e) => handleFamilyMemberChange(e, index)}
                                                                 className='inp'
                                                                 style={{
                                                                      width: '70%',
                                                                      border: '1px solid #d2d2d2',
                                                                      outline: 'none',
                                                                      borderRadius: '5px',
                                                                      padding: '8px',
                                                                      margin: '5px',
                                                                 }}
                                                            />
                                                       </div>
                                                       {error.fNameError ? (
                                                            <p style={{ paddingLeft: '14px', color: 'red', fontSize: '14px' }}>
                                                                 {error.fNameError}
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
                                                                 Relationship
                                                            </MDTypography>
                                                            <input
                                                                 type='text'
                                                                 name='relationship'
                                                                 value={familyMember.relationship}
                                                                 onChange={(e) => handleFamilyMemberChange(e, index)}
                                                                 className='inp'
                                                                 style={{
                                                                      width: '70%',
                                                                      border: '1px solid #d2d2d2',
                                                                      outline: 'none',
                                                                      borderRadius: '5px',
                                                                      padding: '8px',
                                                                      margin: '5px',
                                                                 }}
                                                            />
                                                       </div>
                                                       {error.fRelationError ? (
                                                            <p style={{ paddingLeft: '14px', color: 'red', fontSize: '14px' }}>
                                                                 {error.fRelationError}
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
                                                                 Occupation
                                                            </MDTypography>
                                                            <input
                                                                 type='text'
                                                                 value={familyMember.occupation}
                                                                 onChange={(e) => handleFamilyMemberChange(e, index)}
                                                                 className='inp'
                                                                 style={{
                                                                      width: '70%',
                                                                      border: '1px solid #d2d2d2',
                                                                      outline: 'none',
                                                                      borderRadius: '5px',
                                                                      padding: '8px',
                                                                      margin: '5px',
                                                                 }}
                                                                 name='occupation'
                                                            />
                                                       </div>
                                                       {error.fOccupationError ? (
                                                            <p style={{ paddingLeft: '14px', color: 'red', fontSize: '14px' }}>
                                                                 {error.fOccupationError}
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
                                                                 Date Of Birth
                                                            </MDTypography>
                                                            <input
                                                                 type='date'
                                                                 name='dob'
                                                                 value={familyMember.dob}
                                                                 onChange={(e) => handleFamilyMemberChange(e, index)}
                                                                 className='inp'
                                                                 style={{
                                                                      width: '70%',
                                                                      border: '1px solid #d2d2d2',
                                                                      outline: 'none',
                                                                      borderRadius: '5px',
                                                                      padding: '8px',
                                                                      margin: '5px',
                                                                 }}
                                                            />
                                                       </div>
                                                       {error.fDobError ? (
                                                            <p style={{ paddingLeft: '14px', color: 'red', fontSize: '14px' }}>
                                                                 {error.fDobError}
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
                                                                 Aadhaar Number
                                                            </MDTypography>
                                                            <input
                                                                 type='number'
                                                                 name='adhaarNo'
                                                                 value={familyMember.adhaarNo}
                                                                 onChange={(e) => handleFamilyMemberChange(e, index)}
                                                                 className='inp'
                                                                 style={{
                                                                      width: '70%',
                                                                      border: '1px solid #d2d2d2',
                                                                      outline: 'none',
                                                                      borderRadius: '5px',
                                                                      padding: '8px',
                                                                      margin: '5px',
                                                                 }}
                                                            />
                                                       </div>
                                                       {error.fAdhaarnoError ? (
                                                            <p style={{ paddingLeft: '14px', color: 'red', fontSize: '14px' }}>
                                                                 {error.fAdhaarnoError}
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
                                                                 Emergency Contact No
                                                            </MDTypography>
                                                            <input
                                                                 type='number'
                                                                 name='emergencyContact'
                                                                 value={familyMember.emergencyContact}
                                                                 onChange={(e) => handleFamilyMemberChange(e, index)}
                                                                 className='inp'
                                                                 style={{
                                                                      width: '70%',
                                                                      border: '1px solid #d2d2d2',
                                                                      outline: 'none',
                                                                      borderRadius: '5px',
                                                                      padding: '8px',
                                                                      margin: '5px',
                                                                 }}
                                                            />
                                                       </div>
                                                       {error.fEmergencycontactError ? (
                                                            <p style={{ paddingLeft: '14px', color: 'red', fontSize: '14px' }}>
                                                                 {error.fEmergencycontactError}
                                                            </p>
                                                       ) : null}
                                                  </MDBox>
                                             </MDBox>
                                        </MDBox>
                                   </>
                              )
                         ),
                    )}
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
     );
};

export default GeneralDetails;
