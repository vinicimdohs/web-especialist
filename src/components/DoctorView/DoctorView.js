import React from "react";

export default function DoctorView({ doctors }) {
  return (
    <div className="container center">
      <table style={styles.table} className="striped">
        <thead>
          <tr>
            <th style={{ width: "50%" }}>Médico</th>
            <th style={{ width: "50%" }}>Especialização</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map(
            ({nome, especializacao, _id}) => {
              return (
                <tr key={_id}>
                  <td>{nome}</td>
                  <td>{especializacao}</td>
                </tr>
              );
            }
          )}
        </tbody>
        <tfoot>
          <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

const styles = {
  table: {
    margin: "20px",
    padding: "10px",
  },
};
