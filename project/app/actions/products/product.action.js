import firebaseService from "../../enviroments/firebase";
import {
  ADD_PRODUCT_FAILURE,
  ADD_PRODUCT_SUCCESS,
  PRODUCT_FETCH_FAILURE,
  PRODUCT_FETCH_SUCCESS
} from "./product.types";

const sessionLoading = () => ({
  type: types.SESSION_LOADING
});

export const addProduct = product => dispatch => {
  firebaseService
    .database()
    .ref("/products")
    .push(product, err => {
      if (err) {
        console.log(err);
        //do something;
      } else {
      }
    });
  //firebase logic goes here
};

export const getProducts = () => dispatch => {
  firebaseService
    .database()
    .ref("/products")
    .on("value", snapshot => {
      console.log(snapshot);
      let data = snapshot.val();
      let products = Object.values(data);
      dispatch(sendProductsToStore(products));
    });
};

export const sendProductsToStore = data => {
  return {
      type:PRODUCT_FETCH_SUCCESS,
      payload:data
  };
};
