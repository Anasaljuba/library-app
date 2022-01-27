import { observer } from "mobx-react";
import React from "react";
import CreateMemberModal from "./CreateMemberModal";
import libraryStore from "./LibraryStore";
import MemberItem from "./MemberItem";

const MembersList = () => {
  const memeberList = libraryStore.membersData.map((member) => (
    <MemberItem indvMember={member} />
  ));
  return (
    <div className="memberList">
      <CreateMemberModal />
      {memeberList}
    </div>
  );
};

export default observer(MembersList);
