import Banner from './components/Banner';
import CampoTexto from './components/CampoTexto';

function App() {
  return (
    <div className="App">
      <Banner/>
      <CampoTexto label="Nome"/>
      <CampoTexto label="cargo"/>
      <CampoTexto label="Imagem"/>
      
    </div>
  );
}

export default App;
