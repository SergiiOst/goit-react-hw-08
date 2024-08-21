import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = (state) => state.contacts.contacts;
export const selectIsLoading = (state) => state.contacts.isLoading;
export const selectIsError = (state) => state.contacts.isError;
export const selectFilters = (state) => state.filter.filter;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilters],
  (contacts, filter) => {
    const searchContact = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return searchContact;
  }
);
