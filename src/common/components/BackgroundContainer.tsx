import React, { ReactNode } from "react";
import { Container } from "react-bootstrap";
import "../scss/BackgroundContainer.scss";
import { connect , useDispatch } from 'react-redux';

interface BackGroundContainerProps {
  [x: string]: ReactNode;
  solid?: boolean;
  split?: boolean;
  nested?: boolean;
  inverted?: boolean;
  building?: boolean;
  home?: boolean;
}
const BackgroundContainer =(
  props: BackGroundContainerProps
): JSX.Element => {
  const { solid, split, nested, inverted, building, home, brand } = props;

  const BackGroundSelection = () => {
    if (solid) return "solid-grey-background";
    if (brand) return "brand-background";
    if (split) return "split-background";
    if (nested) return "nested";
    if (inverted) return "nested-inverted";
    if (building) return "kiosk-start";
    if (home) return "kiosk-home";
  };

  return (
    <>
    
      <div className={BackGroundSelection()}> {props.children} </div>
    </>
  );
}
const mapStateToProps = (state) => ({ admin: state.admin });

export default connect(mapStateToProps)(BackgroundContainer);
