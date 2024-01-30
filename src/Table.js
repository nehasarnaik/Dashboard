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
    backgroundColor: 'rgb(10, 185, 228)',
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
  createData('Manual work', 159, 6.0, 24, 4.0,159, 6.0, 24, 4.0,159, 6.0, 24, 4.0),
  createData('Automated tests duration', 237, 9.0, 37, 4.3,159, 6.0, 24, 4.0,159, 6.0, 24, 4.0),
  createData('total efforts for test results obtaining', 262, 16.0, 24, 6.0,159, 6.0, 24, 4.0,159, 6.0, 24, 4.0),
];

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: 410 }}>
      <Table sx={{ maxWidth: 1450 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Test type</StyledTableCell>
            <StyledTableCell align="right">Jan-23</StyledTableCell>
            <StyledTableCell align="right">Feb-23</StyledTableCell>
            <StyledTableCell align="right">Mar-23</StyledTableCell>
            <StyledTableCell align="right">Apr-23</StyledTableCell>
            <StyledTableCell align="right">May-23</StyledTableCell>
            <StyledTableCell align="right">Jun-23</StyledTableCell>
            <StyledTableCell align="right">Jul-23</StyledTableCell>
            <StyledTableCell align="right">Aug-23</StyledTableCell>
            <StyledTableCell align="right">Sep-23</StyledTableCell>
            <StyledTableCell align="right">Oct-23</StyledTableCell>
            <StyledTableCell align="right">Nov-23</StyledTableCell>
            <StyledTableCell align="right">Dec-23</StyledTableCell>
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
              <StyledTableCell align="right">{row.Nov}</StyledTableCell>
              <StyledTableCell align="right">{row.Dec}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
