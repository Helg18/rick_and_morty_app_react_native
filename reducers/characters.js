function characters(state={}, action) {
  switch (action.type) {
    case 'SET_CHARACTERS': {
      return { ...state, ...action.payload }
    }
    case 'SET_SELECTED_OPTION': {
      return { ...state, ...action.payload}
    }
    default:
      return state;
  }
}

export default characters;