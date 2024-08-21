import { createSlice } from "@reduxjs/toolkit";
import {
  fetchContactsThunk,
  deleteContactsThunk,
  addContactsThunk,
} from "./contactsOps";

const initialState = {
  contacts: [],
  isLoading: false,
  isError: false,
};

const slice = createSlice({
  name: "contact",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchContactsThunk.fulfilled, (state, action) => {
        state.contacts = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchContactsThunk.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(deleteContactsThunk.fulfilled, (state, action) => {
        state.contacts = state.contacts.filter(
          (contact) => contact.id !== action.payload
        );
      })
      .addCase(deleteContactsThunk.rejected, (state, action) => {
        state.isError = true;
      })
      .addCase(addContactsThunk.fulfilled, (state, action) => {
        state.contacts.push(action.payload);
      });
  },
});

export const contactsReducer = slice.reducer;
