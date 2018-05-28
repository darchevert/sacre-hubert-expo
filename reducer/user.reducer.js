export default function user(state={login:false, email: null, password:null, firstName:null, lastName:null, companyName:null}, action) {
  if(action.type == 'signin' || action.type == 'signup') {
      var userCopy = Object.assign({}, state);
      userCopy.login = true;
      userCopy.email = action.email;
      userCopy.password = action.password;
      userCopy.firstName = action.firstName;
      userCopy.lastName = action.lastName;
      userCopy.companyName = action.companyName;
      return userCopy;
  } else {
      return state;
  }
}
