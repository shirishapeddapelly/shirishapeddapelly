import React, { Component } from "react";
//import { Link } from "react-router-dom";

export default class UpdatingPhase extends Component {
  state = {
    usersData: [],
    pageNumber: 1,
  };
  getDummyUsersdata = async () => {
    const response = await fetch(
      `https://dummyapi.io/data/v1/user?page=${this.state.pageNumber}&limit=10`,
      {
        method: "GET",
        headers: {
          "app-id": "63788520b209b82b5fcbdd63",
        },
      }
    );
    const { data } = await response.json();
    this.setState({ usersData: data });
  };

  componentDidMount() {
    this.getDummyUsersdata();
  }
  handleButtonClicked = (num) => {
    this.setState({ pageNumber: num });
  };
  componentDidUpdate(prevsProps, prevsState) {
    if (prevsState.pageNumber !== this.state.pageNumber) {
      this.getDummyUsersdata();
    }
  }
  handleCardClick = async (id) => {
    console.log(id);
    const response = await fetch(`https://dummyapi.io/data/v1/user/${id}`, {
      method: "GET",
      headers: {
        "app-id": "63788520b209b82b5fcbdd63",
      },
    });

    const data = await response.json();

    console.log(data);
  };

  render() {
    return (
      <>
        <div>
          {this.state.usersData.length > 0 ? (
            <React.Fragment>
              <div className="container">
                <div className="row">
                  {this.state.usersData.map((user) => (
                    <div className="col-md-6">
                      <div class="card mb-3">
                        <div
                          class="row g-0"
                          key={user.id}
                          onClick={() => this.handleCardClick(user.id)}
                        >
                          <div class="col-md-4">
                            <img
                              src={user.picture}
                              class="img-fluid rounded-start"
                              alt=""
                            />
                          </div>
                          <div class="col-md-8">
                            <div class="card-body">
                              <p>ID:{user.id}</p>
                              <h6 class="card-title">
                                {user.title}.{user.firstName}
                                {user.lastName}
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                <button
                  className="btn btn-info ms-3 mt-5"
                  onClick={() => {
                    this.handleButtonClicked(num);
                  }}
                >
                  {num}
                </button>
              ))}
            </React.Fragment>
          ) : (
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          )}
        </div>
      </>
    );
  }
}
