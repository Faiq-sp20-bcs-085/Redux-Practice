import { TextField, Typography } from '@mui/material';
import React from 'react'

import { useSelector,useDispatch } from 'react-redux';
import { enterData } from './features/textfieldSlice';
const Textfield = () => {

    const {text}=useSelector((state)=>state.Text)

 
    const dispatch=useDispatch();


    return ( <>
    
    <TextField 
    placeholder='Enter TextField data'
   value={text}
  onChange={(e)=>{
    dispatch(enterData(e.target.value))
  }}
    />
    <Typography> {text} </Typography>
    </> );
}
 
export default Textfield;