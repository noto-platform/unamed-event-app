import { handleActions } from 'redux-actions';

export const initialState = {
  user: 'Johan Testsson'
};

export default handleActions({
  ['TEST']: (state, action) => ({
    ...state,
  })
}, initialState);
