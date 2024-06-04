import React from "react";
import { checkUser, getUsers } from "../database/users";
import Input from "./Input";
import Button from "./Button";


class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isloggedin: false,
      inputemail: '',
      inputpassword: '',
      // inputusername: '',
      user: null,
      status: '',
    };
  }

  setStatus = (input) => {
    this.setState({
      status: input,
    });
  };

  setUser = (user) => {
    this.setState({
      user: user,
    });
  };

  // setInputUsername = (input) => {
  //   this.setState({
  //     inputusername: input,
  //   });
  // };

  setInputPassword = (input) => {
    this.setState({
      inputpassword: input,
    });
  };

  setInputEmail = (input) => {
    this.setState({
      inputemail: input,
    });
  };


  render() {
    return (
      <>
        {this.state.isloggedin ? this.berhasillogin() : this.gagallogin()}
      </>
    )
  }

  berhasillogin() {
    const users = getUsers();
    return (
      <>
        <div className="card">
          <div className="card-body">

            <h3>Selamat Datang, {this.state.user.name}</h3>
            {this.state.status && <p>{this.state.status}</p>}
            <Button
               className="btn btn-primary w-full max-w-xs"
              name={'Logout'}
              onClick={() => {
                this.setState({ isloggedin: false });
                this.setStatus('Logout Berhasil');
              }}
            />
          </div>
        </div>
      </>
    )
  }

  gagallogin() {
    return (
      <>
        <div className="card">
          <div className="card-body">
            <div className="card-title">
              <h3>Login Dahulu</h3>
            </div>
            {this.state.status && <p>{this.state.status}</p>}
            <label>Email : </label>
            <Input
              className="input input-bordered w-full max-w-xs"
              type={"text"}
              placeholder={"email"}
              value={this.state.inputemail}
              onChange={(event) => {
                this.setInputEmail(event.target.value)
              }}
            />
            <label> Password : </label>
            <Input
              className="input input-bordered w-full max-w-xs"
              type={"password"}
              placeholder={"password"}
              value={this.state.inputpassword}
              onChange={(event) => {
                this.setInputPassword(event.target.value)
              }}
            />
            <br />
            <Button
              className="btn btn-primary w-full max-w-xs"
              name={'Login'}
              onClick={() => {
                const user = checkUser(
                  this.state.inputemail,
                  this.state.inputpassword
                );
                if (user) {
                  this.setState({ isloggedin: true });
                  this.setStatus('Login Berhasil');
                  this.setUser(user);
                  // const user = getUsers(users);
                } else {
                  this.setStatus('Login Gagal');
                }
                // console.log(user);
              }}

            >
            </Button>
          </div>
        </div>
      </>
    )
  }
}

export default Body;
