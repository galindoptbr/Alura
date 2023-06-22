import { useState } from "react";
import "./CampoTexto.css";

const CampoTexto = (props) => {

  const [valor, setValue] = useState('')

  const aoDigited = (event) => {
    setValue(event.target.value)
    console.log(valor);
  };

  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input
        value={valor}
        onChange={aoDigited}
        required={props.required}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default CampoTexto;
