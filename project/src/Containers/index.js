import React, { useState } from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Paper from '@mui/material/Paper';
import { Typography, Box } from '@material-ui/core';
import Login from '../Component/Login'
import Signup from '../Component/Signup'


const SignInOutContainer = () => {

    const [value, setVal] = useState(0)

    const handleChange = (event, newValue) => {
        setVal(newValue);
    };
    const paperStyle = { width: 320, margin: "0 auto" }

    function TabPanel(props) {

        const { children, value, index, ...other } = props
        return (

            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}>

                {value === index && (

                    <Box>

                        <Typography>
                            {children}
                        </Typography>
                    </Box>
                )}
            </div>
        )
    }
    return (

        <Paper elevation={20} style={paperStyle}>

            <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example">
                <Tab label="Sign In" />

                <Tab label="Sign Up" />

            </Tabs>

            <TabPanel value={value} index={0}>

                <Login handleChange={handleChange} />


            </TabPanel>

            <TabPanel value={value} index={1}>
                <Signup  handleChange={handleChange} />
            </TabPanel>
        </Paper>
    )
}

export default SignInOutContainer