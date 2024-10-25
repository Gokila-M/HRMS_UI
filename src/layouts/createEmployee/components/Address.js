import { Divider, Grid } from 'antd'
import MDBox from 'components/MDBox'
import MDTypography from 'components/MDTypography'
import { useMaterialUIController } from 'context'
import React from 'react'

const Address = () => {
    const [controller] = useMaterialUIController();
    const { miniSidenav, transparentSidenav, whiteSidenav, darkMode, sidenavColor } = controller;

    let textColor = "inherit";
     
     if (transparentSidenav || (whiteSidenav && !darkMode)) {
        textColor = "dark";
    } else if ( darkMode) {
        textColor = "inherit";
    }

    return (
        <>
            <MDBox display='flex' flexDirection='column' alignItems='center' p={2}>
                {/* <Grid container spacing={3}>
                        <Grid item xs={12} md={6}> */}
                            <MDBox mb={2}>
                                <MDTypography variant='body2' color={textColor}>
                                    Address :&nbsp;&nbsp;<b>e4gtrfnjdkeofjdpwoqsmkldpo20-3skdpwq2i093sjkdpoaw0qsfjkldpoawq0-3frjksld[psoeqwriegtjfklsdpe20o34irtjoegkfldd[peorietjogfkl;dpwoerti;flsdrgtjiof]]  </b>
                                </MDTypography>
                            </MDBox>
                        {/* </Grid> */}
                {/* </Grid> */}
                
            </MDBox>
            <Divider />
        </>
    )
}

export default Address