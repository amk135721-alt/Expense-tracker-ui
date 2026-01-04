import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { Tooltip } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Floatingaddbutton() {
const navigate =useNavigate();
    
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Tooltip title="ADD NEW ENTRY" arrow>
         <Fab onClick={()=>navigate("/add")} sx={{position:"absolute",buttom:16,right:16}} color="secondary"
       aria-label="add">
        <AddIcon />
      </Fab>
      </Tooltip>
    </Box>
  );
}
