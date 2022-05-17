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
    fortress: "",
    manufactur: "",   
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    for (let key in newProduct) {
      let value = newProduct[key];
      if (typeof value === "string") {
        if (!value.trim()) {
          alert("Заполните поля!");
          return;
        }
      }
    }

    addProduct(newProduct);
    setNewProduct({
      name: "",
      description: "",
      price: "",
      image: "",
      fortress: "",
      manufactur: "",
      feedbacks: [],
      likes: 0,
    });
  };

  return (
    <Container>
      <div className="add-edit-page">
        <h2>Add Whiskey Product</h2>
        <form onSubmit={handleSubmit}>
          <TextField
            onChange={(e) =>
              setNewProduct({ ...newProduct, name: e.target.value })
            }
            value={newProduct.name}
            label="Title"
            variant="standard"
          />
          <TextField
            onChange={(e) =>
              setNewProduct({ ...newProduct, description: e.target.value })
            }
            value={newProduct.description}
            label="Description"
            variant="standard"
          />
          <TextField
            type="number"
            onChange={(e) =>
              setNewProduct({ ...newProduct, price: parseInt(e.target.value) })
            }
            value={newProduct.price}
            label="Price"
            variant="standard"
          />
          <TextField
            onChange={(e) =>
              setNewProduct({ ...newProduct, image: e.target.value })
            }
            value={newProduct.image}
            label="Image"
            variant="standard"
          />
          <FormControl variant="standard">
            <InputLabel id="fortress-select-label">Fortress</InputLabel>
            <Select
              value={newProduct.fortress}
              onChange={(e) =>
                setNewProduct({ ...newProduct, fortress: e.target.value })
              }
              label="Enter Fortress"
              labelId="fortress-select-label"
            >
              <MenuItem value="40%">40%</MenuItem>
              <MenuItem value="60%">60%</MenuItem>
              <MenuItem value="80%">80%</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="standard">
            <InputLabel id="manufactur-select-label">Manufacturer</InputLabel>
            <Select
              onChange={(e) =>
                setNewProduct({ ...newProduct, manufactur: e.target.value })
              }
              value={newProduct.manufactur}
              label="Enter manufactur"
              labelId="manufactur-select-label"
            >
              <MenuItem value="Spaceside">Spaceside</MenuItem>
              <MenuItem value="Hiland">Hiland</MenuItem>
              <MenuItem value="Bishkek">Bishkek</MenuItem>
            </Select>
          </FormControl>
          <Button type="submit" variant="contained" className="add-btn">
            Add
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default AddProductPage;
