// Хуки для firebase бдшки

// --------- All Imports -------------
import React, { useReducer } from "react";
import "firebase/compat/firestore";
import firebase from "firebase/compat/app";
// import { db } from "../firebase";

// import 'firebase/compat/db';
// import { useAuth } from "./AuthContext";
// import {
//   calcSubPrice,
//   calcTotalPrice,
//   getCountProductsInCart,
// } from "../helpers/calcPrice";

//  --------Here we created our movieContext ----------------
export const bottlesContext = React.createContext();

// --------States and functions that need to be exported-----
const INIT_STATE = {
  bottlesData: [],
  bottles: [],
  popular: [],
  actionBottles: [],
  // cartoonMovies: [],
  cUser: {},
  // watchedMovies: [],
  // watchedMovie: {},
  // animeMovies: [],
  // comedyMovies: [],
  cart: [],
  //   cartLength: getCountProductsInCart(),
  comments: [],
};
// -----------Reducer and Switch cases go here -------------
const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_BOTTLES":
      return { ...state, bottlesData: action.payload };
    case "GET_BOTTLES_BY_ID":
      return { ...state, bottles: action.payload };
    case "GET_POPULAR":
      return { ...state, popular: action.payload };
    case "GET_ACTION":
      return { ...state, actionBottles: action.payload };
    // case "GET_ANIME":
    //   return { ...state, animeMovies: action.payload };
    // case "GET_COMEDY":
    //   return { ...state, comedyMovies: action.payload };
    // case "GET_CARTOON":
    //   return { ...state, cartoonMovies: action.payload };
    case "GET_USER_BY_ID":
      return { ...state, cUser: action.payload };
    // case "GET_WATCHED":
    //   return { ...state, watchedMovies: action.payload };
    // case "GET_MOVIE_BY_HISTORY":
    //   return { ...state, watchedMovie: action.payload };
    // case "GET_CART":
    //   return { ...state, cart: action.payload };
    // case "CHANGE_CART_COUNT":
    //   return { ...state, cartLength: action.payload };
    case "GET_COMMENTS":
      return { ...state, comments: action.payload };

    default:
      return state;
  }
};

