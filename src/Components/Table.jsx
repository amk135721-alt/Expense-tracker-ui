import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import moment from "moment"
import { Button } from '@mui/material';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { baseurl } from '../api';
 

export default function ExpenseTable({allexp,fetchallexpenses}) {
  const handledelete=async(expenseid)=>{
    try {
      const res=await axios.delete(`${baseurl}/api/expense/delete/${expenseid}`)
      // console.log(res.data)
      if (res.data.success) {

        toast.success(res.data.message)
        fetchallexpenses()
        
      } else {
        toast.error(res.data.success)
        
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 ,backgroundColor:""}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>SL.NO</TableCell>
            <TableCell >TITLE</TableCell>
            <TableCell >CATEGORY</TableCell>
            <TableCell >AMOUNT</TableCell>
            <TableCell >SPENT ON </TableCell>
            <TableCell >ACTIONS </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allexp?.length==0 ? (<TableRow>
            <TableCell colSpan={6} align='center'>------ NO DATA FOUND ------</TableCell>
          </TableRow>)
          :allexp.map((row,index) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {index +1}
              </TableCell>
              <TableCell >{row.title}</TableCell>
              <TableCell >{row.category}</TableCell>
              <TableCell >{row.amount}</TableCell>
              <TableCell >{moment(row.createdAt).format("DD-MM-YYYY ::hh-mm")}</TableCell>
              <TableCell><Button component={Link} to={`/update/${row._id}`}
               color="success"
               variant='contained'>EDIT </Button>
                   <Button onClick={()=>{handledelete(row?._id)}} 
                    variant='contained' 
                   color='error'>DELETE </Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
