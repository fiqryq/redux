const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "TAMBAH":
      return state + 1;
    case "KURANG":
      return state - 1;
    default:
      return state;
  }
};

export default counterReducer;
