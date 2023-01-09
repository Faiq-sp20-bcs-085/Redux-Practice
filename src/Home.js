import { Box, Button, Container, Grid, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { AddToCart } from './features/cartSlice';
const Home = () => {
    let [products,setProducts]=useState([]);

    const dispatch=useDispatch();


useEffect(()=>{
  axios.get('https://fakestoreapi.com/products').then((res)=>{
    setProducts(res.data);
  }).catch((e)=>{
    console.log(e);
  })
},[])



if(products.length===0){
    return(
        <>
        <Typography> Products still loading... </Typography>
        </>
    )
}

return(
  <>
  
<Container>
 <Box sx={{display:'flex',justifyContent:'center'}}>
  <Typography variant='h4'> List of All the Products </Typography>
  </Box>
 <Grid container gap={2}  >
{products.map((product,index)=>{
  return(

    <>
    
     
      
      <Grid item lg={3} key={product.id} >
      <Box sx={{border:2,display:'flex',alignItems:'center'}}>
        <img src={`${product.image}`} alt="" style={{height:'120px',width:'100px'}} />
        <Box>
          <Typography variant='body2'> {product.title.concat(0,10)} </Typography>
             <Typography> ${product.price}  </Typography>
             <Button variant='contained' color='secondary'  onClick={()=>{
              dispatch(AddToCart(product))
             }} > Add to Cart </Button>
        </Box>
         </Box>
        </Grid>

     
    
    </>
  )
})}

 </Grid>


</Container>

    </>
  );
}
 
export default Home;