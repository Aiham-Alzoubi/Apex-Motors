import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import '../style/rental-prices.css';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
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

function createData(id,name, calories, fat, carbs, protein) {
  return {id, name, calories, fat, carbs, protein };
}



export default function Rentalprices() {
  const [rows,setRows]=React.useState(
    [
  createData(1,'Nissan Magnite', 'AED 3099', 'Ask New', 'Ask New', 'No Deposit'),
  createData(2,'Ice cream sandwich', 'hfh', 9.0, 37, 4.3),
  createData(3,'Eclair', 262, 16.0, 24, 6.0),
  createData(4,'Cupcake', 305, 3.7, 67, 4.3),
  createData(5,'Gingerbread', 356, 16.0, 49, 3.9),
]
  )
const handelUpdate =(id)=>{
alert(id)
var newRow=rows[id-1]
newRow.name='test'
newRow.calories=55
console.log(newRow)

}
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="Rentalprices">
        <TableHead>
          <TableRow>
            <StyledTableCell>Car Name</StyledTableCell>
            <StyledTableCell align="right">Per Day</StyledTableCell>
            <StyledTableCell align="right">Weekly&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Monthly&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Deposit&nbsp;(g)</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
              <StyledTableCell align="right">
                <button onClick={()=>{handelUpdate(row.id)}}>Edit</button>
                </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
