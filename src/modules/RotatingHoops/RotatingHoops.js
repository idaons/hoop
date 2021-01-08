import React from "react";
import HulaBW from "../../img/hoop.svg";
import { ReactSVG } from "react-svg";
import styled from "styled-components/macro";

const RotatingHoopsStyle = styled.div`
  & > * {
    position: absolute;
  }
  .rotate {
    margin-top: 10px;
    width: 100%;
    @keyframes App-logo-spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
    animation: App-logo-spin infinite 240s linear;
    svg {
      width: 100%;
      stroke: darken(@tertiary, 30%);
      fill: transparent;
    }
  }
  .rotate2 {
    top: -50%;
    left: -50%;
    width: 400%;
    @keyframes App-logo-spin2 {
      from {
        transform: rotate(360deg);
      }
      to {
        transform: rotate(0deg);
      }
    }
    animation: App-logo-spin2 infinite 2000s linear;
    svg {
      width: 100%;
      stroke: darken(@tertiary, 40%);
      fill: transparent;
    }
  }
`;

const RotateStyle = styled.div`
  margin-top: 10px;
  width: 100%;
  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  animation: App-logo-spin infinite 240s linear;
  svg {
    width: 100%;
    stroke: darken(@tertiary, 30%);
    fill: transparent;
  }
`;

const RotateStyle2 = styled.div`
  top: -50%;
  left: -50%;
  width: 400%;
  @keyframes App-logo-spin2 {
    from {
      transform: rotate(360deg);
    }
    to {
      transform: rotate(0deg);
    }
  }
  animation: App-logo-spin2 infinite 2000s linear;
  svg {
    width: 100%;
    stroke: darken(@tertiary, 40%);
    fill: transparent;
  }
`;

function RotatingHoops(props) {
  return (
    <RotatingHoopsStyle>
      <RotateStyle2>
        <ReactSVG src={HulaBW} />
      </RotateStyle2>
      <RotateStyle>
        <ReactSVG src={HulaBW} />
      </RotateStyle>
    </RotatingHoopsStyle>
  );
}

export default RotatingHoops;
