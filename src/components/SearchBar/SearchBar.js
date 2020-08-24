import React from "react";

export default function SearchBar({description}) {
  const {navStyle} = styles;  
  return (
        <nav style={navStyle}>
        <div class="nav-wrapper">
          <form>
            <div class="input-field">
              <input id="search" placeholder={description} type="search" required />
              <label class="label-icon" for="search"><i class="material-icons">search</i></label>
              <i class="material-icons">close</i>
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