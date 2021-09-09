const intialLoginState = [];

const customersReducers = (state = intialLoginState, action) => {
  switch (action.type) {
    case "CUSTOMERS_DATA": {
      return [...action.payload];
    }
    case "ADDING_CUSTOMERS": {
      return [...action.payload];
    }
    default: {
      return state;
    }
  }
};

export default customersReducers;
