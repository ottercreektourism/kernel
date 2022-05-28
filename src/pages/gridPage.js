// import React, { useEffect, useState } from "react";
// import "../App.css";
// import Grid from "../components/Grid";

// function GridPage() {
//   const gridBase = {
//     cells: 5,
//     rows: 5
//   };

//   const [grid, setGrid] = useState(gridBase);
//   const [inputCells, setCells] = useState(grid.cells);
//   const [inputRows, setRows] = useState(grid.rows);

//   const handleGridSize = () => {
//     const res = {
//       cells: parseInt(inputCells),
//       rows: parseInt(inputRows)
//     };
//     setGrid({ ...res });
//   };

//   return (
//     <div className="grid">
//       <Grid
//         grid={grid}
//         handleGridSize={handleGridSize}
//         inputCells={inputCells}
//         inputRows={inputRows}
//         setCells={setCells}
//         setRows={setRows}
//       />
//     </div>
//   );
// }

import React from "react";

function GridPage() {
  return (
    <>
    <div>
      <p>grid</p>
    </div>
    </>
  );
}

export default GridPage;