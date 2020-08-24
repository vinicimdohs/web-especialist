import React, { useState } from "react";
import {Link} from 'react-router-dom';
import {toast} from 'react-toastify';
import {isEmail} from 'validator';
import {useDispatch} from 'react-redux';
import {get} from 'lodash';

import Img from "../../img/veia.jpg";
import Img2 from "../../img/logotipo.png";
import {Form, Box, DivStyle} from "./styled";
import * as actions from '../../store/modules/auth/actions';

export default function Login() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    let formErrors = false;
    if (!isEmail(email)) {
      formErrors = true;
      toast.error('Email Inválido!');
    }
    if(formErrors) return;

    dispatch(actions.loginRequest({email, senha}));
  };

  return (
    <div>
      <Box>
        <Form onSubmit={handleSubmit}>
          <img src={Img2} alt="Especialist" />
          <h5>Logar no Especialist</h5>
          <input type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
          <input type="password" placeholder="Senha" value={senha} onChange={e => setSenha(e.target.value)} />
          <button type="submit" class="waves-effect waves-light btn blue">Entrar</button>
          <div>
            <Link to="/help">Precisa de ajuda?</Link> <Link to="/logon">Crie sua conta no Especialist</Link>
          </div>
        </Form>
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