import React, { useEffect, useState }  from 'react'
import {Link} from "react-router-dom";
import axios from '../../services/axios';

import DoctorView from '../../components/DoctorView/DoctorView'


export default function DoctorList() {
    const [doctors, setDoctors] = useState([]);
    
  useEffect(() => {
    async function getDoctors() {
      const response  = await axios.get('/api/medicoHospital');
      setDoctors(response.data);
    }
    getDoctors();
  }, []);

    return (
        <div>
            <Link style={styles.button} to="/cliente" class="waves-effect waves-light btn blue"><i class="material-icons">arrow_back</i> Voltar</Link>
            <h1 className="center">Lista de Médicos</h1>
            <DoctorView doctors={doctors} />
        </div>
    )
}

const styles = {
    button: {
        margin: "20px",
        display: "flex",
        justifyContent: "center",
        height: "38px",
        width: "90px",
    }
}