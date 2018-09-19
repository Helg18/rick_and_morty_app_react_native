function mainReducer(state={}, action) {
  switch (action.type) {
    case 'SET_CHARACTERS': {
      return { ...state, ...action.payload }
    }
    case 'SET_LOCATIONS': {
      return { ...state, ...action.payload }
    }
    case 'SET_EPISODES': {
      return { ...state, ...action.payload }
    }
    case 'SET_SELECTED_OPTION': {
      return { ...state, ...action.payload}
    }
    default:
      return state;
  }
}

export default mainReducer;