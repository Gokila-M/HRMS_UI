import React, { useContext, useEffect, useState } from 'react';
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout';
import MDBox from 'components/MDBox';
import { Card, Grid, Icon } from '@mui/material';
import Icon1 from '@mui/icons-material/ArrowBackIos';
import MDTypography from 'components/MDTypography';
import DashboardNavbar from 'examples/Navbars/DashboardNavbar';
import MDButton from 'components/MDButton';
import CustomButton from 'components/CustomButton';
import { useMaterialUIController } from 'context';
import EnhancedTable from 'components/CustomTable';
import UserProfile from './components/UserProfile';
import UserForm from './components/UserForm';
import { getAllUsers } from 'utility/apiService';
import CustomInput from 'components/CustomInuput';
import GeneralDetails from './components/forms/GeneralDetails';
import EducationDetails from './components/forms/EducationDetails';
import WorkDetails from './components/forms/WorkDetails';
import DocumentDetails from './components/forms/DocumentDetails';
import { getNoOwner } from 'utility/apiService';
import Updateform from './components/updateform';
import UserIdContext from 'context/userIdContext';
const CreateEmployee = () => {
     const [controller] = useMaterialUIController();
     const { sidenavColor } = controller;
     const [open, setOpen] = useState(false);
     // const [data, setData] = useState();
     // const [action, setAction] = useState('generalInfo');
     const [data, setData] = useState({
          columns: [
               {
                    label: 'SI.No',
                    field: 'siNo',
                    width: 270,
               },
               {
                    label: 'Name',
                    field: 'name',
                    width: 170,
               },
               {
                    label: 'Date of Birth',
                    field: 'dob',
                    width: 150,
               },
               {
                    label: 'Phone Number',
                    field: 'phoneNumber',
                    width: 150,
               },
               {
                    label: 'Email',
                    field: 'email',
                    width: 150,
               },
               {
                    label: 'Action',
                    field: 'action',
                    width: 150,
               },
          ],
     });
     const [action, setAction] = useState('generalInfo');

     const [update, seUpdate] = useState(false);
     let userId = useContext(UserIdContext);
     const userData = async () => {
          let row = [];
          const response = await getAllUsers();
          // console.log(response.data);
          response.data.map((item, index) => {
               row.push({
                    siNo: index + 1,
                    name: item.firstName + ' ' + item.lastName,
                    dob: item.dob,
                    phoneNumber: item.mobileNo,
                    email: item.email,
                    action: (
                         <MDBox display='flex' flexDirection='row' sx={{paddingLeft:"20%"}}>
                              <MDBox width='28px' height='26px' borderRadius='50%' bgColor={sidenavColor} mr={2}>
                                   <Icon
                                        style={{ cursor: 'pointer', marginLeft: '6px', color: '#fff', marginTop: '4px' }}
                                        onClick={() => {
                                             seUpdate(true);
                                             userId.userId.id = item._id;
                                        }}>
                                        edit
                                   </Icon>
                              </MDBox>
                              <UserProfile user={item} />
                         </MDBox>
                    ),
               });
          });
          setData({ ...data, rows: row });
     };
     useEffect(() => {
          userData();
     }, []);

     return (
          <DashboardLayout>
               <DashboardNavbar />
               <MDBox mb={3} />
               <div style={{ minHeight: 'calc(100vh - 190px)', width: '100%', backgroundColor: 'white' }}>
                    {update == false ? (
                         open == false ? (
                              <>
                                   <MDBox
                                        fullwidth='true'
                                        mt={5}
                                        sx={{ display: 'flex', flexDirection: 'row', margin: '15px', justifyContent: 'space-between' }}>
                                        <MDTypography variant='h4' fontWeight='medium' color='dark' mt={1} sx={{ padding: 2 }}>
                                             Employee
                                        </MDTypography>
                                        <MDButton
                                             variant='contained'
                                             aria-label='fingerprint'
                                             onClick={() => setOpen(!open)}
                                             sx={{ display: 'flex', margin: '15px', fontSize: '18px' }}
                                             color={sidenavColor}>
                                             Create
                                        </MDButton>
                                   </MDBox>
                                   <MDBox sx={{ display: 'flex', justifyContent: 'center' }}>
                                        <MDBox sx={{ width: '95%' }}>
                                             <EnhancedTable data={data} />
                                        </MDBox>
                                   </MDBox>
                              </>
                         ) : (
                              <MDBox>
                                   <Card>
                                        <MDBox sx={{ display: 'flex', flexDirection: 'row', overflow: 'auto', alignItems: 'center' }}>
                                             <MDBox
                                                  mt={'18px'}
                                                  sx={{
                                                       alignItems: 'flex-start',
                                                       borderRadius: '100%',
                                                       margin: '5px',
                                                       boxShadow: '0 2px 8px 0 rgb(99 99 99 / 20%)',
                                                       cursor: 'pointer',
                                                       display: 'flex',
                                                       height: '40px',
                                                       justifyContent: 'center',
                                                       marginRight: '10px',
                                                       width: '40px',
                                                       flexDirection: 'row',
                                                  }}
                                                  onClick={() => setOpen(!open)}>
                                                  <Icon1
                                                       style={{ paddingLeft: '6px', paddingTop: '6px', marginTop: '6px' }}
                                                       fontSize='medium'>
                                                       ArrowBackIosIcon
                                                  </Icon1>
                                             </MDBox>
                                             {/* <UserForm /> */}
                                             <div className='adminContainer'>
                                                  <div className='adminWrapper'>
                                                       <div className='adminButton'>
                                                            <button
                                                                 {...(action === 'generalInfo' && {
                                                                      style: { borderBottom: '2px solid #22A3F1' },
                                                                 })}
                                                                 className='AdminAddUser'
                                                                 id='AdminAddUser'
                                                                 value='generalInfo'
                                                                 onClick={(e) => setAction(e.target.value)}>
                                                                 General Info
                                                            </button>
                                                            <button
                                                                 {...(action === 'educationInfo' && {
                                                                      style: { borderBottom: '2px solid #22A3F1' },
                                                                 })}
                                                                 className='AdminAddPeriod'
                                                                 value='educationInfo'
                                                                 onClick={(e) => setAction(e.target.value)}>
                                                                 Education Info
                                                            </button>
                                                            <button
                                                                 {...(action === 'workInfo' && {
                                                                      style: { borderBottom: '2px solid #22A3F1' },
                                                                 })}
                                                                 className='AdminGetAll'
                                                                 value='workInfo'
                                                                 onClick={(e) => setAction(e.target.value)}>
                                                                 Work Info
                                                            </button>
                                                            <button
                                                                 {...(action === 'document' && {
                                                                      style: { borderBottom: '2px solid #22A3F1' },
                                                                 })}
                                                                 className='AdminGetAll'
                                                                 value='document'
                                                                 onClick={(e) => setAction(e.target.value)}>
                                                                 Documents
                                                            </button>
                                                       </div>
                                                  </div>
                                             </div>
                                        </MDBox>
                                        <div className='adminAccess' style={{ minHeight: 'calc(100vh - 250px)' }}>
                                             {action === 'generalInfo' ? <GeneralDetails /> : null}
                                             {action === 'educationInfo' ? <EducationDetails /> : null}
                                             {action === 'workInfo' ? <WorkDetails /> : null}
                                             {action === 'document' ? <DocumentDetails /> : null}
                                        </div>
                                   </Card>
                              </MDBox>
                         )
                    ) : (
                         <Updateform />
                    )}
               </div>
          </DashboardLayout>
     );
};

export default CreateEmployee;
