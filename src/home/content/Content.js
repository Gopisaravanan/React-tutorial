import React from "react";
import { UserConsumer } from "../userContext";

const Content = (props) => {
  return (
    <div>
      <h2>{props.text}</h2>
      <UserConsumer>
        {(text) => {
          return <h2>{text}</h2>;
        }}
      </UserConsumer>
    </div>
  );
};

export default Content;
