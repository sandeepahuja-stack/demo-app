import React from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import { StyledTableCell, StyledTableRow } from "./table.style";

const UserCustomerDataTable = (props) => {
  const { data: rows = [], lastRowRef = null } = props;
  if (rows.length === 0) return null;

  const keys = ["#No", "User Photo", "First Name", "Last Name", "Email"];

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="customer table">
        <TableHead>
          <TableRow>
            {keys.map((label) => (
              <StyledTableCell key={label}>{label}</StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => {
            const name = `${row.first_name} ${row.last_name}`;
            return (
              <StyledTableRow
                key={row.id}
                ref={index === rows.length - 1 ? lastRowRef : null}
              >
                <StyledTableCell>{index + 1}.</StyledTableCell>
                <StyledTableCell>
                  <Avatar
                    src={row.avatar}
                    alt={name}
                    sx={{ width: 80, height: 80 }}
                  />
                </StyledTableCell>
                <StyledTableCell>{row.first_name}</StyledTableCell>
                <StyledTableCell>{row.last_name}</StyledTableCell>
                <StyledTableCell>{row.email}</StyledTableCell>
              </StyledTableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default UserCustomerDataTable;
