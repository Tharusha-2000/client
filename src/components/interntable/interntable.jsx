import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from '../../config';

import {
  Button,
  Dialog,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Radio,
  RadioGroup,
  FormControlLabel,
  Paper,
  Box,
  Typography,
  Grid,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,

} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { styled } from '@mui/material/styles';
import InputBase from "@mui/material/InputBase";
import CloseIcon from "@mui/icons-material/Close";
import Divider from "@mui/material/Divider";
import Adduser from "../adduser/Adduser";
import { useNavigate } from "react-router-dom";
import Switch from '@mui/material/Switch';
import Interndetails from "../interntable/intern";

function internTable({ rows }) {
  //const [DialogIsOpen, setDialogIsOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState("");
  const [data, setData] = useState([]);
  
  const [filteredData, setFilteredData] = useState([]);
  const navigate = useNavigate();
  const [isComplete, setIsComplete] = useState(false);
  {/* get details in database */}
  const token = localStorage.getItem('token');
 
 
  useEffect(() => {
    axios
      .get(`${BASE_URL}interns`,{
        headers: {
        Authorization: `Bearer ${token}`,
    },
  })

      .then((result) => {
        console.log(result.data.interns); 
        setFilteredData(result.data.interns);
        setData(result.data.interns);
        if (result.data.interns.interviewScore) {
          setIsComplete(true);
        }
      })
      .catch((err) => console.log(err));
  }, []);


   {/* handel complete notcomplete profile button*/}

  const Android12Switch = styled(Switch)(({ theme }) => ({
    padding: 8,
    '& .MuiSwitch-track': {
      borderRadius: 22 / 2,
      '&::before, &::after': {
        content: '""',
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        width: 16,
        height: 16,
      },
      '&::before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
          theme.palette.getContrastText(theme.palette.primary.main),
        )}" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`,
        left: 12,
      },
      '&::after': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
          theme.palette.getContrastText(theme.palette.primary.main),
        )}" d="M19,13H5V11H19V13Z" /></svg>')`,
        right: 12,
      },
    },
    '& .MuiSwitch-thumb': {
      boxShadow: 'none',
      width: 16,
      height: 16,
      margin: 2,
    },
  }));



// creating filter function
const Filter = (event) => {
  const searchTerm = event.target.value.toLowerCase();
  
  setFilteredData(
    data.filter(
      (f) =>
        (typeof f.fname === 'string' && f.fname.toLowerCase().includes(searchTerm)) ||
        (typeof f.lname === 'string' && f.lname.toLowerCase().includes(searchTerm)) ||
        ((typeof f.fname === 'string' && typeof f.lname === 'string') && 
         (f.fname.toLowerCase() + ' ' + f.lname.toLowerCase()).includes(searchTerm))||
        (typeof f.role === 'string' && f.role.toLowerCase().includes(searchTerm)) ||
        (typeof f.email === 'string' && f.email.toLowerCase().includes(searchTerm))
    )
  );
};





  return (
 <Grid>  
   <Grid> 
   <Paper style={{ maxWidth: "100%", overflow: "auto" }}>
   <div>
    <Divider sx={{ height: 15, m: 0.5 }} orientation="vertical"/>
      <Typography variant="h4" gutterBottom align="center">
        Intern List
      </Typography>
      <Divider sx={{ height: 15, m: 0.5 }} orientation="vertical"/>

     <Grid sx={{ justifyContent: "space-between",mb:4 ,display: "flex", alignItems: "center" }}>
    
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: "100vh",
            borderRadius: "20px",
            boxShadow: 3,
            marginLeft: "1%",
          }}
        >
         
          <InputBase type="text" className="form-control" onChange={Filter} sx={{ ml: 2, flex: 1 }} placeholder="Search Users" />
          <Divider sx={{ height: 15, m: 0.5 }} orientation="vertical" />
          <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
      
      </Grid>
      <Divider/>
      
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  fontWeight: "bold",
                  fontSize: "1em",
                }}
              >
                Name
              </TableCell>
             
              <TableCell
                sx={{
                  fontWeight: "bold",
                  fontSize: "1em",
                }}
              >
                Email
              </TableCell>
              <TableCell
                
                sx={{
                  fontWeight: "bold",
                  fontSize: "1em",
                  
                }}
              >
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.map((intern) => (
               
              <TableRow key={intern._id}>
                <TableCell sx={{ fontSize: "1em" }}>
                  {" "}
                  {intern.fname} {intern.lname}{" "}
                </TableCell>
                
                <TableCell sx={{ fontSize: "1em" }}>{intern.email}</TableCell>
                <TableCell>
                 <Box display="flex" alignItems="center">
                    <Interndetails internId={intern._id} />
                    <FormControlLabel
                      control={
                        <Android12Switch
                          checked={intern.interviewScore}
                          onChange={(e) => setIsComplete(e.target.checked)}
                        />
                      }
                      label="complete"
                    />
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
   </div>
   </Paper>
   </Grid>

    
      
 </Grid>
  
  );
}

export default internTable;