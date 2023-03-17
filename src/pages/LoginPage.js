import React from "react";
import BackImage from "../assets/Images/LoginBackground.png";

export default function LoginPage() {
  return (
    <div
      style={{
        backgroundImage: `url(${BackImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "100vh", // Set the height to cover the entire viewport
        width: "100%", // Set the width to cover the entire viewport
      }}
    ></div>
  );
}
