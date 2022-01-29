import React from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import query from "query-string";

const User = () => {
  const [user, setUser] = useState({});
  const location = useLocation();
  const navigate =  useNavigate();
  let params = useParams();

//   const parsed = query.parse(location.search);
//   console.log(parsed);

  useEffect(async () => {
    const res = await axios.get(`https://reqres.in/api/users/${params.id}`);
    setUser(res.data.data);
  }, []); 

  return (
    <>
      <img
        src={user.avatar}
        style={{ borderRadius: "50%", width: "100px" }}
        alt=""
      />
      <h4>
        {user.first_name} {user.last_name}
      </h4>
      <h5>{user.email}</h5>
      <button className="btn btn-secondary" onClick={() => {navigate("/users")}}>back to users</button>
    </>
  );
};

export default User;
