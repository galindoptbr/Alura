import Banner from './components/Banner';
import Formulario from './components/Formulario';
import Time from './components/Time';

function App() {
  return (
    <div className="App">
      <Banner/>
      <Formulario/>
      <Time nome="Programmer"/>
      <Time nome="Frontend"/>
      <Time nome="Data Science"/>
    </div>
  );
}

export default App;