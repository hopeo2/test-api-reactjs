import React, { Component } from "react";
import axios from "axios";
import Loading from "./loading";

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
    // const res = await axios.get("https://coronavirus.m.pipedream.net/");
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
                  <h4>
                    {user.first_name} {user.last_name}
                  </h4>
                  <h5>{user.email}</h5>
                  <div className="row">
                    <div className="col-6">
                      <button
                        onClick={this.handleUpdate}
                        className="btn btn-info btn-sm"
                      >
                        Update
                      </button>
                    </div>
                    <div className="col-6">
                      <button
                        onClick={this.handleDelete}
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
  handleCreate = () => {};
  handleUpdate = (user) => {};
  handleDelete = (user) => {};
}

export default Users;
