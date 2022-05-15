import {
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { adminContext } from "../../contexts/AdminContext";

const EditProductPage = () => {
  const data = React.useContext(adminContext);
  const { getProductToEdit, productToEdit, saveEditedProduct } = data;

  const params = useParams();
  const navigate = useNavigate();

  const [editedProduct, setEditedProduct] = useState(productToEdit);

  const handleSubmit = (event) => {
    event.preventDefault();
    for (let key in editedProduct) {
      let value = editedProduct[key];
      if (typeof value === "string") {
        if (!value.trim()) {
          alert("Заполните поля!");
          return;
        }
      }
    }
    saveEditedProduct(editedProduct);
    navigate("/admin-panel");
  };

  useEffect(() => {
    getProductToEdit(params.id);
  }, []);

  useEffect(() => {
    setEditedProduct(productToEdit);
  }, [productToEdit]);

  if (!editedProduct) {
    return <h2>Loading...</h2>;
  }

  return (
    <Container>
      <div className="add-edit-page">
        <h2>Редактировать товар</h2>
        <form onSubmit={handleSubmit}>
          <TextField
            onChange={(e) =>
              setEditedProduct({ ...editedProduct, name: e.target.value })
            }
            value={editedProduct.name}
            label="Введите название"
            variant="standard"
          />
          <TextField
            onChange={(e) =>
              setEditedProduct({
                ...editedProduct,
                description: e.target.value,
              })
            }
            value={editedProduct.description}
            label="Введите описание"
            variant="standard"
          />
          <TextField
            type="number"
            onChange={(e) =>
              setEditedProduct({
                ...editedProduct,
                price: parseInt(e.target.value),
              })
            }
            value={editedProduct.price}
            label="Введите цену"
            variant="standard"
          />
          <TextField
            onChange={(e) =>
              setEditedProduct({ ...editedProduct, image: e.target.value })
            }
            value={editedProduct.image}
            label="Введите фото"
            variant="standard"
          />
          <FormControl variant="standard">
            <InputLabel id="dough-select-label">Выберите тесто</InputLabel>
            <Select
              value={editedProduct.dough}
              onChange={(e) =>
                setEditedProduct({ ...editedProduct, dough: e.target.value })
              }
              label="Выберите тесто"
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
                setEditedProduct({ ...editedProduct, size: e.target.value })
              }
              value={editedProduct.size}
              label="Выберите размер"
              labelId="size-select-label"
            >
              <MenuItem value="Маленькая">Маленькая</MenuItem>
              <MenuItem value="Средняя">Средняя</MenuItem>
              <MenuItem value="Большая">Большая</MenuItem>
            </Select>
          </FormControl>
          <Button type="submit" variant="contained" className="save-btn">
            Сохранить изменения
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default EditProductPage;
