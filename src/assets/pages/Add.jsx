import React, { useState } from 'react'
import { Box, Button, FormControl, InputLabel, MenuItem, Paper, private_createTypography, Select, TextField, Typography } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios";
import { toast } from 'react-toastify';
import { baseurl } from '../../api';

export default function Add() {
  const [formdata,setformdata]=useState({
    title:"",
    amount:"",
    category:"",
  })
  const [isloading,setisloading]=useState(false)
  
  const nav=useNavigate();
  const handlesubmit=async()=>{
    setisloading(true)
    try {
      const res=await 
      axios.post(`${baseurl}/api/expense/insert`,formdata)
      // console.log(res)
      if (res.data.success) {
         setTimeout(()=>{
        toast.success(res.data.message)
        },1000)
        setTimeout(()=>{ 
          nav("/")
        },2000)
      } else {
        setTimeout(()=>{
          toast.error(res.data.message)
        },1000)
      } 
    } catch (error) {
      console.log(error)
    }
    finally{
      setTimeout(()=>{
        setisloading(false)
        },2000)
    }
  }
    return (
    <div>
     <Box sx={{backgroundColor:"black"}} >
        <Box sx={{textAlign:'center',}}> 
            <Typography variant='h4'>ADD EXPENSIVE DETAIL</Typography>
        </Box>
        <Box sx={{p:4,display:'flex',justifyContent:'center',
            alignItems:'center', }}>
            <Paper sx={{width:"70%",p:3,backgroundColor:"pink"}}>
                <TextField 
                value={formdata.title}
                onChange={(e)=>setformdata({...formdata,title:e.target.value})}
                fullWidth label="Enter expense title" 
                placeholder='Enter expense title here' 
                sx={{mb:2,backgroundColor:"white"}}/>
                <TextField 
                value={formdata.amount}
                onChange={(e)=>setformdata({...formdata,amount:e.target.value})}
                fullWidth type='number' 
                label="Enter expense amount" 
                placeholder='Enter expense amount here' 
                sx={{mb:2,backgroundColor:"white"}}/>
                 <FormControl sx={{display:"flex"}} fullWidth>
        <InputLabel 
         id="select-category" >select expense category</InputLabel>
        <Select 
        onChange={(e)=>setformdata({...formdata,category:e.target.value})}
          labelId="select-category"
          id="demo-simple-select"
          // value={age}
          label="select expense category"
          value={formdata.category}
          // onChange={handleChange}
          sx={{mb:2,backgroundColor:"white"}}>
          <MenuItem value={"Transport"}>Transport</MenuItem>
          <MenuItem value={"Food"}>Food</MenuItem>
          <MenuItem value={"Other"}>Other</MenuItem>
        </Select>
      </FormControl>
                <Button  onClick={handlesubmit} sx={{mb:1}} color="success" 
                loading={isloading}
                variant="contained"  fullWidth>SUBMIT</Button>
                <Button component={Link} to={"/"} sx={{mb:1,backgroundColor:"white"}} color="info" 
                variant="outlined"  fullWidth>VIEW ENTRIES</Button>
                
            </Paper>
        </Box>
     </Box>
    </div>
  )
}
