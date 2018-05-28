export default function preferees(state=[], action) {
  if(action.type == 'selecteUser') {
      var prefereesCopy = [...state];
      var user = {punchline: action.punchline, name: action.name}
      prefereesCopy.push(user)
      return prefereesCopy;
  } else {
      return state;
  }
}
