const intialLoginState = [];

const productsReducer = (state = intialLoginState, action) => {
  switch (action.type) {
    case "CUSTOMERS_DATA": {
      return [...state, ...action.payload];
    }
    case "ADDING_CUSTOMERS": {
      return [...state, ...action.payload];
    }
    default: {
      return state;
    }
  }
};

export default productsReducer;
