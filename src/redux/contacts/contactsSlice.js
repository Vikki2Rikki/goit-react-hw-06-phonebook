const { createSlice } = require('@reduxjs/toolkit');
const { contsctsInutialState } = require('./contactsInitialState');

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contsctsInutialState,
  reducers: {
    addContact(state, action) {
      state.contacts = [action.payload, ...state.contacts];
    },
    deleteContact(state, action) {},
  },
});
export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
