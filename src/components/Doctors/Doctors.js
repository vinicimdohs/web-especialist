import React from "react";
import Doctor from './Doctor';

export default function Doctors({doctors}) {
  const {ulStyle} = styles;
  return (
    <div>
      <ul style={ulStyle}>
            {doctors.map((doctor) => {
              const {hospital_id} = doctors;
              return <li key={hospital_id}><Doctor doctor={doctor} /></li>
            })}
        </ul>
    </div>
  );
}

const styles = {
  ulStyle: {
    display: "grid",
    gridTemplateColumns: "50% 50%",
  },
};