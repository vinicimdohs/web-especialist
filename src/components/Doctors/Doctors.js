import React from "react";
import Img from '../../img/avatar.jpg';
import Doctor from './Doctor';

export default function Doctors( doctors) {
  const { divStyle, avatar, ulStyle, box} = styles;
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