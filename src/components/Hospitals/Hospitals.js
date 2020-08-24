import React from "react";
import Hospital from './Hospital';
import {Link} from 'react-router-dom';

export default function Hospitals({ hospitals }) {
  const { divStyle, avatar, ulStyle, linkStyle} = styles;
  return (
    <div>
      <ul style={ulStyle}>
        {hospitals.map((hospital) => {
          const {hospital_id} = hospital;
          return <li key={hospital_id}><Link to="/doctorlist" style={{color: "black"}}><Hospital hospital={hospital} /></Link></li>
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
