import React from "react";

// className component
class AddContact extends React.Component {
    render() {
        return (
            <div >
                <h2>Add contact</h2>
                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
                        <input type="email" className="form-control" id="exampleInputPassword1" />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                <hr />
            </div>
        );
    };

};

export default AddContact;