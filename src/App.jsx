import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";

import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContactsThunk } from "./redux/contactsOps";
import { selectIsError, selectIsLoading } from "./redux/selector";

export default function App() {
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  return (
    <>
      <h1 className="title">Phonebook</h1>

      <ContactForm />
      <SearchBox />
      <ContactList />
      {isLoading && <h2>Loading...</h2>}
      {isError && <h2>Something went wrong!</h2>}
    </>
  );
}
