export default function counterReducer(state, action) {
  if(action.type == 'selecteUser') {
      var prefereesCopy = [...state.preferees];
      var user = {punchline: action.punchline, name: action.name}
      prefereesCopy.push(user)
      return { preferees: followingCopy}
  } else {
      return { preferees: [] }
  }
}
