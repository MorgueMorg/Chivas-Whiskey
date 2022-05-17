import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
// import { useHistory } from "react-router-dom";
import { bottlesContext } from "../../contexts/BottlesContext";
// import MainNavbar from "../Main/MainNavbar";
import "./AddBottles.css";
const AddBottles = () => {
  const { addBottles } = useContext(bottlesContext);

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  // const history = useHistory();
  const [bottles, setBottles] = useState({});
  // const [actors, setActors] = useState([]);
  // const [actor, setActor] = useState();
  // const [category, setCategory] = useState();
  // const [categories, setCategories] = useState([]);
  // const [trailer, setTrailer] = useState();
  // function handleTrailer(e) {
  //     let newTrailer = e.target.value;
  //     setTrailer(newTrailer);
  // }

  // function addCategory() {
  //   categories.push(category);
  //   setCategory("");
  // }
  // function handleCategoryValues(e) {
  //   setCategory(e.target.value);
  // }
  // function addActor() {
  //   actors.push(actor);
  //   setActor("");
  // }
  // function handleActorsValues(e) {
  //   setActor(e.target.value);
  // }
  function handleValue(e) {
    let newObj = {
      ...bottles,
      [e.target.name]: e.target.value,
      // actors: actors,
      // category: categories,
      // fulltrailer: /assets/trailers/full-trailers/${trailer},
    };
    setBottles(newObj);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await addBottles(bottles);
      // history.push("/admin");
    } catch {
      setError("Failed to Add Product");
      console.log(error);
    }
    setLoading(false);
  }
  return (
    <div>
      {/* <MainNavbar /> */}
      <div className="add-container">
        <input
          placeholder="Title"
          onChange={handleValue}
          id="inp-title"
          name="title"
          type="text"
        />
        <input
          placeholder="Description"
          onChange={handleValue}
          id="inp-desc"
          name="desc"
          type="text"
        />
        {/* <input
          placeholder="Director"
          onChange={handleValue}
          id="inp-director"
          name="director"
          type="text"
        /> */}
        {/* <input
          placeholder="Main Category"
          onChange={handleValue}
          id="inp-maincategory"
          name="maincategory"
          type="text"
        /> */}
        <input
          placeholder="Poster URL"
          onChange={handleValue}
          id="inp-poster"
          name="poster"
          type="text"
        />
        {/* <input
          placeholder="Movie URL"
          onChange={handleValue}
          id="inp-link"
          name="link"
          type="text"
        /> */}
        {/* <input
          placeholder="Year"
          onChange={handleValue}
          id="inp-year"
          name="year"
          type="number"
        /> */}
        {/* <label for="trailer-upload" class="custom-file-upload">
          Trailer..
        </label> */}
        {/* <input
          id="trailer-upload"
          type="file"
          onChange={(e) => setTrailer(e.target.files[0].name)}
          placeholder="Trailer"
        /> */}
        {/* <div className="admin-categories">
          <input
            placeholder="Category"
            onChange={handleCategoryValues}
            value={category}
            id="inp-category1"
            name="category1"
            type="text"
          />
          <button onClick={addCategory}>Add Category</button>
        </div> */}
        {/* <div className="admin-actors">
          <input
            placeholder="Actor"
            value={actor}
            onChange={handleActorsValues}
            id="inp-actor1"
            name="actor1"
            type="text"
          />
          <button onClick={addActor}>Add Actor</button>
        </div> */}
        <Link to="/bottles-firebase">
          <button id="add-submit" onClick={handleSubmit}>
            Submit
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AddBottles;
