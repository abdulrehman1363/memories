import React , { useState } from 'react'
import {Container, Paper, Avatar, Typography, Grid, Button} from '@material-ui/core'
//import GoogleLogin from 'react-google-login';
import { GoogleLogin } from '@react-oauth/google';
import useStyles from './styles'
import Input from './Input';
import  LockOpenOutlinedIcon  from '@material-ui/icons/LockOutlined';
import jwt_decode from "jwt-decode";

const Auth = () => {
  const classes = useStyles();
  const [isSignUp,setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false)
  const handleSubmit = () => {
    
  }
  const handleChange = () => {

  }
  const switchMode = () =>{
    setIsSignUp((prevIsSignUp) => !prevIsSignUp);
    handleShowPassword(false);
  }

  const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword)
  const onSuccess = async (res) => { 
    let userObject = jwt_decode(res?.credential);
    console.log(userObject)
  }
  const onFailure = (error) => { 
    console.log(error);
    console.log('unsuccessfull')
  }

  return (
    <Container component='main' maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOpenOutlinedIcon />
        </Avatar> 
        <Typography component='h1' variant='h5'>{isSignUp ? 'Sign Up' : 'Sign In'}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {
              isSignUp && (
                <>
                <Input name='firstName' label="First Name" handleChange={handleChange} autoFocus half  />
                <Input name='lastName' label="Last Name" handleChange={handleChange}  half  />
                </>
              ) 
            }
            <Input name='email' label="Email Address" type='email' handleChange={handleChange}   />
            <Input name='password' label="Password" handleChange={handleChange}  type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
            {
              isSignUp && <Input name='password' label="Repeat Password" handleChange={handleChange}  type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
            }
          </Grid>
          <Button type='submit' variant='contained' fullWidth color='primary' className={classes.submit}>
            {isSignUp ? 'Sign Up ' : 'Sign In'}
          </Button>
          <GoogleLogin 
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy="single_host_origin"
            width='366px'
          />
          <Grid container justifyContent='flex-end'>
            <Grid item>
              <Button onClick={switchMode}>{isSignUp ? 'Already Have an Account ? Sign In' : 'Don\'t Have Account ? Sign Up' }</Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  )
}

export default Auth