import React, { useEffect, useState } from "react";
import {get} from 'lodash';
import {Link} from "react-router-dom";

import axios from '../../services/axios';
import { Box, Container1, Container2, Line } from "./styled";
import SearchBar from "../../components/SearchBar/SearchBar";
import Hospitals from "../../components/Hospitals/Hospitals";


export default function Pacient() {
  const [hospitals, setHospitals] = useState([]);
  const [cliente, setCliente] = useState({});
  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    async function getHospitals() {
      const response  = await axios.get('/api/hospital');
      setHospitals(response.data);
    }
    
    getHospitals();
  }, []);

  return (
    <div>
      <Box>
        <Container1>
          <Link to="/" class="waves-effect waves-light btn blue"><i class="material-icons">exit_to_app</i> Sair</Link>
          <div className="center">
            {get(avatar, 'avatar', false) ? (
              <img src={avatar} alt="NomeUsuario" />
            ):(
              <i className="large material-icons">account_circle</i>
            )}
          <h4>Matheus Brito</h4>
          </div>
        </Container1>
        <Container2>
          <div>
            <SearchBar description="Pesquisar Hospitais" />
          </div>
          <Line></Line>
          <h6>Lista de Hospitais</h6>
          <Hospitals hospitals={hospitals} />
        </Container2>
      </Box>
    </div>
  );
}
