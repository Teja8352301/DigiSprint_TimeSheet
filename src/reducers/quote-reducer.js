let initialState = {};

export const quoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_QUOTE": {
      return action.payload;
    }
    default: {
      return initialState;
    }
  }
};
