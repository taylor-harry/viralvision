import React, { useState } from "react";
import onClickOutside from "react-onclickoutside";

//useState allows you to add state to your functional components.
// Using the useState hook inside a function component, you can create a piece of state without switching to class components.
function Dropdown({ title, items, multiSelect = false }) {
  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState([]); //array for multi selection
  const toggle = () => setOpen(!open);
  Dropdown.handleClickOutside = () => setOpen(false);

  function handleOnClick(item) {
    //The some() method executes the callback function once for each element present in the array until it finds the one where callback returns a truthy value
    if (!selection.some((current) => current.id === item.id)) {
      //If no item instate then add item
      if (!multiSelect) {
        setSelection([item]);
      } else if (multiSelect) {
        setSelection([...selection, item]);
      }
    } else {
      let selectionAfterRemoval = selection;
      selectionAfterRemoval = selectionAfterRemoval.filter(
        (current) => current.id !== item.id
      );
      setSelection([...selectionAfterRemoval]);
    }
  }
  function isItemInSelection(item) {
    if (selection.find((current) => current.id === item.id)) {
      return true;
    }
    return false;
  }
  return (
    <div>
      <div
        tabIndex={0}
        role="button"
        onKeyPress={() => toggle(!open)} // !open gives opposite to current state
        onClick={() => toggle(!open)}
      >
        <div>
          <p>{title}</p>
        </div>
        <div>
          <p>{open ? "Close" : "Open"}</p>
        </div>
      </div>
      {open && (
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <button type="button" onClick={() => handleOnClick(item)}>
                <span>{item.value}</span>
              </button>

              <span>{isItemInSelection(item) && "Selected"}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

const clickOutsideConfig = {
  handleClickOutside: () => Dropdown.handleClickOutside,
};

export default onClickOutside(Dropdown, clickOutsideConfig);
