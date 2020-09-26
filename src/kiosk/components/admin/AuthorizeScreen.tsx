import React from "react";
import QuickBooks from "../../images/Quickbooks.svg";
import "../../scss/Admin.scss";

interface AuthorizeScreenProps {
  onLoginButtonClick: (clicked: boolean) => void;
}
export default function AuthorizeScreen(props: AuthorizeScreenProps) {
  return (
    <div className='authorize-container' id='authorize-container'>
      <h3>Authorize through</h3>
      <div id='quickbooks-container'>
        <img id='quickbooks-logo' src={QuickBooks} />
      </div>
    </div>
  );
}
