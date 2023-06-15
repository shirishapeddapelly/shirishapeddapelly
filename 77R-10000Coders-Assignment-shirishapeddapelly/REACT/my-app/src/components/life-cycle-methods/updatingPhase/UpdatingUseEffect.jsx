import React, { useEffect, useState } from "react";
import UserProfile from "./UserProfile";

function UpdatingUseEffect() {
  const [userData, setUserData] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [userprofile, setUserProfile] = useState({});

  const getDummyUsersdata = async () => {
    const response = await fetch(
      `https://dummyapi.io/data/v1/user?page=${pageNumber}&limit=10`,
      {
        method: "GET",
        headers: {
          "app-id": "63788520b209b82b5fcbdd63",
        },
      }
    );
    const { data } = await response.json();

    setUserData(data);
  };
  const handleButtonClicked = (num) => {
    setPageNumber(num);
  };

  useEffect(() => {
    getDummyUsersdata();
  }, [pageNumber]);

  const handleBackButton = () => {
    setUserProfile({});
  };

  const handleCardClick = async (id) => {
    console.log(id);
    const response = await fetch(`https://dummyapi.io/data/v1/user/${id}`, {
      method: "GET",
      headers: {
        "app-id": "63788520b209b82b5fcbdd63",
      },
    });

    const data = await response.json();
    setUserProfile(data);
    console.log(data);
  };

  console.log(Object.keys(userprofile).length > 0);
  return (
    <div>
      {userData.length > 0 ? (
        !Object.keys(userprofile).length > 0 ? (
          <React.Fragment>
            <div className="container mt-4">
              <div className="row">
                {userData.map((user) => (
                  <div className="col-md-6">
                    <div
                      className="card p-5 mt-4"
                      key={user.id}
                      onClick={() => {
                        handleCardClick(user.id);
                      }}
                    >
                      <div className="row">
                        <div className="col-md-4">
                          <img
                            src={user.picture}
                            alt="picture_title"
                            className="img-fluid"
                          />
                        </div>
                        <div className="col-md-8 ps-2">
                          <p>{user.id}</p>
                          <strong>
                            {user.title} {user.firstName} {user.lastName}
                          </strong>
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
                  handleButtonClicked(num);
                }}
              >
                {num}
              </button>
            ))}
          </React.Fragment>
        ) : (
          <UserProfile data={userprofile} handleBackButton={handleBackButton} />
        )
      ) : (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
    </div>
  );
}

export default UpdatingUseEffect;
