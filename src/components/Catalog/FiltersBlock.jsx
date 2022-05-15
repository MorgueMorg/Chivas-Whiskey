import {
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
  } from "@mui/material";
  import React, { useState } from "react";
  import { useLocation, useNavigate } from "react-router-dom";
  
  const FiltersBlock = ({ getProducts }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const filter = new URLSearchParams(location.search);
  
    const [searchValue, setSearchValue] = useState(filter.get("q") || "");
    const [doughValue, setDoughValue] = useState(filter.get("dough") || "");
    const [sizeValue, setSizeValue] = useState(filter.get("size") || "");
  
    const handleFilters = (key, value) => {
      filter.set(key, value);
      navigate(`${location.pathname}?${filter.toString()}`);
      setSearchValue(filter.get("q") || "");
      setDoughValue(filter.get("dough") || "");
      setSizeValue(filter.get("size") || "");
      getProducts();
    };
  
    const resetFilter = () => {
      setSearchValue("");
      setDoughValue("");
      setSizeValue("");
      navigate("/catalog");
      getProducts();
    };
  
    return (
      <div className="filters-block">
        <TextField
          variant="standard"
          value={searchValue}
          onChange={(e) => handleFilters("q", e.target.value)}
          type="search"
          // sx={{ color: "white" }}
          sx={{ color: "black" }}
          label="Живой поиск... "
        />
        <FormControl variant="standard">
          <InputLabel id="dough-label" sx={{ color: "black" }}>
            Выберите тесто
          </InputLabel>
          <Select
            value={doughValue}
            onChange={(e) => handleFilters("dough", e.target.value)}
            label="Выберите тесто"
            labelId="dough-label"
          >
            <MenuItem value="Традиционное">Традиционное</MenuItem>
            <MenuItem value="Тонкое">Тонкое</MenuItem>
            <MenuItem value="Толстое">Толстое</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="standard">
          <InputLabel id="size-label" sx={{ color: "black" }}>
            Выберите размер
          </InputLabel>
          <Select
            value={sizeValue}
            onChange={(e) => handleFilters("size", e.target.value)}
            label="Выберите размер"
            labelId="size-label"
          >
            <MenuItem value="Маленькая">Маленькая</MenuItem>
            <MenuItem value="Средняя">Средняя</MenuItem>
            <MenuItem value="Большая">Большая</MenuItem>
          </Select>
        </FormControl>
        <Button
          variant="contained"
        //   theme={theme}
          onClick={resetFilter}
          className="reset-btn"
        >
          Сбросить
        </Button>
      </div>
    );
  };
  
  export default FiltersBlock;
  