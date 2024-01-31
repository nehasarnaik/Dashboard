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
    fontSize: 12,
    border: '1px solid #dddddd', // Add line
  },
}));

const StyledTableCell1 = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#676868',
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 12,
    border: '1px solid #dddddd', // Add line
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

function createData(name, Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec) {
  return { name, Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec };
}

const rows = [
  createData('User Stories', 10, 4, 1, 1, 1, 1, 1, 1, '', 1, 'Feature files developed-ST and UAT', 100),
  createData('Accessibility Defects', 2, 1, 1, '', '', '', '', '', '', '', 'Feature files reviewed/signed-off', 80),
  createData('Security Defects', 1, '', '', '', 1, '', '', '', '', '', 'Non-functional script developed', 0),
  createData('Performance Defects', 1, '', '', '', 1, '', '', '', '', '', 'Test data mining completed', 1),
  createData('Functional Defects', 3, '', '', 1, '', '', '', '', 1, 1, 'Accessibility team engaged', 'No'),
  createData('Product Incident', 1, '', '', '', 1, '', '', '', '', '', 'Pen tester engaged', 'Yes'),
];

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: 610 }}>
      <Table sx={{ maxWidth: 1550 }} aria-label="customized table">
        <TableHead>
          <StyledTableRow>
            <StyledTableCell1 colSpan={2}>Release Name:</StyledTableCell1>
            <StyledTableCell1 colSpan={9} align="center">Sprint:</StyledTableCell1>
            <StyledTableCell1 colSpan={2} align="center">RAG status</StyledTableCell1>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCell1 colSpan={2} rowSpan={2} align="center">Scope</StyledTableCell1>
            <StyledTableCell1 colSpan={9} align="center">DEV Planning</StyledTableCell1>
            <StyledTableCell1 colSpan={2} rowSpan={2} align="center">Test Planning</StyledTableCell1>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCell1 align="center">In Analysis</StyledTableCell1>
            <StyledTableCell1 align="center">In Design</StyledTableCell1>
            <StyledTableCell1 align="center">In Dev</StyledTableCell1>
            <StyledTableCell1 align="center">DEV Completed</StyledTableCell1>
            <StyledTableCell1 align="center">In ST</StyledTableCell1>
            <StyledTableCell1 align="center">ST Completed</StyledTableCell1>
            <StyledTableCell1 align="center">UAT Completed</StyledTableCell1>
            <StyledTableCell1 align="center">NFT Completed</StyledTableCell1>
            <StyledTableCell1 align="center">Moved to SIT</StyledTableCell1>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="center">{row.Jan}</StyledTableCell>
              <StyledTableCell align="center">{row.Feb}</StyledTableCell>
              <StyledTableCell align="center">{row.Mar}</StyledTableCell>
              <StyledTableCell align="center">{row.Apr}</StyledTableCell>
              <StyledTableCell align="center">{row.May}</StyledTableCell>
              <StyledTableCell align="center">{row.Jun}</StyledTableCell>
              <StyledTableCell align="center">{row.Jul}</StyledTableCell>
              <StyledTableCell align="center">{row.Aug}</StyledTableCell>
              <StyledTableCell align="center">{row.Sep}</StyledTableCell>
              <StyledTableCell align="center">{row.Oct}</StyledTableCell>
              <StyledTableCell align="left">{row.Nov}</StyledTableCell>
              <StyledTableCell align="center">{row.Dec}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
