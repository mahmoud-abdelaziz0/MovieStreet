import React from "react";

const Profile = ({ userData }) => {
  return (
    <>
      <h1>{userData.username}</h1>
      <img src={userData.img} alt="" className="" style={{ width: "80px" }} />
    </>
  );
};

export default Profile;
