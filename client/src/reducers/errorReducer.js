import { GET_ERRORS, CLEAR_ERRORS } from '../../../../076 devconnector-final/devconnector_final/client/src/actions/types';

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ERRORS:
      return action.payload;
    case CLEAR_ERRORS:
      return {};
    default:
      return state;
  }
}
