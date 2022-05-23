import React , { useState } from 'react'
import {Container, Paper, Avatar, Typography, Grid, Button} from '@material-ui/core'
import useStyles from './styles'
import Input from './Input';
import  LockOpenOutlinedIcon  from '@material-ui/icons/LockOutlined';

const Auth = () => {
  const classes = useStyles();
  const isSignUp = true;
  const [showPassword, setShowPassword] = useState(false)
  const handleSubmit = () => {
    
  }
  const handleChange = () => {

  }

  const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword)

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
        </form>
      </Paper>
    </Container>
  )
}

export default Auth