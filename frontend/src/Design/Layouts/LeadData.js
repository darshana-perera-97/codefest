import React from "react";
import TopBar from "./TopBar";
import customer from "../Assets/customer.png";

export default function LeadData() {
  return (
    <div>
      <TopBar />
      <div className="right-contnet">
        <div className="right-content-inner">
          <div className="customer-details">
            <img src={customer} alt="customer image"/>
          </div>
        </div>
      </div>
    </div>
  );
}
