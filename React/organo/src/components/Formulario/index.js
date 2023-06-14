import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";

const Formulario = () => {
  const times = [
    'Programacao',
    'Front-End',
    'Data Science',
    'Devops',
    'UX e Design',
    'Mobile',
    'Inovacao e Gestao'
  ]

  const aoSalvar = (event) => {
    event.preventDefault()
    console.log('Formulario submetido');
  }

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <CampoTexto required={true} label="Nome" placeholder="Digite o nome" />
        <CampoTexto required={true} label="Cargo" placeholder="Digite o cargo" />
        <CampoTexto label="Imagem" placeholder="Digite o endereco da imagem" />
        <ListaSuspensa label="Time" itens={times}/>
        <Botao text='Criar Card' />
      </form>
    </section>
  );
};

export default Formulario;
