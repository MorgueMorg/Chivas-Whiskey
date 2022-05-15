import {
    Button,
    Container,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
  } from "@mui/material";
  import React, { useState } from "react";
  import { adminContext } from "../../contexts/AdminContext";
  
  const AddProductPage = () => {
    const data = React.useContext(adminContext);
    const { addProduct } = data;
  
    const [newProduct, setNewProduct] = useState({
      name: "",
      description: "",
      price: "",
      image: "",
      dough: "",
      size: "",
    });
  
    const handleSubmit = (event) => {
      event.preventDefault();
      for (let key in newProduct) {
        let value = newProduct[key]
        if (typeof value === "string") {
          if (!value.trim()) {
            alert("Заполните поля!")
            return
          }
        }
      }
  
      addProduct(newProduct);
      setNewProduct({
        name: "",
        description: "",
        price: "",
        image: "",
        size: "",
        dough: "",
        feedbacks: [],
        likes: 0,
      });
    };
  
    return (
      <Container>
        <div className="add-edit-page">
          <h2>Добавить товар</h2>
          <form onSubmit={handleSubmit}>
            <TextField
              onChange={(e) =>
                setNewProduct({ ...newProduct, name: e.target.value })
              }
              value={newProduct.name}
              label="Введите название"
              variant="standard"
            />
            <TextField
              onChange={(e) =>
                setNewProduct({ ...newProduct, description: e.target.value })
              }
              value={newProduct.description}
              label="Введите описание"
              variant="standard"
            />
            <TextField
              type="number"
              onChange={(e) =>
                setNewProduct({ ...newProduct, price: parseInt(e.target.value) })
              }
              value={newProduct.price}
              label="Введите цену"
              variant="standard"
            />
            <TextField
              onChange={(e) =>
                setNewProduct({ ...newProduct, image: e.target.value })
              }
              value={newProduct.image}
              label="Введите фото"
              variant="standard"
            />
            <FormControl variant="standard">
              <InputLabel id="dough-select-label">Выберите тесто</InputLabel>
              <Select
                value={newProduct.dough}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, dough: e.target.value })
                }
                label="Выберите добавки"
                labelId="dough-select-label"
              >
                <MenuItem value="Традиционное">Традиционное</MenuItem>
                <MenuItem value="Тонкое">Тонкое</MenuItem>
                <MenuItem value="Толстое">Толстое</MenuItem>
              </Select>
            </FormControl>
            <FormControl variant="standard">
              <InputLabel id="size-select-label">Выберите размер</InputLabel>
              <Select
                onChange={(e) =>
                  setNewProduct({ ...newProduct, size: e.target.value })
                }
                value={newProduct.size}
                label="Выберите размер"
                labelId="size-select-label"
              >
                <MenuItem value="Маленькая">Маленькая</MenuItem>
                <MenuItem value="Средняя">Средняя</MenuItem>
                <MenuItem value="Большая">Большая</MenuItem>
              </Select>
            </FormControl>
            <Button type="submit" variant="contained" className="add-btn">
              Добавить
            </Button>
          </form>
        </div>
      </Container>
    );
  };
  
  export default AddProductPage;
  