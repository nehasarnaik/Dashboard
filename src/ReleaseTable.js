import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#676868',
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableCell1 = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: '#373737',
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, Jan, Feb, Mar, Apr ,May, Jun, Jul, Aug,Sep, Oct, Nov, Dec) {
  return { name,Jan, Feb, Mar, Apr ,May, Jun, Jul, Aug,Sep, Oct, Nov, Dec };
}

const rows = [
  createData('Accessibility Defects', 2, 0, 0, 0,0, 0, 0, 0,0, 0),
  createData('Security Defects', 1, 0, 0, 0,0, 0, 0, 0,0, 0),
  createData('Performance Defects', 1, 0, 0, 0,0, 0, 0, 0,0, 0),
  createData('Functional Defects', 3, 0, 0, 0,0, 0, 0, 0,0, 0),
  createData('Product Incident', 3, 0, 0, 0,0, 0, 0, 0,0, 0)
];

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: 610 }}>
      <Table sx={{ maxWidth: 1450 }} aria-label="customized table">
      <TableHead>
          <TableRow>
            <StyledTableCell1>Release Name:</StyledTableCell1>
            <StyledTableCell1 align="right"></StyledTableCell1>
            <StyledTableCell1 align="right"></StyledTableCell1>
            <StyledTableCell1 align="right">Sprint:</StyledTableCell1>
            <StyledTableCell1 align="right"></StyledTableCell1>
            <StyledTableCell1 align="right"></StyledTableCell1>
            <StyledTableCell1 align="right"></StyledTableCell1>
            <StyledTableCell1 align="right"></StyledTableCell1>
            <StyledTableCell1 align="right"></StyledTableCell1>
            <StyledTableCell1 align="right">RAG status</StyledTableCell1>
            <StyledTableCell1 align="right"></StyledTableCell1>
          </TableRow>
        </TableHead>
      <TableHead>
          <TableRow>
            <StyledTableCell1>Scope</StyledTableCell1>
            <StyledTableCell1 align="right"></StyledTableCell1>
            <StyledTableCell1 align="right"></StyledTableCell1>
            <StyledTableCell1 align="right"></StyledTableCell1>
            <StyledTableCell1 align="right"></StyledTableCell1>
            <StyledTableCell1 align="right"></StyledTableCell1>
            <StyledTableCell1 align="right"></StyledTableCell1>
            <StyledTableCell1 align="right">Stage</StyledTableCell1>
            <StyledTableCell1 align="right"></StyledTableCell1>
            <StyledTableCell1 align="right"></StyledTableCell1>
            <StyledTableCell1 align="right"></StyledTableCell1>
          </TableRow>
        </TableHead>
        <TableHead>
          <TableRow>
            <StyledTableCell>User Stories</StyledTableCell>
            <StyledTableCell align="right">10</StyledTableCell>
            <StyledTableCell align="right">In Analysis</StyledTableCell>
            <StyledTableCell align="right">In Design</StyledTableCell>
            <StyledTableCell align="right">In Dev</StyledTableCell>
            <StyledTableCell align="right">DEV Completed</StyledTableCell>
            <StyledTableCell align="right">In ST</StyledTableCell>
            <StyledTableCell align="right">ST Completed</StyledTableCell>
            <StyledTableCell align="right">UAT Completed</StyledTableCell>
            <StyledTableCell align="right">NFT Completed</StyledTableCell>
            <StyledTableCell align="right">Moved to SIT</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.Jan}</StyledTableCell>
              <StyledTableCell align="right">{row.Feb}</StyledTableCell>
              <StyledTableCell align="right">{row.Mar}</StyledTableCell>
              <StyledTableCell align="right">{row.Apr}</StyledTableCell>
              <StyledTableCell align="right">{row.May}</StyledTableCell>
              <StyledTableCell align="right">{row.Jun}</StyledTableCell>
              <StyledTableCell align="right">{row.Jul}</StyledTableCell>
              <StyledTableCell align="right">{row.Aug}</StyledTableCell>
              <StyledTableCell align="right">{row.Sep}</StyledTableCell>
              <StyledTableCell align="right">{row.Oct}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
