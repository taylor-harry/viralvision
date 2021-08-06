import React, { useState } from "react";
import onClickOutside from "react-onclickoutside";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
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

function User({ title, items, multiSelect = false }) {
  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState([]); 
  const toggle = () => setOpen(!open);
  User.handleClickOutside = () => setOpen(false);

  function handleOnClick(item) {
    if (!selection.some((current) => current.id === item.id)) {
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
        onKeyPress={() => toggle(!open)}
        onClick={() => toggle(!open)}
      >
        <div>
          <FontAwesomeIcon icon={faInfoCircle} color="#ffffff" size="lg" />
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
