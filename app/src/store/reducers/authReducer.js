const initState = {
  authError: null,
  isLogging: true,
};

export const authReducer = (state = initState, action) => {
  switch (action.type) {
    case 'LOGIN_ERROR':
      return {
        ...state,
        authError: 'login failed',
      };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        authError: null,
      };
    case 'CHANGE_IS_LOGGING':
      return {
        ...state,
        isLogging: !state.isLogging,
      };
    default:
      return state;
  }
};
