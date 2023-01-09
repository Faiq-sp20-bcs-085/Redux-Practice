import React from 'react';


import {useState,useEffect} from 'react'
import { Box, Button, Card, CardContent, CardMedia, Grid, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';

import { useSelector,useDispatch } from 'react-redux';
import { calculatetotal,addItem, clearCart, removeItem } from './features/cartSlice';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
const Cart = () => {

    
  

    const {cartItems,total}=useSelector((state)=>state.cart);
const dispatch=useDispatch();

useEffect(()=>{
    dispatch((calculatetotal()));
  },[cartItems])




if(cartItems.length===0){
    return(
        <>
        <Typography variant='body2'> Cart is Empty.</Typography>
        </>
    )
}

    return (<>

    <Box mt={2} sx={{display:'flex',justifyContent:'center'}}>
     <Typography> Your Shopping List Cart: </Typography>
     
    </Box>

    <hr />
    
<TableContainer>

<Table sx={{minWidth:500}}>
    <TableHead>

<TableRow>
    <TableCell sx={{color:'grey'}}> Product Details </TableCell>
    <TableCell sx={{color:'grey'}}> Quantity </TableCell>
    <TableCell sx={{color:'grey'}} > Price</TableCell>
    
</TableRow>

    </TableHead>
<TableBody>
 
 {cartItems.map((item,index)=>{
    return(
        <>
       <TableRow>
       <TableCell>
        <Box gap={2} sx={{display:'flex',alignItems:'center'}}> 
        <img src={`${item.image}`} alt="" height={'100'} />
            <Box>
            <Typography variant='body' > {item.title.substr(0,20)} </Typography>
            <Typography variant='body2' > {item.description.substr(0,20)} </Typography>
            
            <Typography variant='h6'> ${item.price} </Typography>
            </Box>
            </Box>
        </TableCell>
        <TableCell>
            <Box sx={{display:'flex',alignItems:'center'}}>
            <IconButton onClick={()=>{
                if(item.qty===0){
                  alert('Its quanity cannot be less than 0!');
                }
                else{
                 dispatch(removeItem(item.id))
                }
            }}> <RemoveIcon/> </IconButton>
            <Box sx={{height:'20px',border:2,width:'20px'}}>
                <Box sx={{display:'flex',justifyContent:'center'}}>
                    <Typography> {item.qty} </Typography>
                 
                </Box>
            </Box>
            <IconButton onClick={()=>{
                dispatch(addItem(item.id))
            }}> <AddIcon/> </IconButton>
            </Box>


        </TableCell>
        <TableCell>
            <Typography variant='h6'> ${item.price} </Typography>
        </TableCell>
        

       </TableRow>

      

        </>
    )
 })}

</TableBody>
</Table>


</TableContainer>
 
<hr />
<Box mt={2}>
<Button color='primary' variant='contained' onClick={()=>{
    dispatch(clearCart())
}} > Clear Cart </Button>
<Box  sx={{display:'flex',justifyContent:'center'}}>
    <Typography variant='h6'> SubTotal: {total.toFixed(1)}  </Typography>

    </Box>

</Box>
    

    
    </>);
}
 
export default Cart;