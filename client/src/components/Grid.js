import React, { useState, useEffect } from "react";

function setKernels() {
  // set equal to emply array so that all the kernels can join that array
  const [kernel, setKernel] = useState([]);
  const { id } = useParams();
  // get all the kernels from the server to populate the array
  useEffect(() => {
    // fetching the data when the component first renders
    console.log("useEffect ran successfully");
    try {
      // TODO: usequery call instead
      fetch(`http://localhost:3000/kernel/${id}`)
      // TODO: || deployed app url
        .then((res) => res.json())
        .then((response) => setKernel(response));
    } catch (error) {
      console.log(error);
    }
  }, []);
}

export default setKernels;
