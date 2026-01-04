import React, { useEffect } from 'react'
import { Box, Typography } from '@mui/material'
import ExpenseTable from '../../Components/Table'
import Floatingaddbutton from '../../Components/Floatingaddbutton'
import { useState } from 'react'
import axios from 'axios'

export default function View() {
  const [allexp,setallexp]=useState([])
  const fetchallexpenses=async()=>{
    try {
      const res=await axios.get(`http://localhost:7777/api/expense/getall`);
      // console.log(res.data)
      if (res.data.success) {
        setallexp(res.data.expenses)
      }   
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{fetchallexpenses();},[])
  // console.log(allexp)
  return (
    <Box>
        <Box sx={{textAlign:'center'}}>
            <Typography variant='h4'>EXPENSE LIST </Typography>
        </Box>
        <Box sx={{p:2}}>
<ExpenseTable  allexp={allexp}
fetchallexpenses={fetchallexpenses}/>
        </Box>
        <Floatingaddbutton/>
    </Box>
  )
}
