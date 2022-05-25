import { Container } from "@material-ui/core";
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { bottlesContext } from "../../contexts/BottlesContext";
// import MyPagination from "../MyPagination";
// import MainNavbar from "../Main/MainNavbar";
import "./BottlesFirePage.css";
const BottlesFirePage = () => {
  const { getBottles, bottlesData, getBottlesById, bottles, deleteBottles } =
    useContext(bottlesContext);
  useEffect(() => {
    getBottles();
  }, []);
  return (
    <>
      {/* <MainNavbar /> */}
      <div className="admin-wrapper">
        <Container>
          <div className="add-manage">
            <h3>Manage chivas database</h3>

            <Link to="/add-bottles">
              <button>Add New Product</button>
            </Link>
          </div>
          <div className="admin-container">
            {bottlesData ? (
              <>
                {bottlesData.map((item) => (
                  <div className="admin-movie">
                    <img width={100} src={item.poster} alt="img-poster-admin" />
                    <div>
                      <p>{item.title}</p>
                      <p>id: {item.id}</p>
                      <div>
                        <Link to={`edit/${item.id}`}>
                          <button>Edit</button>
                        </Link>
                        <button onClick={() => deleteBottles(item.id)}>
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <h1>loading...</h1>
            )}
          </div>
        </Container>
        {/* <MyPagination /> */}
      </div>
    </>
  );
};

export default BottlesFirePage;
