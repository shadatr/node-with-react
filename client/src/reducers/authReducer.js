import { FETCH_USER } from '../actions/types';
function authReducer(state = null, action) {
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false;
    default:
      return state;
  }
}

export default authReducer;
