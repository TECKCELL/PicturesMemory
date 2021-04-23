import React,{useState} from 'react'
import {Avatar,Button,Paper,Grid,Typography,Container} from '@material-ui/core'
import Input from './Input'

import useStyles from './style'

const Auth = () => {

    const classes = useStyles();

    const [showpassword,SetShowPassword] = useState(false);
    const [isSignedUp,SetsignUp] = useState(false);

    

    const switchMode = () =>{

        SetsignUp((prevsignUp)=>!prevsignUp)
        handleShowPassword(false)
    }
    const handleSubmit = ()=> {

    }

    const handleChange = () =>{

    }
     const handleShowPassword = () =>   SetShowPassword((prevShowedPassword)=>!prevShowedPassword)
       
     

    return (
        <div>
            <Container component="main" maxWidth="xs">
                <Paper className ={classes.paper} elevation = {3}>
                    <Avatar className = {classes.avatar}>
                    </Avatar>

                    <Typography variant="h5">{isSignedUp ? 'Sign up':'Sign in'}</Typography>

                </Paper>

                <form className={classes.form} onSubmit = {handleSubmit}>
                    <Grid container spacing = {2}>
                        {

                            isSignedUp && (

                                <>        
                                <Input name = "Firstname" label = "First name" handleChange={handleChange} autoFocus half/>
                                <Input name = "Lastname" label = "Last name" handleChange={handleChange} autoFocus half/>   
                                </>
                            )
                        }
                        <Input name = "email" label = "Email address" handleChange = {handleChange} type = "email" />
                        <Input name = "password" label = "password"   handleChange = {handleChange} type = {showpassword? "text" : "password"} handleShowPassword = {handleShowPassword} />
                        {isSignedUp && <Input name="confirmPassword" label="repeat Password" handleChange = {handleChange} type = "password" />}

                    </Grid>

                    <Button type = "Submit" fullWidth variant="contained" color = "primary" className = {classes.submit} >
                        {
                            isSignedUp?'Sign Up' : 'Sign in'
                        }
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                           <Button onClick= {switchMode} >
                              {isSignedUp?"Already have an account ? Sign in":"don't have an account ? Sign up"}
                           </Button>
                        </Grid>
                    </Grid>

                </form>
            </Container>
        </div>
    )
}

export default Auth
