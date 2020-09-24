import React, { Children, ReactNode, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "../scss/InformationContainer.scss";

interface ClockOutPageProps {
  [x: string]: ReactNode;
}

export default function ClockOutPage(props: ClockOutPageProps) {
  return (
    <>
      <div className='information-container'>
        {props.children}
      </div>
    </>
  );
}
