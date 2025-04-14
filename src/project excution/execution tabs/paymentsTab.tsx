import * as React from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';

import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


import Comment from '../../assets/Comment.png'
import progress from '../../assets/Progress.png'
import project from '../../assets/Task Excalation.png'

import { StyledTableCell, StyledTableRow } from '../../theme/color';
import { PaymentType } from '../../Types';
import { rows } from '../../Data/PaymentTable';


export default function PaymentTable() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [menuRow, setMenuRow] = React.useState<PaymentType | null>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>, row: PaymentType) => {
    setAnchorEl(event.currentTarget);
    setMenuRow(row);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setMenuRow(null);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 1000 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Payment type</StyledTableCell>
            <StyledTableCell>Payment Description</StyledTableCell>
            <StyledTableCell>Payment</StyledTableCell>
            <StyledTableCell>Amount</StyledTableCell>
           
            <StyledTableCell align="right"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, idx) => (
            <StyledTableRow key={idx}>
              <StyledTableCell>{row.Payment_type}</StyledTableCell>
              <StyledTableCell>{row.Payment_Description}</StyledTableCell>
              <StyledTableCell>{row.Payment_date}</StyledTableCell>
              <StyledTableCell>{row.Amount}</StyledTableCell>
              
             
              <StyledTableCell align="center">
                <IconButton onClick={(e) => handleMenuOpen(e, row)}>
                  <MoreVertIcon />
                </IconButton>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>
        <img className="mr-6 w-6 h-6 " src={project}></img>
        Task Escalation</MenuItem>
        <MenuItem onClick={handleMenuClose}> <img className="mr-6 w-6 h-6 " src={progress}></img>Project Progress</MenuItem>
        <MenuItem onClick={handleMenuClose}> <img className="mr-6 w-6 h-6 " src={Comment}></img>Add Comment</MenuItem>
      </Menu>
    </TableContainer>
  );
}
