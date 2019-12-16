import React from "react";
import Room from "../rooms/Room";

export default function Status() {
  return (
    <div className="row">
      <h2 className="center">Available Rooms</h2>
      <Room />
    </div>
  );
}
