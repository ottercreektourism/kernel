// import React, { useState, useEffect } from "react";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import { GET_ME } from '../../../server/schemas/resolvers';
import { CREATE_GRID } from '../utils/mutations';
import Calendar from './Calendar';


const Grid = () => {
  const { loading, data } = useQuery(GET_ME);

  // retrieve kernel info
  const kernelList = data?.me || [];

  const [kernel, setKernel] = useState({
    kernelCollection: 'kernel1',
  });

  const [createGrid, { error }] = useMutation(CREATE_GRID);

  // TODO: something to identify which button were on, grabbing date from user data
  // TODO: if kernelcollection.id === button element id/key return and render each entry for that day into the modal.


  return(
    <div>
      <Calendar />
    </div>
  )
}


export default Grid;





















// function setKernels() {
//   // set equal to emply array so that all the kernels can join that array
//   const [kernel, setKernel] = useState([]);
//   const { id } = useParams();
//   // get all the kernels from the server to populate the array
//   useEffect(() => {
//     // fetching the data when the component first renders
//     console.log("useEffect ran successfully");
//     try {
//       // TODO: usequery call instead
//       fetch(`http://localhost:3000/kernel/${id}`)
//       // TODO: || deployed app url
//         .then((res) => res.json())
//         .then((response) => setKernel(response));
//     } catch (error) {
//       console.log(error);
//     }
//   }, []);
// }

// export default setKernels;



