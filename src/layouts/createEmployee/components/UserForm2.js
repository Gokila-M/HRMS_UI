
import { MDBTabs, MDBTabsContent, MDBTabsItem, MDBTabsLink, MDBTabsPane } from 'mdb-react-ui-kit';
import React, { useState } from 'react';
import { useMaterialUIController } from 'context';
import EducationUpdated from './updateform/EducationUpdated';
import { Card } from '@mui/material';
import UpdateGeneral from './updateform/UpdateGeneral';
import UpdateWork from './updateform/UpdateWork';
import DocumentUpdated from './updateform/UpdateDocument';

const UserForm2 = () => {
     const [controller] = useMaterialUIController();
     const { miniSidenav, transparentSidenav, whiteSidenav, darkMode, sidenavColor } = controller;

     let textColor = 'white';

     if (transparentSidenav || (whiteSidenav && !darkMode)) {
          textColor = 'dark';
     } else if (darkMode) {
          textColor = 'inherit';
     }

     const [fillActive1, setFillActive1] = useState('tab1');

     const handleFillClick = (value) => {
          if (value === fillActive1) {
               return;
          }

          setFillActive1(value);
     };

     return (
          <>
         <Card>
                    <MDBTabs justify className='mb-5' style={{width:"50%"}}>
                         <MDBTabsItem>
                              <MDBTabsLink
                                   onClick={() => handleFillClick('tab1')}
                                   active={fillActive1 === 'tab1'}
                                   style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>
                                   General Info
                              </MDBTabsLink>
                         </MDBTabsItem>
                         <MDBTabsItem>
                              <MDBTabsLink
                                   onClick={() => handleFillClick('tab2')}
                                   active={fillActive1 === 'tab2'}
                                   style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>
                                   Education Info
                              </MDBTabsLink>
                         </MDBTabsItem>
                         <MDBTabsItem>
                              <MDBTabsLink
                                   onClick={() => handleFillClick('tab3')}
                                   active={fillActive1 === 'tab3'}
                                   style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>
                                   Work Info
                              </MDBTabsLink>
                         </MDBTabsItem>
                         <MDBTabsItem>
                              <MDBTabsLink
                                   onClick={() => handleFillClick('tab4')}
                                   active={fillActive1 === 'tab4'}
                                   style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>
                                   Documents
                              </MDBTabsLink>
                         </MDBTabsItem>
                         
                    </MDBTabs>

                    <MDBTabsContent>
                       
                         <MDBTabsPane show={fillActive1 === 'tab1'}>
                              <UpdateGeneral/>
                         </MDBTabsPane>
                         <MDBTabsPane show={fillActive1 === 'tab2'}>
                              <EducationUpdated />
                         </MDBTabsPane>
                         <MDBTabsPane show={fillActive1 === 'tab3'}>
                              <UpdateWork/>
                         </MDBTabsPane>
                         <MDBTabsPane show={fillActive1 === 'tab4'}>
                              <DocumentUpdated/>
                         </MDBTabsPane> 
                         
                    </MDBTabsContent>
                    </Card>     
              
          </>
     );
};

export default UserForm2;
