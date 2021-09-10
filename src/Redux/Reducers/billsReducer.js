const intialCustState = [];

const billsReducers = (state = intialCustState, action) => {
  switch (action.type) {
    case "BILLS_DATA": {
      return [...action.payload];
    }
    case "ADDING_BILLS": {
      return [action.payload, ...state];
    }
    default: {
      return state;
    }
  }
};

export default billsReducers;
