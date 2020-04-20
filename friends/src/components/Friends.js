import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import PrivateNavbar from "./PrivateNav";

class Friends extends React.Component {
  state = {
    friends: [],

    createFriend: { name: "", age: "", email: "", id: Date.now() }
  };

  getFriends = () => {
    axiosWithAuth()
      .get("/api/friends")
      .then(res =>
        this.setState({
          friends: res.data
        })
      )
      .catch(err => console.log(err));
  };

  makeFriend = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/friends", this.state.createFriend)
      .then(res => this.setState({ friends: res.data }))
      .catch(err => alert(err));
  };

  deleteFriend = (e, id) => {
    e.preventDefault();
    axiosWithAuth()
      .delete(`/api/friends/${id}`)
      .then(res =>
        this.setState({
          friends: res.data.filter(a => a.id !== id)
        })
      )
      .catch(err => console.log(err));
  };

  handleChange = e => {
    this.setState({
      createFriend: {
        ...this.state.createFriend,
        [e.target.name]: e.target.value
      }
    });
  };

  componentDidMount() {
    this.getFriends();
  }

  render() {
    console.log(this.state.friends);
    console.log(this.state.createFriend);
    return (
      <>
        <PrivateNavbar />
        <div className="friends-container">
          <form className="friends-form">
            <h1>Make a Friend</h1>
            <input
              type="text"
              onChange={this.handleChange}
              placeholder="name"
              name="name"
            />
            <input
              type="text"
              onChange={this.handleChange}
              placeholder="age"
              name="age"
            />
            <input
              type="text"
              onChange={this.handleChange}
              placeholder="email"
              name="email"
            />
            <button onClick={this.makeFriend}>Make a Friend</button>
          </form>
          <div className="fronds">
            <h2>Friends List</h2>
            {this.state.friends.map(f => (
              <div className="frond">
                <h2>{f.name}</h2>
                <p>{f.age}</p>
                <p>{f.email}</p>
                <button
                  className="delete"
                  onClick={e => this.deleteFriend(e, f.id)}
                >
                  bye
                </button>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default Friends;
