import React from "react";

function UserProfile({ data, handleBackButton }) {
  console.log(data);
  return (
    <div>
      {Object.keys(data).length > 0 ? (
        <div class="card" style={{ width: "20rem" }}>
          <img src={data.picture} class="card-img-top" alt="..." />
          <div class="card-body">
            <p class="card-text">
              NAME:
              {} {data.title}.{data.firstName}
              {data.lastName}
            </p>
            <p>DATAOFBIRTH: {data.dateOfBirth}</p>
            GENDER:{data.gender}
            <p>
              ADDRESS:
              {data.location.street} {data.location.city} {data.location.state}{" "}
              {data.location.country}
              UPDATEDDATE:{data.updatedDate}
            </p>
          </div>

          <div>
            <center>
              <button
                className="btn btn-info"
                onClick={() => {
                  handleBackButton();
                }}
              >
                Back
              </button>
            </center>
          </div>
        </div>
      ) : (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
    </div>
  );
}

export default UserProfile;
