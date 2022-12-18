import React from "react";

// className component
class AddContact extends React.Component {

    state = {
        name: "",
        email: "",

    };
    add = (e) => {
        e.preventDefault();
        if (this.state.name === "" || this.state.email === "") {
            alert("All the field are required");
            return
        }
        console.log(this.state);
    };

    render() {
        return (
            <div >
                <h2>Add contact</h2>
                <form onSubmit={this.add}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={this.state.value} onChange={(e) => this.setState({ name: e.target.value })} />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
                        <input type="email" className="form-control" id="exampleInputPassword1" value={this.state.value} onChange={(e) => this.setState({ email: e.target.value })} />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                <hr />
            </div>
        );
    };

};

export default AddContact;