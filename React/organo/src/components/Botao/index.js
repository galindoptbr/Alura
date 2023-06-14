import './Botao.css';

const Botao = (props) => {
    return (
        <button className='botao'>
            {props.text}
        </button>
    )
}

export default Botao;