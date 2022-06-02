import { listen } from "dom-helpers";
import React from "react";

// Grid variable will hold the object that all additional functions are in.
const Grid = ({ grid, handleCellCount, addActivity }) => {
  // Always return entire arrays with index 0 of both columns and rows arrays.
  const cells = new Array(grid.cells).fill(0);
  const rows = new Array(grid.rows).fill(0);
//   const activitiesList = [
//     {
//         id: '1',
//         activity: "caffeine",
//     },
//     {
//         id: '2',
//         activity: "Ate late",
//     },
//     {
//         id: '3',
//         activity: "Alcohol",
//     },
//     {
//         id: '4',
//         activity: "Smoking",
//     },
//     {
//         id: '5',
//         activity: "Pain",
//     },
//     {
//         id: '6',
//         activity: 'Exercise',
//     },
//     {
//         id: '7',
//         activity: 'Stress',
//     },
//     {
//         id: '8',
//         activity: 'Sick',
//     },
//   ];

//   const Activities = () => {
//       return (
//         <ul>
//             {activitiesList.map((activitiesList) =>(
//                 <li key={item.id}>{item.activity}</li>
//             ))}
//         </ul>
//       )
//   }

  const handleClick = (e) => {
    const item = e.target;
    // toggles whether the square is selected
    if (item.classList.contains("selected")) {
      item.classList.remove("selected");
    } else {
      item.classList.add("selected");
    }
  };

  return (
    <main>
      {rows.map((row, index) => (
        <ul className="row" key={index}></ul>
      ))}

      {/* can use index as a key for items in the list because the order should not change. */}
      {cells.map((column, index) => (
        <li key={index} className="item" onClick={handleClick} />
      ))}

      {/* TODO: change the amount of rows when the number of total cells increases (CSS)*/}
      {/* TODO: just add one list item for every new activity selected */}

      <button onClick={handleCellCount}>Add activity</button>
      <button onClick={addActivity}>Done</button>
    </main>
  );
};

export default Grid;
