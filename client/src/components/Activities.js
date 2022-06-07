import React from "react";
import { v4 as uuidv4 } from 'uuid';


const initialList = [
  {
    id: "1",
    name: "Caffeine",
  },
  {
    id: "2",
    name: "Ate late",
  },
  {
    id: "3",
    name: "Alcohol",
  },
  {
    id: "4",
    name: "Smoking",
  },
  {
    id: "5",
    name: "Pain",
  },
  {
    id: "6",
    name: "Exercise",
  },
  {
    id: "7",
    name: "Stress",
  },
  {
    id: "8",
    name: "Sick",
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
        <input type="text" placeholder="Add new" value={name} onChange={handleChange} />
      </div>
      <div>
        <button className="btn-dark"type="button" onClick={handleAdd}>Add</button>
      </div>
    </div>
  );
};

export default Activities;
