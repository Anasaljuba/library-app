import React from "react";
import MembersList from "./MembersList";
import { observer } from "mobx-react";

const Home = () => {
  return (
    <div>
      <MembersList />
    </div>
  );
};

export default Home;
