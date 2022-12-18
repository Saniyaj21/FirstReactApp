import React, { useState } from 'react';
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {

  const [contacts, setContacts] = useState([]);

  const contact = [

  ];

  return (
    <div className="container ">
      <Header />
      <AddContact />
      <ContactList contacts={contact} />
    </div>
  );
}

export default App;
