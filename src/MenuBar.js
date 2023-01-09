import { ShoppingBag } from '@mui/icons-material';
import { AppBar, Badge, IconButton, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import { useSelector } from 'react-redux';

import {useNavigate} from 'react-router-dom'

const MenuBar = () => {
  const {amount}=useSelector((state)=>state.cart);


    const navigate=useNavigate();
    return ( <>
    
    <AppBar position='static' p={2} sx={{backgroundColor:'grey'}} >
    <Toolbar sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
     <Box onClick={()=>{navigate('/')}}>  <Typography variant='h6'> Redux Cart App </Typography> </Box>
   <IconButton onClick={()=>{
     navigate('/cart')
   }}  > <Badge badgeContent={amount} color='primary' sx={{marginBottom:'-5px'}} > <ShoppingBag sx={{height:'50px',color:'white',marginTop:'5px'}}/>  </Badge> </IconButton>
    </Toolbar>
        
    </AppBar>
    
    </> );

    
}
 
export default MenuBar;