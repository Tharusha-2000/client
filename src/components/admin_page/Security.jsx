import React from 'react';
import Sidebar from '../common/Sidebar';
import Header from '../common/Header';
import Box from '@mui/material/Box';



export default function Security() {
  return (
    <>
    <Header />
    <Box height={60} />
    <Box sx={{ display: 'flex' }}>
    <Sidebar />
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
       <h1>Security</h1>
      </Box>
      </Box>
      </>
  )}
