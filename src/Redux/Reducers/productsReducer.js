const intialLoginState = [];

const productsReducer = (state = intialLoginState, action) => {
  switch (action.type) {
    case "PRODUCTS_DATA": {
      return [...action.payload];
    }
    case "ADDING_PRODUCTS": {
      return [action.payload, ...state];
    }
    default: {
      return state;
    }
  }
};

export default productsReducer;
