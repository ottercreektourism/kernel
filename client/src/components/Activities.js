import React from "react";
import { v4 as uuidv4 } from 'uuid';


const initialList = [
  {
    id: "1",
    name: "Caffeine",
  },
  {
    id: "2",
    name: "Enough sleep",
  },
  {
    id: "3",
    name: "Ate late",
  },
  {
    id: "4",
    name: "Social Event",
  },
  {
    id: "5",
    name: "Alcohol",
  },
  {
    id: "6",
    name: "Smoking",
  },
  {
    id: "7",
    name: "Sex",
  },
  {
    id: "8",
    name: "Pain",
  },
  {
    id: "9",
    name: "Exercise",
  },
  {
    id: "10",
    name: "Stress",
  },
  {
    id: "11",
    name: "Sick",
  },
  {
    id: "12",
    name: "Not enough sleep",
  },
  {
    id: "13",
    name: "Meditation",
  },
  {
    id: "13",
    name: "Proper nutrition",
  },
];

// useState call checked() array -- when one is clicked, it will be added to array updating state, when clicked again removed from array. 
// array var will be array of Str that gets stored within Kernel
// in kernel we will have array of strings, only ones selected


const Activities = (props) => {
  //   make the list stateful in order to enable user to add one list item
  const [namesList, setNamesList] = React.useState(initialList);
  const [name, setName] = React.useState('');

  function handleChange(e) {
    // track input field's state
    setName(e.target.value);
  }

  function handleAdd() {
    // add item
    // concat method returns a new list instead of modifying the old one
    const newNamesList = namesList.concat({name, id: uuidv4()});
    setNamesList(newNamesList);
    setName('');
    // namesList.classList.add("selected");
  }

  const handleClick = (e) => {
      // toggles whether the square is selected
    const item = e.target;
    console.log(item.textContent)
    if (item.classList.contains("selected")) {
      item.classList.remove("selected");
      // new array everything except habit
      props.setCheckedHabits(props.checkedHabits.filter((habit) => habit !== item.textContent))
    } else {
      if(!props.checkedHabits.includes(item.textContent)) props.setCheckedHabits([...props.checkedHabits, item.textContent])
      item.classList.add("selected");
    }
    // setcheckedList func - if selected state add to array, if else remove from array 
  };

  return (
    <div>
      <div >
      <div>
        <ul>
            {/* render new list items */}
          {namesList.map((item) => (
            <li key={item.id} className="item listItems" onClick={handleClick}>{item.name}</li>
            ))}
        </ul>
      </div>
      <br/>
      <div>
        <input className=" d-flex col-5" type="text" placeholder="Add new" value={name} onChange={handleChange} />
      </div>
      <div className="d-flex col-5 m-2 justify-content-center">
        <button className="btn-dark col-5 addbtn"type="button" onClick={handleAdd}>Add</button>
      </div>
            </div>
    </div>
  );
};

export default Activities;
