import React from "react";

export default function Hospital({ hospital }) {
  const {divStyle, avatar } = styles;
  const { nome, rua, bairro, numero } = hospital;
  return (
      <div style={divStyle}>
        <i style={avatar} className="large material-icons">
          local_hospital
        </i>
        <div>
          <h6>{nome}</h6>
          <h6>
            {rua} {bairro}, {numero}
          </h6>
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
    borderRadius: "50px",
  },
  avatar: {
    marginLeft: "20px",
  },
};
