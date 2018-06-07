import * as types from "../actionTypes.js";

const initialState = {
  selectedSources: []
};

export default function(state = initialState, action) {
  if (action.type === types.UPDATE_SOURCE_SELECTION) {
    return { ...state, selectedSources: action.payload.selectedSources };
  } else {
    return state;
  }
}
