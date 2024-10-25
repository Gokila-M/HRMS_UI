import MDBox from 'components/MDBox';
import { MDBTabs, MDBTabsContent, MDBTabsItem, MDBTabsLink, MDBTabsPane } from 'mdb-react-ui-kit';
import React, { useState } from 'react';
import { useMaterialUIController } from 'context';
import EducationDetails from './forms/EducationDetails';
import GeneralDetails from './forms/GeneralDetails';
import WorkDetails from './forms/WorkDetails';
import Documents from './Documents';
import DocumentDetails from './forms/DocumentDetails';
import EducationUpdated from './updateform/EducationUpdated';
const UserForm = () => {
     const [controller] = useMaterialUIController();
     const { miniSidenav, transparentSidenav, whiteSidenav, darkMode, sidenavColor } = controller;

//      let textColor = 'white';

//      if (transparentSidenav || (whiteSidenav && !darkMode)) {
//           textColor = 'dark';
//      } else if (darkMode) {
//           textColor = 'inherit';
//      }

//      // const [fillActive, setFillActive] = useState('generalInfo');

//      // const handleFillClick = (value) => {
//      //      if (value === fillActive) {
//      //           return;
//      //      }

//      //      setFillActive(value);
//      // };

     return (
          <>
               <MDBox mt={-4} mb={2} ml={7} mr={2}>
                    <MDBTabs justify className='mb-5' style={{width:"50%"}}>
                         <MDBTabsItem >
                              <MDBTabsLink
                                   onClick={() => handleFillClick('tab1')}
                                   active={fillActive === 'tab1'}
                                   style={{ fontSize: '1.3rem', fontWeight: 'normal'}}>
                                   General Info
                              </MDBTabsLink>
                         </MDBTabsItem>
                         <MDBTabsItem>
                              <MDBTabsLink
                                   onClick={() => handleFillClick('tab2')}
                                   active={fillActive === 'tab2'}
                                   style={{ fontSize: '1.3rem', fontWeight: 'normal'}}>
                                   Education Info
                              </MDBTabsLink>
                         </MDBTabsItem>
                         <MDBTabsItem>
                              <MDBTabsLink
                                   onClick={() => handleFillClick('tab3')}
                                   active={fillActive === 'tab3'}
                                   style={{ fontSize: '1.3rem', fontWeight: 'normal' }}>
                                   Work Info
                              </MDBTabsLink>
                         </MDBTabsItem>
                         <MDBTabsItem>
                              <MDBTabsLink
                                   onClick={() => handleFillClick('tab4')}
                                   active={fillActive === 'tab4'}
                                   style={{ fontSize: '1.3rem', fontWeight: 'normal' }}>
                                   Documents
                              </MDBTabsLink>
                         </MDBTabsItem>
                         {/* <MDBTabsItem>
                              <MDBTabsLink
                                   onClick={() => handleFillClick('tab5')}
                                   active={fillActive === 'tab5'}
                                   style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>
                                   Education Update
                              </MDBTabsLink>
                         </MDBTabsItem> */}
                    </MDBTabs>

                    <MDBTabsContent>
                       
                         <MDBTabsPane show={fillActive === 'tab1'}>
                              <GeneralDetails />
                         </MDBTabsPane>
                         <MDBTabsPane show={fillActive === 'tab2'}>
                              <EducationDetails />
                         </MDBTabsPane>
                         <MDBTabsPane show={fillActive === 'tab3'}>
                              <WorkDetails />
                         </MDBTabsPane>
                         <MDBTabsPane show={fillActive === 'tab4'}>
                              <DocumentDetails />
                         </MDBTabsPane>
                         
                    </MDBTabsContent>
               </MDBox>
          </>
     );
};

export default UserForm;
