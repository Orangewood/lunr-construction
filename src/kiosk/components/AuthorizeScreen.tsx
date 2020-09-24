import React from "react";
import CustomButton from "../../common/components/CustomButton";
import QuickBooks from "../images/QuickBooks.svg";

interface AuthorizeScreenProps {
  onLoginButtonClick: () => void;
}
export default function AuthorizeScreen(props: AuthorizeScreenProps) {
  const { onLoginButtonClick } = props;
  return (
    <div>
      <h3>Authorize through</h3>
      <img className='quickBooks' src={QuickBooks} />
      <CustomButton text={"wat"} />
    </div>
  );
}
