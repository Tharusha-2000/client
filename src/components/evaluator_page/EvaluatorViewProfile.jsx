import React from 'react';
import Evaluatorsidebar from '../common/Evaluatorsidebar';
import Header from '../common/Header';
import Box from '@mui/material/Box';


export default function EvaluatorViewProfile() {
  return (
    <>
    <Header />
    <Box height={60} />
    <Box sx={{ display: 'flex' }}>
    <Evaluatorsidebar />
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
       <h1>evaluatr view profile </h1>
      </Box>
      </Box>
      </>
  )}
