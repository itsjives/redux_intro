
const nameState = (state = {name: "DefaultName"}, action) => {
  let nextState = {name: state.name}

  switch(action.type){
    case 'CHANGE_NAME':
      nextState.name = action.name
      return nextState;
    default:
      return state;
  }

}

export default nameState;
