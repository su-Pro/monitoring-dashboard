import { combineReducers } from '@reduxjs/toolkit';
import labels from './labelsSlice';
import notes from './cardsSlice';

const reducer = combineReducers({
  notes,
  labels,
});

export default reducer;
