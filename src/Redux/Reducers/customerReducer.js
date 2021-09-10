const intialCustState = [];

const customersReducers = (state = intialCustState, action) => {
  switch (action.type) {
    case "CUSTOMERS_DATA": {
      return [...action.payload];
    }
    case "ADDING_CUSTOMERS": {
      return [action.payload, ...state];
    }
    default: {
      return state;
    }
  }
};

export default customersReducers;
