import React from 'react'
import {TextField,InputAdornment,Grid,IconButton} from '@material-ui/core'
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';


 const Input = ({name,label,handleChange,half,autoFocus,type,handleShowPassword}) => {


    return (

       <Grid item xs= {12} sm = {half?6:12}>
         <TextField 
            name = {name}
            onChange = {handleChange}
            variant = "outlined"
            fullWidth
            required
            label = {label}
            autoFocus = {autoFocus}
            type= {type}
            InputProps = {name === 'password' && {

                endAdornment:(

                    <InputAdornment position = "end">
                      <IconButton onClick = {handleShowPassword}>
                      {type ===  'password'?<VisibilityIcon/>:<VisibilityOffIcon/>}
                      </IconButton>
                    </InputAdornment>
                )
                
            }}
         />
       </Grid>
    )
}
export default Input;