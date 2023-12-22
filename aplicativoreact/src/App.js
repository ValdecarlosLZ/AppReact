import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
           <code>Lux Zero</code>
        </p>

      <a href="https://ava.seduc.mt.gov.br/admin/user.php" target="_blank">LOGIN</a>
      <a href="https://ava.seduc.mt.gov.br/login/signup.php" className="cadastro">Cadastre-se</a>
    
      </header>
    </div>
  );
}

export default App;
