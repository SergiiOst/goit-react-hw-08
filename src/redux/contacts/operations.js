import { createAsyncThunk } from "@reduxjs/toolkit";
import { contactsApi } from "../../config/contactsApi";

export const fetchContactsThunk = createAsyncThunk(
  "fetchContacts",
  async (_, thunkAPI) => {
    try {
      const { data } = await contactsApi.get("contacts");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContactsThunk = createAsyncThunk(
  "deleteContacts",
  async (id, thunkAPI) => {
    try {
      await contactsApi.delete(`contacts/${id}`);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContactsThunk = createAsyncThunk(
  "addContact",
  async (body, thunkAPI) => {
    try {
      const { data } = await contactsApi.post("contacts", body);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
