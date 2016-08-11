import { REQUEST_ALL_PLAYERS } from '../actions/index';
import { FILTER_PLAYERS } from '../actions/index';

const INITIAL_STATE = [];

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case REQUEST_ALL_PLAYERS:
      return action.payload.data;
    case FILTER_PLAYERS:
      return action.payload.data[0];
    default:
      return state;
  }
}

