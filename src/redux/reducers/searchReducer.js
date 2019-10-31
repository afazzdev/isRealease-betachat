const initialState = {
  search: [],
  searching: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SEARCH_CONTACT":
      return { ...state, search: action.payload, searching: false };

    case "SEARCHING_CONTACT":
      return {...state, searching: true}
    default:
      return state;
  }
};
