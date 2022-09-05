import React from 'react'
import { Grid, Paper, Avatar } from '@material-ui/core'
import { Typography } from '@mui/material'
import AddCircleOutlineSharpIcon from '@mui/icons-material/AddCircleOutlineSharp';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';
import { useuseFormik } from 'useFormik';
const Signup = () => {

    const avatarStyle = { backgroundColor: "rgb(25 118 210)" };
    const paperStyle = { padding: 20, width: 300, margin: "0 auto" };
    const editGap = { margin: '8px 0' }
    return (
        <Grid>
            <Paper style={paperStyle}>
                <Grid align="center">
                    <Avatar style={avatarStyle}>
                        <AddCircleOutlineSharpIcon />
                    </Avatar>
                    <h2>Sign up</h2>
                    <Typography variant="caption">Please fill this form to create an account !</Typography>


                </Grid>

                <useFormik>
                    {(props) => <Form>


                        <TextField fullWidth label="Name" style={editGap} placeholder="Enter Your Name" />
                        <TextField fullWidth label="Email" style={editGap} placeholder="Enter Your Email" />


                        <FormControl>
                            <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                            <RadioGroup aria-labelledby="demo-radio-buttons-group-label"
                                name="radio-buttons-group" style={{ display: "initial" }}>
                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                            </RadioGroup>
                        </FormControl>

                        <TextField fullWidth label="Phone Number" style={editGap} placeholder="Enter Your Phone Number" />
                        <TextField fullWidth label="Password" type='password' style={editGap} placeholder="Enter Your Password" />
                        <TextField fullWidth label=" Confirm Password" type='password' style={editGap} placeholder="Confirm Password" />

                        <FormControlLabel
                            control={<Checkbox name="checkedA" />}
                            label="I accept the terms and conditions" />


                        <Button type='submit' variant='contained' color='primary'>Sign up</Button>


                    </Form>}

                </useFormik>
            </Paper>

        </Grid>
    )
}

export default Signup;
