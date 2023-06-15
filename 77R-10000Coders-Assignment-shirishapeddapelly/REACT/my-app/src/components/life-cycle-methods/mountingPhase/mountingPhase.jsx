import React, { Component } from "react";

export default class Mounting extends Component {
  state = {
    //1
    usersdata: [],
  };
  getUsersData = async () => {
    //4
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    this.setState({ usersdata: data });
    const [Data, setdata] = useState("data");
    const [order, setorder] = useState("ASC");
    const sorting = (col) => {
      if (order === "ASC") {
        const sorted = [...Data].sort((a, b) =>
          a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
        );
        setdata(sorted);
        setorder("DSC");
      }
      if (order === "DSC") {
        const sorted = [...Data].sort((a, b) =>
          a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
        );
        setdata(sorted);
        setorder("ASC");
      }
    };
  };

  componentDidMount() {
    //3
    this.getUsersData();
  }

  render() {
    //2
    console.log(this.state.usersdata);
    return (
      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th onClick={(sorting) => "data.id"}>ID</th>
              <th onClick={(sorting) => "data.name"}> NAME</th>
              <th onClick={(sorting) => "data.email"}> EMAIL</th>
              <th onClick={(sorting) => "data.phone"}> PHONE</th>
            </tr>
          </thead>
          <tbody>
            {this.state.usersdata.map((val) => (
              <tr>
                <td>{val.id}</td>
                <td>{val.name}</td>
                <td>{val.email}</td>
                <td>{val.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
