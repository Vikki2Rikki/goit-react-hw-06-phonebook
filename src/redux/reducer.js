import { combineReducers } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/contactsSlice';
import { filterREducer } from './filter/filterSlice';

export const reducer = combineReducers({
  contacts: contactsReducer,
  filter: filterREducer,
});
