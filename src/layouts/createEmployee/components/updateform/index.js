import MDBox from 'components/MDBox';
import { MDBTabs, MDBTabsContent, MDBTabsItem, MDBTabsLink, MDBTabsPane } from 'mdb-react-ui-kit';
import React, { useContext, useState } from 'react';
import { useMaterialUIController } from 'context';
import UpdateEducation from './EducationUpdated';
import UpdateGeneral from './UpdateGeneral';
import UpdateWork from './UpdateWork';
import UpdateDocument from './UpdateDocument';
import Icon1 from '@mui/icons-material/ArrowBackIos';
import UserIdContext from 'context/userIdContext';
import EducationDetails from '../forms/EducationDetails';
import WorkDetails from '../forms/WorkDetails';
import DocumentDetails from '../forms/DocumentDetails';
import { Card } from 'react-bootstrap';
import UpdateWorkDetails from './UpdateWork';
import UpdateDocumentDetails from './UpdateDocument';
const Updateform = () => {

     const [controller] = useMaterialUIController();
     const { miniSidenav, transparentSidenav, whiteSidenav, darkMode, sidenavColor } = controller;

     let textColor = 'white';
     let userId = useContext(UserIdContext);
     console.log(userId);
     if (transparentSidenav || (whiteSidenav && !darkMode)) {
          textColor = 'dark';
     } else if (darkMode) {
          textColor = 'inherit';
     }

     const [fillActive, setFillActive] = useState('tab1');

     const handleFillClick = (value) => {
          if (value === fillActive) {
               return;
          }

          setFillActive(value);
     };
     const [action, setAction] = useState('generalInfo');
     return (
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
                                                  onClick={() => window.history.back()}>
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
                                             {action === 'generalInfo' ? <UpdateGeneral /> : null}
                                             {action === 'educationInfo' ? <UpdateEducation /> : null}
                                             {action === 'workInfo' ? <UpdateWorkDetails /> : null}
                                             {action === 'document' ? <UpdateDocumentDetails /> : null}
                                        </div>
                                   </Card>
                              </MDBox>
     );
};

export default Updateform;
