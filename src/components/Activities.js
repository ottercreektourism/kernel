import React from "react";
import { v4 as uuidv4 } from 'uuid';

const initialList = [
  {
    id: "1",
    activity: "Caffeine",
  },
  {
    id: "2",
    activity: "Ate late",
  },
  {
    id: "3",
    activity: "Alcohol",
  },
  {
    id: "4",
    activity: "Smoking",
  },
  {
    id: "5",
    activity: "Pain",
  },
  {
    id: "6",
    activity: "Exercise",
  },
  {
    id: "7",
    activity: "Stress",
  },
  {
    id: "8",
    activity: "Sick",
  },
];

const Activities = () => {
  //   make the list stateful in order to enable user to add one list item
  const [activitiesList, setActivitiesList] = React.useState(initialList);
  const [activity, setActivity] = React.useState('');

  function handleChange(e) {
    // track input field's state
    setActivity(e.target.value);
  }

  function handleAdd() {
    // add item
    // concat method returns a new list instead of modifying the old one
    const newActivitiesList = activitiesList.concat({activity, id: uuidv4()});
    setActivitiesList(newActivitiesList);
    setActivity('');
  }

  const handleClick = (e) => {
      // toggles whether the square is selected
    const item = e.target;
    if (item.classList.contains("selected")) {
      item.classList.remove("selected");
    } else {
      item.classList.add("selected");
    }
  };

  return (
    <div>
      <div>
        <ul>
            {/* render new list items */}
          {activitiesList.map((item) => (
            <li key={item.id} className="item listItems" onClick={handleClick}>{item.activity}</li>
          ))}
        </ul>
      </div>
      <br/>
      <div>
        <input type="text" placeholder="Add new activity" value={activity} onChange={handleChange} />
      </div>
      <div>
        <button type="button" onClick={handleAdd}>Add</button>
      </div>
    </div>
  );
};

export default Activities;
