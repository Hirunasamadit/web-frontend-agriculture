import React from "react";
import regiImage from "../assets/Images/SignupBackground.png";

export default function RegisterPage() {
  return (
    <div
      style={{
        backgroundImage: `url(${regiImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "100vh", // Set the height to cover the entire viewport
        width: "100%", // Set the width to cover the entire viewport
      }}
    ></div>
  );
}
