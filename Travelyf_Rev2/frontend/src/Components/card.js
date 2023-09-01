import React from "react";
import { CDBCard, CDBCardImage, CDBCardBody, CDBCardTitle, CDBCardText, CDBIcon, CDBBtn } from "cdbreact"; // Assuming this is your import

const Card = ({ userDetails }) => {
  return (
    <CDBCard style={{ width: "25rem" }}>
      <CDBCardImage
        className="img-fluid"
        src={userDetails.backgroundImage} // Use relevant field from userDetails
      />
      <CDBCardImage className="mx-auto border" width="130px" src={userDetails.profileImage} />
      <CDBCardBody className="d-flex flex-column align-items-center mb-4">
        <CDBCardTitle>{userDetails.Username}</CDBCardTitle>
        <CDBCardText>{userDetails.email}</CDBCardText>
        <CDBCardText className="text-muted">{userDetails.mobile}</CDBCardText>
        <div>
          <CDBBtn size="small" color="dark"><CDBIcon fas icon="user-plus"/> Connect</CDBBtn>
          <CDBBtn className="ms-3" size="small" color="warning"> Send Message </CDBBtn>
        </div>
      </CDBCardBody>
    </CDBCard>
  );
};

export default Card;
