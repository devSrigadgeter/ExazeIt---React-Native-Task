import {SET_USER_NAME} from '../Actions/ActionTypes';

const initialState = {
  userName: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_NAME:
      return {
        ...state,
        userName: action.userName,
      };
    default:
      return state;
  }
};
