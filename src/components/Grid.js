import React from 'react';


// TodaysActivitiesDT variable will hold the object that all additional functions are in.
const Grid = ({
  grid,
  handleGridSize,
  inputCells,
  setCells,
  inputRows,
  setRows,
}) => {
    // Always return entire arrays with index 0 of both cells and rows arrays.
  const cells = new Array(grid.cells).fill(0);
  const rows = new Array(grid.rows).fill(0);

  const handleClick = (e) => {
    const item = e.target;
    // toggles whether the square is selected
    if (item.classList.contains('selected')) {
      item.classList.remove('selected');
    } else {
      item.classList.add('selected');
    }
  };

  return (
    <main>
        {/* rows array uses map method to create a new array  */}
        {/* Rows are the list and calls are the list items */}
      {rows.map((row, index) => (
        //   can use index as a key for items in the list because the order should not change.
        <ul className="row" key={index}>
            {/* Cells array uses map method to create a new array */}
          {cells.map((cell, index) => (
            <li key={index} className="item" onClick={handleClick} />
          ))}
        </ul>
      ))}

      <div>
          {/* TODO: just add one list item for every new activity selected */}
        {/* <label htmlFor="cells">Define cells in the row</label>
        <input
          type="text"
          placeholder="Define cells in the row"
          id="cells" */}
        {/* //   TODO: change the amount of rows when the number of total cells increases
        //   TODO: make this correspond to total cells, not cells in the row.
        //   TODO: Make there be always 5 cells per row */}
          value={inputCells}
          onChange={(e) => setCells(e.target.value)}
        {/* /> */}
      </div>

      <div>
        {/* <label htmlFor="rows">Define rows</label>
        <input
          type="text"
          placeholder="Define rows"
          id="rows" */}
        {/* // TODO: start with 2 rows (10 cells)
        // TODO: if 11-15, make 3 rows. if 16-20, make 4 rows. if 21-25, make 5 rows. */}
          value={inputRows}
          onChange={(e) => setRows(e.target.value)}
        {/* /> */}
      </div>
            {/* TODO: onClick should correspond to clicking 'add activity'*/}
      <button onClick={handleGridSize}>Add activity</button>
    </main>
  );
};

// function Grid() {
//     return(
//         <div>
//             <p>huge clickable image here</p>
//         </div>
//     )
// }

export default Grid;