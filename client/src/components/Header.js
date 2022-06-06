import React from "react";

const name = "namePlaceholder";

// pass in actual props from user to display name


function Header() {
  return (
    <div className="mx-auto mt-4">
      <h3>Hi {name}, how was your day?</h3>{" "}
    </div>

  );
}
export default Header;
