import React, { useContext, useEffect, useState } from "react";
// import { useHistory } from "react-router-dom";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { bottlesContext } from "../../contexts/BottlesContext";

const EditBottles = (props) => {
  const { getBottlesById, bottles, updateBottles } = useContext(bottlesContext);
  // const history = useHistory();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const params = useParams();
  useEffect(() => {
    // getMovieById(props.match.params.id);
    getBottlesById(params.id);
  }, []);
  const [forEdit, setForEdit] = useState(bottles[0]);

  const [edit, setEdit] = useState();

  function handleValue(e) {
    let newObj = {
      ...edit,
      [e.target.name]: e.target.value,
    };
    setEdit(newObj);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      // await updateMovie(props.match.params.id, edit);
      await updateBottles(params.id, edit);
      navigate("/bottles-firebase");
    } catch {
      setError("Failed to Add Product");
      console.log(error);
    }
    setLoading(false);
  }

  return (
    <div>
      {bottles[0] ? (
        <div className="edit-container">
          <div className="edit-left">
            <div>
              <p>
                <strong>Title: </strong>
                {bottles[0].title}
              </p>
              <p>
                <strong>Description: </strong>
                {bottles[0].desc}
              </p>
              {/* <p>
                <strong>Director: </strong>
                {movie[0].director}
              </p> */}
              {/* <p>
                <strong>Main Category: </strong>
                {bottles[0].maincategory}
              </p> */}
              <p>
                <strong>Year: </strong>
                {bottles[0].year}
              </p>
            </div>
          </div>
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

            <button id="add-submit" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      ) : (
        <h1>loading...</h1>
      )}
    </div>
  );
};

export default EditBottles;
