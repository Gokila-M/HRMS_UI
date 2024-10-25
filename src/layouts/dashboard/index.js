/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from '@mui/material/Grid';

// Material Dashboard 2 React components
import MDBox from 'components/MDBox';
import { useState } from 'react';
// Material Dashboard 2 React example components
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout';
import DashboardNavbar from 'examples/Navbars/DashboardNavbar';
import Footer from 'examples/Footer';
import ReportsBarChart from 'examples/Charts/BarCharts/ReportsBarChart';
import ReportsLineChart from 'examples/Charts/LineCharts/ReportsLineChart';
import ComplexStatisticsCard from 'examples/Cards/StatisticsCards/ComplexStatisticsCard';

// Data
import reportsBarChartData from 'layouts/dashboard/data/reportsBarChartData';
import reportsLineChartData from 'layouts/dashboard/data/reportsLineChartData';

// Dashboard components
import Projects from 'layouts/dashboard/components/Projects';
import OrdersOverview from 'layouts/dashboard/components/OrdersOverview';
import CustomButton from 'components/CustomButton';
import CustomSelect from 'components/CustomSelect';
import CustomInput from 'components/CustomInuput';
import MDInput from 'components/MDInput';
import MDButton from 'components/MDButton';
import { useMaterialUIController } from 'context';

function Dashboard() {
     const [controller] = useMaterialUIController();
     const { sidenavColor } = controller;
     console.log(sidenavColor);
     const { sales, tasks } = reportsLineChartData;
     const [selectedOptions, setSelectedOptions] = useState();
     const [email, setEmail] = useState('');
     const options = [
          { value: 'red', label: 'Red' },
          { value: 'green', label: 'Green' },
          { value: 'yellow', label: 'Yellow' },
          { value: 'blue', label: 'Blue' },
          { value: 'white', label: 'White' },
     ];
     console.log(email);
     return (
          <DashboardLayout>
               {/* <DashboardNavbar />
               <CustomButton type='button' name='Mass' width='300px' onClick={() => alert('hyusgfui')} />
               <CustomSelect
                    option={options}
                    placeholder='Select'
                    selectedOptions={selectedOptions}
                    name='Select the color'
                    setSelectedOptions={setSelectedOptions}
                    isSearchable={true}
                    isMulti={false}
                    width='220px'
               /> */}
               {/* <MDInput mt={10 }  type="password" label="Enter the Name" variant="outlined"  onChange={(e)=>setEmail(e.target.value)}  /> */}
               {/* <Footer /> */}

               {/* <MDBox mb={2}>
        <MDInput type="text" label="Name" variant="outlined" />
      </MDBox>
      <MDBox mb={2}  sx={{
        width: 300,
        padding:"10px",
        
      }}>
        <MDInput type="text" label="Name" variant="outlined" fullwidth="true" />
      </MDBox> */}
               {/* <MDBox mt={4} mb={1}>
              <MDButton variant="contained" aria-label="fingerprint"  color={sidenavColor} fullwidth="true">
                sign in
              </MDButton>
            </MDBox>
<CustomInput title="Enter the email"  type='text' value={email} setValue={setEmail} width="220px" /> */}
    {/* <Documents/> */}
    </DashboardLayout>
  );
}

export default Dashboard;
