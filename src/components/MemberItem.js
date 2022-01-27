import React from "react";
import MemberInfoModal from "./MemberInfoModal";

const MemberItem = ({ indvMember }) => {
  return (
    <div className="memberCard">
      <h4>First Name : {indvMember.firstName}</h4>
      <h4>Last Name : {indvMember.lastName}</h4>
      <h4>Membership : {indvMember.membership}</h4>
      <MemberInfoModal indvMember={indvMember} />
    </div>
  );
};

export default MemberItem;
