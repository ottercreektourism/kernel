import React from "react";
import { useQuery } from '@apollo/client';
import { GET_ME } from '../utils/queries';

// pass in actual props from user to display name


function Header() {
  const { loading, data } = useQuery(GET_ME);
  const userData = data?.me || [];
  console.log(userData)
console.log(userData.firstName)


  return (
    <div className="mx-auto mt-4 header">
      {console.log(userData)}
      <h1>Hi {userData.firstName}, how was your day?</h1>
    </div>

  );
}
export default Header;
