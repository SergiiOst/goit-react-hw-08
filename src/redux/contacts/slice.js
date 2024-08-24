import { createSlice } from "@reduxjs/toolkit";
import {
  fetchContactsThunk,
  deleteContactsThunk,
  addContactsThunk,
} from "./operations";
import { logoutThunk } from "../auth/operations";

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
      .addCase(fetchContactsThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteContactsThunk.fulfilled, (state, action) => {
        state.contacts = state.contacts.filter(
          (contact) => contact.id !== action.payload
        );
      })
      .addCase(deleteContactsThunk.rejected, (state) => {
        state.isError = true;
      })
      .addCase(addContactsThunk.fulfilled, (state, action) => {
        state.contacts.push(action.payload);
      })
      .addCase(logoutThunk.fulfilled, () => {
        return initialState;
      });
  },
});

export const contactsReducer = slice.reducer;
