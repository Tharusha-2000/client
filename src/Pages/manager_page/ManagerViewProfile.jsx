import React from 'react';
import Managersidebar from '../../components/common/Managersidebar';
import Header from '../../components/common/Header';
import Box from '@mui/material/Box';


export default function ManagerViewProfile() {
  return (
    <>
    <Header />
    <Box height={60} />
    <Box sx={{ display: 'flex' }}>
    <Managersidebar />
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
       <h1>manager view profile </h1>
      </Box>
      </Box>
      </>
  )}
