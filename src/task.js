import React, { useState } from "react";

const TaskComponent = () => {
  var [userName, updateUserName] = useState({
    name: "",
  });
  var [listOfName, updateListOfName] = useState([]);
  const handleInputField = (event) => {
    updateUserName({ ...userName, [event.target.name]: event.target.value });
  };
  const handleSubmitButton = () => {
    updateListOfName([...listOfName, userName]);
    updateUserName({
      name: "",
    });
  };
  return (
    <div>
      <div className="input_box">
        <input
          name="name"
          value={userName.name}
          placeholder="Please Enter Name"
          onChange={handleInputField}
        />
        <button onClick={() => handleSubmitButton()}>Enter</button>
      </div>
      <div className="output_box">
        {listOfName.map((value, index) => {
          return (
            <ul>
              <li key={index}> {value.name}</li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default TaskComponent;
