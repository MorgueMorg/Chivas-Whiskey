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
import Cards from "react-credit-cards";
import PaymentForm from "../components/Pay/Payment";
import "react-credit-cards/es/styles-compiled.css";

const rows = [];

const CartPage = () => {
  const data = React.useContext(clientContext);
  const { getProductsFromCart, myCart, changeCountProductInCart, post } = data;

  useEffect(() => {
    getProductsFromCart();
  }, []);
  if (!myCart) {
    return <h2>Loading...</h2>;
  }

  if (myCart.products.length === 0) {
    return <h2>Cart cleaned</h2>;
  }

  return (
    <div>
      <Container>
        <h2>Cart</h2>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Название</TableCell>
                <TableCell align="center">Фото</TableCell>
                <TableCell align="center">Цена</TableCell>
                <TableCell align="center">Количество</TableCell>
                <TableCell align="center">Сумма</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {myCart.products.map((item) => (
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
                  <TableCell align="center">
                    <input
                      type="number"
                      value={item.count}
                      onChange={(e) =>
                        changeCountProductInCart(
                          item.product.id,
                          e.target.value
                        )
                      }
                    />
                  </TableCell>
                  <TableCell align="center">{item.subPrice} $</TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell align="right" colSpan={4}>
                  <h2>Итоговая сумма</h2>
                </TableCell>
                <TableCell align="center">
                  <h2>{myCart.totalPrice} $</h2>
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
        <PaymentForm onSubmit />
      </Container>
    </div>
  );
};

export default CartPage;
