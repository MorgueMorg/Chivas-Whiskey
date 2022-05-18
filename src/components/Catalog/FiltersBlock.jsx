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
  const [fortressValue, setDoughValue] = useState(filter.get("fortress") || "");
  const [manufacturValue, setSizeValue] = useState(
    filter.get("manufactur") || ""
  );

  const handleFilters = (key, value) => {
    filter.set(key, value);
    navigate(`${location.pathname}?${filter.toString()}`);
    setSearchValue(filter.get("q") || "");
    setDoughValue(filter.get("fortress") || "");
    setSizeValue(filter.get("manufactur") || "");
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
        label="Live search "
      />
      <FormControl variant="standard">
        <InputLabel id="fortress-label" sx={{ color: "black" }}>
          Fortress
        </InputLabel>
        <Select
          value={fortressValue}
          onChange={(e) => handleFilters("fortress", e.target.value)}
          label="Enter fortress"
          labelId="fortress-label"
        >
          <MenuItem value="40%">40%</MenuItem>
          <MenuItem value="60%">60%</MenuItem>
          <MenuItem value="80%">80%</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="standard">
        <InputLabel id="manufactur-label" sx={{ color: "black" }}>
          Manufactur
        </InputLabel>
        <Select
          value={manufacturValue}
          onChange={(e) => handleFilters("manufactur", e.target.value)}
          label="Выберите размер"
          labelId="manufactur-label"
        >
          <MenuItem value="Spaceside">Spaceside</MenuItem>
          <MenuItem value="Hilend">Hilend</MenuItem>
          <MenuItem value="Bishkek">Bishkek</MenuItem>
        </Select>
      </FormControl>
      <Button
        variant="contained"
        //   theme={theme}
        color="inherit"
        onClick={resetFilter}
        className="reset-btn"
      >
        Reset
      </Button>
    </div>
  );
};

export default FiltersBlock;
