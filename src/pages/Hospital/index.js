import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

import axios from '../../services/axios';
import Doctors from "../../components/Doctors/Doctors";
import { Header, Box, Container, Line, SubTitle } from "./styled";
import SearchBar from "../../components/SearchBar/SearchBar";

export default function Hospital() {
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
      <Header>
        <Link to="/" class="waves-effect waves-light btn blue">
          <i class="material-icons">exit_to_app</i> Sair
        </Link>
        <h2>Hospital São Lorenço</h2>
      </Header>
      <Box>
        <div>
          <h4 className="center">Médicos Ativos</h4>
          <Line></Line>
          <br></br>
          <Container>
            <div>
              <SearchBar description={"Pesquisar Médicos..."} />
            </div>
            <Doctors />
          </Container>
        </div>
        <div>
          <SubTitle>
            <h4 className="center">Todos os Médicos</h4>
            <a class="center">
                Novo Médico<i class="material-icons">add_circle</i>
            </a>
          </SubTitle>
          <Line></Line>
          <br></br>
          <Container>
            <div>
              <SearchBar description={"Pesquisar Médicos..."} />
            </div>
            <Doctors doctors={doctors} />
          </Container>
        </div>
      </Box>
    </div>
  );
}
