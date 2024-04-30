import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';
import './style.css';

function App() {

  const members = [
    "Caralien Bloeme",
    "Sun Jun",
    "Sang Bao",
    "Olivia Arribas",
    "Bonginkosi Mdiadiana",
    "Arina Belomestnykh",
    "Jacqueline Likoki"
  ];

  const [checkedMembers, setCheckedMembers] = useState([]);

  const handleCheckbox = (member) => {
    if (checkedMembers.includes(member)) {
      setCheckedMembers(checkedMembers.filter((m) => m !== member));
    } else {
      setCheckedMembers([...checkedMembers, member]);
    }
  }

  return (
    <div className="container">
    <header className="header">
      <h2>Add members to Front-end development team</h2>
    </header>
    <div className="content">
      <div className="search">
        <span className="search-icon">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </span>
        <input type="text" placeholder="  Find Members.." />
      </div>
      <ul className="member-list">
        {members.map((member) => (
          <li key={member} className="member">
            <span className={`icon ${checkedMembers.includes(member) ? 'checked' : ''}`}>
              <FontAwesomeIcon icon={faUser} />
            </span>
            <label htmlFor={member} className={`${checkedMembers.includes(member) ? 'checked' : ''}`}>
              {member}
            </label>
            <div className="checkbox-container">
            <input
                type="checkbox"
                id={member}
                checked={checkedMembers.includes(member)}
                onChange={() => handleCheckbox(member)}
                className="custom-checkbox" // Add this class to apply the custom styles
              />

            </div>
          </li>
        ))}
      </ul>

      <div className="button-container">
          <button className="cancel-button">Cancel</button>
          <button className="save-button">Save</button>
        </div>
      </div>
    </div>
  );
}

export default App;
