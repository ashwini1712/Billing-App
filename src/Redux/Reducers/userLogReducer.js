const intialLoginState = false;

const userLogReducer = (state = intialLoginState, action) => {
  switch (action.type) {
    case "USER_LOG": {
      return !state;
    }
    default: {
      return state;
    }
  }
};

export default userLogReducer;
