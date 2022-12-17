import React from 'react';
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {

  const contact = [
    {
      id: '1',
      name: 'Sani',
      email: "sani@gmail.com"
    },
    {
      id: '2',
      name: 'Shubha',
      email: "shubha@gmail.com"
    }
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
