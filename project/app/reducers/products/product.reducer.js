import * as types from "../../actions/products/product.types";

const initialState = {
  products: []
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.PRODUCT_FETCH_SUCCESS:
      let { products } = state;
      products = action.payload;
      return { ...state, products };
    default:
      return state;
  }
};

export default productReducer;
