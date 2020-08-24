import React, {useState} from "react";
import {get} from 'lodash';

export default function Doctor({ doctor }) {
  const [avatar, setAvatar] = useState("");
  const { divStyle, avatarStyle } = styles;
  const { nome, especializacao } = doctor;
  return (
    <div style={divStyle}>
      {get(avatar, "avatar", false) ? (
        <img style={avatarStyle} src={avatar} alt="NomeUsuario" />
      ) : (
        <i style={avatarStyle} className="large material-icons">account_circle</i>
      )}
      <div>
        <h6>{nome}</h6>
        <h6>{especializacao}</h6>
        <i className="material-icons">create</i>
        <i className="material-icons">check_circle</i>
      </div>
    </div>
  );
}

const styles = {
  divStyle: {
    backgroundColor: "#5EA9B5",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: "0px",
    borderRadius: "50px",
  },
  avatarStyle: {
    marginLeft: "20px",
    borderRadius: "50%",
    height: "80px",
    width: "80px",
  },
};
