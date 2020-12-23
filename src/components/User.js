import React, { useState } from "react";
import onClickOutside from "react-onclickoutside";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const UserList = styled.ul`
  list-style: none;
  padding-top: 10px;
  padding-bottom: 10px;
  position: absolute;
`;

const UserItem = styled.li`
  padding-bottom: 20px;
  padding-top: 20px;
  padding-right: 20px;
  padding-left: 20px;
  list-style: none;
  background-color: #303030;
`;

//useState allows you to add state to your functional components.
// Using the useState hook inside a function component, you can create a piece of state without switching to class components.
function User({ title, items, multiSelect = false }) {
  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState([]); //array for multi selection
  const toggle = () => setOpen(!open);
  User.handleClickOutside = () => setOpen(false);

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
          <FontAwesomeIcon icon={faUserCircle} color="#ffffff" size="lg" />
        </div>
      </div>
      {open && (
        <UserList>
          {items.map((item) => (
            <UserItem key={item.id}>
              <span>{item.value}</span>
            </UserItem>
          ))}
        </UserList>
      )}
    </div>
  );
}

const clickOutsideConfig = {
  handleClickOutside: () => User.handleClickOutside,
};

export default onClickOutside(User, clickOutsideConfig);
