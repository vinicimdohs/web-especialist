import React, {useState} from "react";
import {toast} from 'react-toastify';
import {isEmail} from 'validator';
import {useDispatch} from 'react-redux';
import {get} from 'lodash';
import * as actions from '../../store/modules/auth/actions';

export default function LoginPaciente(props) {
    const dispatch = useDispatch();

  const prevPath = get(props, 'location.state.prevPath', '/cliente');

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
    
        dispatch(actions.loginPacienteRequest({email, senha, prevPath}));
    };

    return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />
      <button type="submit" className="waves-effect waves-light btn blue">
        Entrar
      </button>
    </form>
  );
}
