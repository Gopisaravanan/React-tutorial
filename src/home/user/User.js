import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const { id } = useParams();
  const { id2 } = useParams();
  return (
    <div>
      <h1>URL username : {id}</h1>
      <h1>URL password : {id2}</h1>
    </div>
  );
};

export default User;
