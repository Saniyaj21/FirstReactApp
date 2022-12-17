import React from "react";
import ContactCard from "./ContactCard";
const ContactList = (props) => {
    console.log(props);

    const renderContactList = props.contacts.map((contact) => {
        return (
            <ContactCard contact={contact} />
        );
    });

    return (
        <div >
            <h2>Contact Mannager</h2>
            {renderContactList}
            <hr />
        </div>
    );
};

export default ContactList;