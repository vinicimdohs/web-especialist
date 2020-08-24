import React, { useState } from "react";
import {Link} from 'react-router-dom';

import Toggle from "../../components/Toggle/Toggle";
import Img from "../../img/veia.jpg";
import Img2 from "../../img/logotipo.png";
import {Container, Box, DivStyle} from "./styled";
import LoginHospital from "../../components/Login/LoginHospital";
import LoginPaciente from "../../components/Login/LoginPaciente";

export default function Login(props) {
  const [showForm, setShowForm] = useState(false);
    
  const handleShowForm = (isChecked) => {
        setShowForm(isChecked);
  };

  return (
    <div>
      <Box>
        <Container>
          <img src={Img2} alt="Especialist" />
          <h5>Logar como:</h5>
          <Toggle description1="Cliente" description2="Hospital" enabled={showForm} onToggle={handleShowForm} />
          {showForm ? <LoginHospital props={props} /> : <LoginPaciente props={props} />}
          <div>
            <Link to="/help">Precisa de ajuda?</Link> <Link to="/logon">Crie sua conta no Especialist</Link>
          </div>
        </Container>
      </Box>
      <Box>
        <DivStyle>
          <img src={Img} alt="mulherComMedico" />
          <div className="center">
            <div></div>
            <h6>
              Consultar a disponibilidade e os horarios dos médicos de sua
              cidade nunca foi tão fácil como agora com o <b>Especialist</b>!
              Cadastre-se já e tenha o conforto de fazer isso tranquilo dentro
              da sua casa!
            </h6>
            <div></div>
          </div>
        </DivStyle>
      </Box>
    </div>
  );
}