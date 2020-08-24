import React, { useState } from "react";

import {DivStyle} from './styled';
import Img from "../../img/logotiposf.png";
import Toggle from "../../components/Toggle/Toggle";
import Cliente from "../../components/CadastroCliente";
import Hospital from "../../components/CadastroHospital";

export default function Logon() {
    const [showWindow, setShowWindow] = useState(false);
    const handleShowWindow = (isChecked) => {
        setShowWindow(isChecked);
    };

  return (
    <div>
        <DivStyle>
            <img src={Img} alt="Especialist" />
            <h2>Crie sua conta</h2>
        </DivStyle>
        <br/>
        <Toggle description1="Cliente" description2="Hospital" enabled={showWindow} onToggle={handleShowWindow} />
        {showWindow ? <Hospital /> : <Cliente />}
    </div>
  );
}
