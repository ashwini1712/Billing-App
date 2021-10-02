const initialCart = [];

const cartReducer = (state = initialCart, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      return [action.payload, ...state];
    }
    case "DELETE_FROM_CART": {
      return [!action.payload];
    }
    case "CLEAR_CART": {
      return [];
    }
    default: {
      return state;
    }
  }
};

export default cartReducer;
