import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { MdOutlineAddCircle } from "react-icons/md";
import { FaSearch } from "react-icons/fa";

function Input({ names, setNames }) {
  const [newName, setNewName] = useState("");
  const [search, setSearch] = useState("");

  function inputHandle(event) {
    setNewName(event.target.value);
  }
  function addName() {
    setNames((prevNames) => [...prevNames, { name: newName, checked: false }]);
    setNewName("");
  }

  function remove(index) {
    setNames((prevNames) => prevNames.filter((_, i) => i !== index));
  }

  function toggleCheck(index) {
    setNames((prevNames) =>
      prevNames.map((item, i) => {
        console.log(item);
        return i === index ? { ...item, checked: !item.checked } : item;
      })
    );
  }
  function addvalue(event) {
    setSearch(event.target.value);
    debugger;
  }

  function searchitem() {
    const matchedItemIndex = names.findIndex((item) => item.name === search);
    if (matchedItemIndex !== -1) {
      alert(`Item matched`);
      const matchedItem = names.splice(matchedItemIndex, 1)[0];
      setNames([matchedItem, ...names]);
    } else {
      alert(`Item not found`);
    }
  }

  const buttons =
    names.length > 0 ? (
      <>
        <div className="form__group field ml-5 ">
          <input
            type="input"
            className="form__field"
            placeholder="Enter"
            value={search}
            onChange={addvalue}
            required
          />
          <FaSearch
            className="addtask-icon"
            onClick={searchitem}
            style={{ fontSize: "2rem" }}
          />

          <label for="name" class="form__label">
            search
          </label>
        </div>
        {names.map((item, index) => (
          <div
            key={index}
            className="info-container d-flex align-center ml-5 mt-3"
          >
            <input
              className="checkbox-input mr-5"
              type="checkbox"
              onChange={() => toggleCheck(index)}
              checked={item.checked}
            />

            <p
              className={
                item.checked
                  ? "todo-para todo-checked mr-5"
                  : "todo-para todo-unchecked mr-5"
              }
            >
              {item.name}
            </p>
            <div className="hover-button mt-2">
              <button className="delete-button" onClick={() => remove(index)}>
                <FaTrashAlt className="delete-icon" />
              </button>
            </div>
          </div>
        ))}
      </>
    ) : (
      <h2>No Task Assigned</h2>
    );

  return (
    <div className="text-center">
      <div className="form__group field ml-5 ">
        <input
          type="input"
          className="form__field"
          placeholder="Name"
          name="name"
          id="name"
          value={newName}
          onChange={inputHandle}
          required
        />
        <MdOutlineAddCircle
          className="addtask-icon"
          onClick={addName}
          style={{ fontSize: "2rem" }}
        />
        <label for="name" class="form__label">
          Name
        </label>
      </div>
      {/* <input
        type="text"
        name=""
        id=""
        placeholder="Search"
        value={search}
        onChange={addvalue}
      />
      <button onClick={searchitem}>Search</button> */}
      {buttons}
    </div>
  );
}

export default Input;
