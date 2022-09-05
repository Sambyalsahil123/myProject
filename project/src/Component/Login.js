import React from 'react'
import { Grid, Paper, Avatar, Typography, Link } from '@material-ui/core'
import LockIcon from '@material-ui/icons/Lock';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';

const Login = ({ handleChange }) => {
  const editGap = { margin: '8px 0' }
  const buttonStyle = { margin: '8px 0' }
  const paperStyle = { padding: 20, height: '73vh', width: 300, margin: '0 auto' }
  const avatarStyle = { backgroundColor: ' rgb(25 118 210)' }
  return (

    <Grid>
      <Paper elevaton={10} style={paperStyle}>
        <Grid align='center'>
          <Avatar style={avatarStyle}><LockIcon /></Avatar>
          <h1>Sign in</h1>
        </Grid>

        <TextField label="Username " placeholder="Enter Username" fullWidth required type="username" style={editGap} />

        <TextField label="Password " placeholder="Enter Password" fullWidth required type="password" />
        <FormControlLabel
          control={
            <Checkbox
              name='checkedB'
              color="primary"
            />
          }
          label="Remember me" />
        <Button variant="contained" type="submit" color="primary" fullWidth style={buttonStyle}>SIGN in </Button>
        <Typography color="initial">

          <Link href="#" underline="hover">
            Forgot password
          </Link>
        </Typography>

        <Typography color="initial">
          Do you have an account ?

          <Link href="#" onClick={() => handleChange("ebent", 1)} underline="hover">
            Sign up
          </Link>
        </Typography>

      </Paper>
    </Grid>


  )
}

export default Login
