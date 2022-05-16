import { Container, TableFooter } from "@mui/material";
import React, { useContext, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { clientContext } from "../contexts/ClientContext";

const rows = [];

const HistoryPage = () => {
  const data = React.useContext(clientContext);
  const { getProductsFromHistory, myHistory } = data;
  useEffect(() => {
    getProductsFromHistory();
  }, []);
  if (!myHistory) {
    return <h2>Loading...</h2>;
  }

  if (myHistory.products.length === 0) {
    return <h2>History cleaned</h2>;
  }

  return (
    <div>
      <Container>
        <h2>History</h2>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Название</TableCell>
                <TableCell align="center">Фото</TableCell>
                <TableCell align="center">Цена</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {myHistory.products.map((item) => (
                <TableRow
                  key={item.product.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center" component="th" scope="row">
                    {item.product.name}
                  </TableCell>
                  <TableCell align="center">
                    <img width={100} src={item.product.image} alt="" />
                  </TableCell>
                  <TableCell align="center">{item.product.price} сом</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </div>
  );
};

export default HistoryPage;