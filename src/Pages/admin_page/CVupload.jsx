import React from 'react';
import AdminSidebar from '../../components/common/AdminSidebar';
import Header from '../../components/common/Header';
import '../../index.css';
import Box from '@mui/material/Box';
import InternCvList from './CVuploadFiles/InternCvList';


export default function CVupload() {
  return (
    <>
    <div className="bgcolor">
    <Header />
    <Box height={80} />
    <Box sx={{ display: 'flex' }}>
    <AdminSidebar />
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <InternCvList />
      </Box>
      </Box>
      </div>
      </>
  )}
