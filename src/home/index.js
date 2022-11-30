import React from "react";
import Head from "./header/index";
import Foot from "./footer";
import Cont from "./content";
import { UserProvider } from "./userContext";

const Main = () => {
  return (
    <>
      <div>
        <Head />
        <UserProvider value={"This data is passing by Context"}>
          <Cont />
        </UserProvider>
        <Foot />
      </div>
    </>
  );
};

export default Main;
