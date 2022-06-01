import React, { useEffect, useState } from "react";
import "../App.css";
import Grid from "../components/Grid";
// import TodaysActivitiesDT from "../components/todaysActivitiesDT"

function GridPage() {
  // set default for cells and rows
  const gridBase = {
    cells: 5,
    rows: 2,
  };

  // Defining new state variables called grid, inputCells and inputRows to change the dimensions with user input.
  // TODO: might not need input cells-- maybe set default to 5. 
  // TODO: Add state with total cells so that when the user adds one, it would change the cells and add a new row if necessary.
  const [grid, setGrid] = useState(gridBase);
  const [inputCells, setCells] = useState(grid.cells);
  const [inputRows, setRows] = useState(grid.rows);

  // changes the grid size based on user input
  const handleGridSize = () => {
    const res = {
      cells: parseInt(inputCells),
      rows: parseInt(inputRows),
    };
    setGrid({ ...res });
  };

  return (
    <div className="grid">
      <div className="mx-auto mt-4 mb-4">
        <h3>Welcome to your Grid</h3>{" "}
      </div>
      <div className="mx-auto mt-4">
        <h5>Click on the grid squares to indicate which activities you've done today.</h5>{" "}
      </div>
      <Grid
        grid={grid}
        handleGridSize={handleGridSize}
        inputCells={inputCells}
        inputRows={inputRows}
        setCells={setCells}
        setRows={setRows}
      />
    </div>
  );
}

// function GridPage() {
//   return (
//     <>
//     <div className="mx-auto mt-4 mb-4"><h3>Welcome to your Grid</h3> </div>
//     <div className="mx-auto mt-4">
//       <h5>Click on the grid squares to see your daily results.</h5>{" "}
//     </div>
//     <Grid />
//     </>
//   );
// }

export default GridPage;
