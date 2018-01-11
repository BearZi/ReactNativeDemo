const cardList = (state, action) => {
  var state = state || [];

  switch (action.type) {
    case 'CALLAPI':
      return action.list
    default:
      return state
  }
}
  
export default cardList;