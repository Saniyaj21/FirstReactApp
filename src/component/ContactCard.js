import React from "react";

const ContactCard = (props) => {
    const { id, name, email } = props.contact;

    return (
        <div>
            <div>
                <div>{name}</div>
                <div>{email}</div>
                <button className="btn btn-outline-danger">Delete</button>
            </div>
        </div>
    );

};

export default ContactCard;