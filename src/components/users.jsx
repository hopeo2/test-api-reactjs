import React, { Component } from "react";
import axios from "axios";
import Loading from "./loading";
import {Link} from "react-router-dom";

class Users extends Component {
  state = {
    users: [],
    isLoading: true,
  };

  async componentDidMount() {
    const res = await axios.get("https://reqres.in/api/users");
    this.setState({ users: res.data.data, isLoading: false });
    //********************************************************************** */
    // let payload = {
    //     token: "1pJOFq3ViNbHCWlNSKktWw",
    //     data: {
    //       name: "nameFirst",
    //       email: "internetEmail",
    //       phone: "phoneHome",
    //       _repeat: 300
    //     }
    // };
    // axios({
    //   method: "post",
    //   url: "https://app.fakejson.com/q",
    //   data: payload,
    // }).then(function (resp) {
    //   console.log(resp.data);
    // });
    //************************************************************************** */
    // const res = await axios.get("https://coronavirus.m.pipedream.net");
    // this.setState({users: res.data.rawData, isLoading: false});
  }

  render() {
    return (
      <>
        <button onClick={this.handleCreate} className="btn btn-primary btn-lg">
          Create user
        </button>
        <div className="row">
          {this.state.isLoading ? (
            <div className="row">
              <Loading />
            </div>
          ) : (
            this.state.users.map((user, index) => {
              return (
                <div className="col-4 text-center p-5" key={index}>
                  <img
                    src={user.avatar}
                    style={{ borderRadius: "50%", width: "100px" }}
                    alt=""
                  />
                  <Link to={`/users/${user.id}`}>
                  <h4>
                    {user.first_name} {user.last_name}
                  </h4>
                  </Link>
                  <h5>{user.email}</h5>
                  <div className="row">
                    <div className="col-6">
                      <button
                        onClick={() => {
                          this.handleUpdate(user);
                        }}
                        className="btn btn-info btn-sm"
                      >
                        Update
                      </button>
                    </div>
                    <div className="col-6">
                      <button
                        onClick={() => {
                          this.handleDelete(user);
                        }}
                        className="btn btn-danger btn-sm"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </>
    );
  }
  handleCreate = async () => {
    const newUser = {
      first_name: "mohammad",
      last_name: "seyedAghaie",
      email: "mohamadhosein20000@gmail.com",
      avatar:
        "http://neonlearn.ir/uploads/images/users/1587741072106-photo_2018-09-25_21-36-49.jpg",
    };
    const resp = await axios.post("https://reqres.in/api/users", newUser);
    this.setState({users: [...this.state.users, newUser]})
  }
  handleUpdate = async (user) => {
      user.first_name = "updated";
      const resp = await axios.put(`https://reqres.in/api/users/${user.id}`, user);
      const updatedUsers = [...this.state.users];
      const index = updatedUsers.indexOf(user);
      updatedUsers[index] = {...user};
      this.setState({users: updatedUsers});
  };
  handleDelete = async (user) => {
      const resp = await axios.delete(`https://reqres.in/api/users/${user.id}`);
      const newUsers = this.state.users.filter((u)=> {return u.id !== user.id});
      this.setState({users: newUsers});
  };
}

export default Users;
