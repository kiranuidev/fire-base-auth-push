import firebaseService from "../../enviroments/firebase";
import { ADD_PRODUCT_FAILURE, ADD_PRODUCT_SUCCESS } from "./product.types";


const sessionLoading = () => ({
    type: types.SESSION_LOADING
  });
  
export const addProduct = product => dispatch => {
    firebaseService.database().ref('/products').push(product,err=>{
        if(err){
            console.log(err);
            //do something;
        }
    });
  //firebase logic goes here
};
