import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const dummy = [
  { id: 1, name: "dgg" },
  { id: 2, name: "aaa" },
  { id: 3, name: "ffff" },
  { id: 4, name: "dddd" },
  { id: 5, name: "ssss" },
];

function Profile() {
  const [profileData, setProfileData] = useState({});

  const params = useParams();
  const findData = () => {
    const data = dummy.filter((item) => item.id == params.id);
    console.log(data);
    return data[0].name;
  };

  return <div>{findData()}</div>;
}

export default Profile;
