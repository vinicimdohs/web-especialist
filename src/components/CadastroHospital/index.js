import React, { useState } from "react";
import { Link } from "react-router-dom";
import {toast} from 'react-toastify';
import {isEmail} from 'validator';
import {get} from 'lodash'; 

import axios from '../../services/axios';
import history from '../../services/history';

import { Form, Box, Div1, Div2, Div3, DivBtn, Container } from "./styled";
import Toggle from "../../components/Toggle/Toggle";

export default function CadastroCliente() {
  const [nome, setNome] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [rua, setRua] = useState('');
  const [bairro, setBairro] = useState('');
  const [numero, setNumero] = useState('');
  const [complemento, setComplemento] = useState('');
  const [cep, setCep] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [telefone, setTelefone] = useState('');
  const [eqDisponivel, setEqDisponivel] = useState('');
  const [email, setEmail] = useState('');
  const [confirmaEmail, setConfirmaEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmaSenha, setConfirmaSenha] = useState('');
  const [covid, setCovid] = useState(false);

  const handleCovid = (isChecked) => {
    setCovid(isChecked);
  };

  async function handleSubmit(e) {
    e.preventDefault();
    let formErrors = false;
    if (email !== confirmaEmail) {
      formErrors = true;
      toast.error('Os emails digitados devem ser iguais!');
    }

    if (!isEmail(email)) {
      formErrors = true;
      toast.error('Email Inválido!');
    }

    if (senha !== confirmaSenha) {
      formErrors = true;
      toast.error('As senhas digitados devem ser iguais!');
    }

    if(formErrors) return;

    try {
      await axios.post('/api/hospital',{
        nome,
        cnpj,
        rua,
        bairro,
        numero,
        complemento,
        cep,
        cidade,
        estado,
        telefone,
        eqDisponivel,
        email,
        senha,
        covid,
      });
      toast.success('Cadastro feito com sucesso!');
      history.push('/');
    } catch (error) {
      const errors = get(error, 'response.data.errors', []);
      console.log(errors);     
    }
  }

  return (
    <Box>
      <Form onSubmit={handleSubmit}>
        <Div1>
          <input type="text" placeholder="Nome" value={nome} onChange={e => setNome(e.target.value)} />
          <input type="text" placeholder="CNPJ" value={cnpj} onChange={e => setCnpj(e.target.value)} />
        </Div1>
        <Div2>
          <input type="text" placeholder="Rua" value={rua} onChange={e => setRua(e.target.value)} />
          <input type="text" placeholder="Bairro" value={bairro} onChange={e => setBairro(e.target.value)} />
          <input type="text" placeholder="Numero" value={numero} onChange={e => setNumero(e.target.value)} />
          <input type="text" placeholder="Complemento" value={complemento} onChange={e => setComplemento(e.target.value)} />
        </Div2>
        <Div3>
          <input type="text" placeholder="CEP" value={cep} onChange={e => setCep(e.target.value)} />
          <input type="text" placeholder="Cidade" value={cidade} onChange={e => setCidade(e.target.value)} />
          <input type="text" placeholder="Estado" value={estado} onChange={e => setEstado(e.target.value)} />
        </Div3>
        <div>
          <input type="text" placeholder="Telefone/Celular"  value={telefone} onChange={e => setTelefone(e.target.value)} />
        </div>
        <div>
          <input type="text" placeholder="Equipamentos disponíveis" value={eqDisponivel} onChange={e => setEqDisponivel(e.target.value)} />
        </div>
        <Div1>
          <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
          <input type="email" placeholder="Confirmar Email" value={confirmaEmail} onChange={e => setConfirmaEmail(e.target.value)} />
        </Div1>
        <Div1>
          <input type="password" placeholder="Senha" value={senha} onChange={e => setSenha(e.target.value)} />
          <input type="password" placeholder="Confirmar Senha" value={confirmaSenha} onChange={e => setConfirmaSenha(e.target.value)} />
        </Div1>
        <div>
        <Toggle description1="Atendendo Covid-19?" description2="" enabled={covid} onToggle={handleCovid} />
        </div>
        <Link to="/" class="waves-effect waves-light btn blue">
          Voltar
        </Link>
        <DivBtn>
          <button type="submit" className="waves-effect waves-light btn blue">Cadastrar</button>
        </DivBtn>
      </Form>
      <Container>
        <h3 className="center">Qual o papel do Hospital?</h3>
        <div></div>
        <h6 className="center">
          O Hospital fornecerá a lista de médicos plantonistas disponíveis!
        </h6>
        <div></div>
      </Container>
    </Box>
  );
}