// ------------- Main Context Provider is here--------------
const BottlesContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const db = firebase.firestore();
  const messagesRef = db.collection("bottles");
  //   const { currentUser } = useAuth();
  // --------------Functions go here ---------------------
  // ======== GET ALL MOVIES ------------------
  async function getBottles() {
    let bottlesCollection = db.collection("bottles");
    let arr = [];
    await bottlesCollection.get().then((snapshot) => {
      snapshot.docs.map((item) => {
        return arr.push(item.data());
      });
      dispatch({
        type: "GET_BOTTLES",
        payload: arr,
      });
    });
  }
  async function getPopularBottles() {
    let bottlesCollection = db.collection("bottles");
    let popular = bottlesCollection.where("type", "==", "popular");
    let arr = [];
    await popular.get().then((snapshot) => {
      snapshot.docs.map((item) => {
        return arr.push(item.data());
      });
      dispatch({
        type: "GET_POPULAR",
        payload: arr,
      });
    });
  }
  async function getActionBottles() {
    let bottlesCollection = db.collection("bottles");
    let action = bottlesCollection.where("maincategory", "==", "Action");
    let arr = [];
    await action.get().then((snapshot) => {
      snapshot.docs.map((item) => {
        return arr.push(item.data());
      });
      dispatch({
        type: "GET_ACTION",
        payload: arr,
      });
    });
  }
  // async function getAnimeMovies() {
  //   let movieCollection = db.collection("movies");
  //   let action = movieCollection.where("maincategory", "==", "Anime");
  //   let arr = [];
  //   await action.get().then((snapshot) => {
  //     snapshot.docs.map((item) => {
  //       return arr.push(item.data());
  //     });
  //     dispatch({
  //       type: "GET_ANIME",
  //       payload: arr,
  //     });
  //   });
  // }
  // async function getComedyMovies() {
  //   let movieCollection = db.collection("movies");
  //   let action = movieCollection.where("maincategory", "==", "Comedy");
  //   let arr = [];
  //   await action.get().then((snapshot) => {
  //     snapshot.docs.map((item) => {
  //       return arr.push(item.data());
  //     });
  //     dispatch({
  //       type: "GET_COMEDY",
  //       payload: arr,
  //     });
  //   });
  // }
  // async function getCartoonMovies() {
  //   let movieCollection = db.collection("movies");
  //   let cartoon = movieCollection.where("maincategory", "==", "Cartoon");
  //   let arr = [];
  //   await cartoon.get().then((snapshot) => {
  //     snapshot.docs.map((item) => {
  //       return arr.push(item.data());
  //     });
  //     dispatch({
  //       type: "GET_CARTOON",
  //       payload: arr,
  //     });
  //   });
  // }
  // --------------- Get Certain Movie by ID -------------
  async function getBottlesById(id) {
    let bottlesCollection = db.collection("bottles");
    let arr2 = [];
    let data = bottlesCollection.doc(id);
    await data.get().then((doc) => {
      arr2.push(doc.data());
    });
    dispatch({
      type: "GET_BOTTLES_BY_ID",
      payload: arr2,
    });
  }
  //-------------Delete Edit ADD Admin Page---------------
  async function deleteBottles(id) {
    let bottlesCollection = db.collection("bottles");
    await bottlesCollection.doc(id).delete();

    getBottles();
  }
  async function updateBottles(id, obj) {
    let bottlesCollection = db.collection("bottles");
    await bottlesCollection.doc(id).update(obj);
    getBottles();
  }
  async function addBottles(product) {
    let bottlesCollection = db.collection("bottles");
    await bottlesCollection.add(product).then((docRef) => {
      bottlesCollection.doc(docRef.id).update({
        id: docRef.id,
      });
    });
    getBottles();
  }

  async function getUserInfo(uid) {
    let users = db.collection("users");
    let user = {};
    let data = users.doc(uid);
    await data.get().then((doc) => {
      user = { ...doc.data() };
    });
    dispatch({
      type: "GET_USER_BY_ID",
      payload: user,
    });
  }

  // async function sendMovieHistory(product) {
  //   let watch = db.collection("watchhistory");
  //   await watch.add(product).then((docRef) => {
  //     watch.doc(docRef.id).update({
  //       id: docRef.id,
  //       continueWatching: true,
  //     });
  //   });
  // }
  async function sendComment(product) {
    let comment = db.collection("comments");
    await comment.add(product).then((docRef) => {
      comment.doc(docRef.id).update({
        id: docRef.id,
        continueWatching: true,
      });
    });
  }
  async function getComments(id) {
    let bottlesCollection = db.collection("bottles");
    let comments = bottlesCollection.where("bottlesId", "==", id);
    let arr = [];
    await comments
      .orderBy("time", "desc")
      .get()
      .then((snapshot) => {
        snapshot.docs.map((item) => {
          return arr.push(item.data());
        });
        dispatch({
          type: "GET_COMMENTS",
          payload: arr,
        });
      });
  }

  // function updateMovieHistory(id, obj) {
  //   let watch = db.collection("watchhistory");
  //   watch.doc(id).update(obj);
  // }
  // async function getDataHistory(id) {
  //   let watch = db.collection("watchhistory");
  //   let watched = watch.where("userId", "==", id);
  //   let arr = [];
  //   await watched.get().then((snapshot) => {
  //     snapshot.docs.map((item) => {
  //       return arr.push(item.data());
  //     });
  //     dispatch({
  //       type: "GET_WATCHED",
  //       payload: arr,
  //     });
  //   });
  // }
  // async function getDataByHistory(id) {
  //   let movieCollection = db.collection("movies");
  //   let movie = {};
  //   let data = movieCollection.doc(id);
  //   await data.get().then((doc) => {
  //     movie = { ...doc.data() };
  //   });
  //   dispatch({
  //     type: "GET_MOVIE_BY_HISTORY",
  //     payload: movie,
  //   });
  // }

  //------------CART-------------------------
  // function addProductToCart(product) {
  //   let cart = JSON.parse(localStorage.getItem("cart"));
  //   if (!cart) {
  //     cart = {
  //       products: [],
  //       totalPrice: 0,
  //     };
  //   }
  //   let newProduct = {
  //     item: product,
  //     count: 1,
  //     subPrice: 0,
  //   };

  //   let filteredCart = cart.products.filter(
  //     (elem) => elem.item.id === product.id
  //   );
  //   if (filteredCart.length > 0) {
  //     cart.products = cart.products.filter(
  //       (elem) => elem.item.id !== product.id
  //     );
  //   } else {
  //     cart.products.push(newProduct);
  //   }

  // newProduct.subPrice = calcSubPrice(newProduct);
  // cart.totalPrice = calcTotalPrice(cart.products);
  //   localStorage.setItem("cart", JSON.stringify(cart));
  //   dispatch({
  //     type: "CHANGE_CART_COUNT",
  //     payload: cart.products.length,
  //   });
  // }

  // function getCart() {
  //   let cart = JSON.parse(localStorage.getItem("cart"));
  //   if (!cart) {
  //     cart = {
  //       products: [],
  //       totalPrice: 0,
  //     };
  //   }
  //   dispatch({
  //     type: "GET_CART",
  //     payload: cart,
  //   });
  // }
  // function cleanCart() {
  //   localStorage.removeItem("cart");
  // }

  // function changeProductCount(count, id) {
  //   let cart = JSON.parse(localStorage.getItem("cart"));
  //   cart.products = cart.products.map((elem) => {
  //     if (elem.item.id === id) {
  //       elem.count = count;
  //       // elem.subPrice = calcSubPrice(elem);
  //     }
  //     return elem;
  //   });
  //   // cart.totalPrice = calcTotalPrice(cart.products);
  //   localStorage.setItem("cart", JSON.stringify(cart));
  //   getCart();
  // }

  // function checkProductInCart(id) {
  //   let cart = JSON.parse(localStorage.getItem("cart"));
  //   if (!cart) {
  //     cart = {
  //       products: [],
  //       totalPrice: 0,
  //     };
  //   }
  //   let newCart = cart.products.filter((elem) => elem.item.id === id);
  //   return newCart.length > 0 ? true : false;
  // }

  // async function removeAllProductsFromCart() {
  //   await localStorage.removeItem("cart");
  //   await dispatch({
  //     type: "CHANGE_COUNT",
  //     payload: null,
  //   });
  // }

  // Values and functions to export go here --------------
  const value = {
    bottlesData: state.bottlesData,
    bottles: state.bottles,
    popular: state.popular,
    actionBottles: state.actionBottles,
    // cartoonMovies: state.cartoonMovies,
    // cUser: state.cUser,
    // watchedMovies: state.watchedMovies,
    // watchedMovie: state.watchedMovie,
    // animeMovies: state.animeMovies,
    // comedyMovies: state.comedyMovies,
    // cart: state.cart,
    // cartLength: state.cartLength,
    comments: state.comments,
    getComments,
    sendComment,
    // cleanCart,
    // addProductToCart,
    // getCart,
    // changeProductCount,
    // checkProductInCart,
    // getComedyMovies,
    // getAnimeMovies,
    // updateMovieHistory,
    // getMovieByHistory,
    // getMovieHistory,
    // sendMovieHistory,
    getUserInfo,
    getBottlesById,
    getPopularBottles,
    getBottles,
    getActionBottles,
    // getCartoonBottles,
    addBottles,
    updateBottles,
    deleteBottles,
  };
  return (
    <bottlesContext.Provider value={value}>{children}</bottlesContext.Provider>
  );
};

export default BottlesContextProvider;
