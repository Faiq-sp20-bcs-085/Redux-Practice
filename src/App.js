import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import { Button, Grid, IconButton, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Routes,Route} from 'react-router-dom';
import MenuBar from './MenuBar';
import Home from './Home';
import Cart from './Cart';
import Textfield from './Textfield';


function App() {

return(
  <>

<MenuBar/>
 
 <Routes>

<Route path='/' element={<Home/>}   />
<Route path='/cart' element={<Cart/>}/>
<Route path ='/text' element={<Textfield/>}/>
 </Routes>


</>
)

    
}

export default App;
