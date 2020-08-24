import React from "react";

export default function SearchBar({description}) {
  const {navStyle} = styles;  
  return (
        <nav style={navStyle}>
        <div className="nav-wrapper">
          <form>
            <div className="input-field">
              <input id="search" placeholder={description} type="search" required />
              <label className="label-icon" for="search"><i className="material-icons">search</i></label>
              <i className="material-icons">close</i>
            </div>
          </form>
        </div>
      </nav>
    );
}

const styles = {
  navStyle: {
    backgroundColor: "white",
    boxShadow: "none",
  },
}