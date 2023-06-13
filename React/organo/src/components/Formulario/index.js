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

  return (
    <section className="formulario">
      <form>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <CampoTexto label="Nome" placeholder="Digite o nome" />
        <CampoTexto label="Cargo" placeholder="Digite o cargo" />
        <CampoTexto label="Imagem" placeholder="Digite o endereco da imagem" />
        <ListaSuspensa label="Time" itens={times}/>
      </form>
    </section>
  );
};

export default Formulario;
