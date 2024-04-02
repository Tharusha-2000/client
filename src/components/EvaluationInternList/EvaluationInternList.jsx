import React, { useEffect, useState } from "react";
import axios from 'axios';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Typography,
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

function EvaluationInternList() {
  const [interns, setInterns] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8001/api/users/interns")
      .then((result) => {
        setInterns(result.data.interns);
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
      });
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <TableContainer component={Paper}>
      <Typography variant="h3" gutterBottom>
        All Evaluations
      </Typography>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>User ID</TableCell>
            <TableCell>Status</TableCell>
            <TableCell style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}>Evaluation Form</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {interns.map((intern) => (
            <TableRow key={intern._id}>
              <TableCell>{intern.fname}</TableCell>
              <TableCell>{intern.lname}</TableCell>
              <TableCell>{intern.email}</TableCell>
              <TableCell
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <AssignmentIndIcon />
              </TableCell>
              <TableCell>
                <DeleteForeverIcon></DeleteForeverIcon>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default EvaluationInternList;