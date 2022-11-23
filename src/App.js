import 'bootstrap/dist/css/bootstrap.min.css';
import { Row } from 'react-bootstrap';
import './App.css';
import Etudiants from './Composents/Etudiants/Etudiants';
import Formulaire from './Composents/Formulaire/Formulaire';
import Header from './Composents/Header/Header';
import Sidebar from './Composents/Sidebar/Sidebar';

function App() {

  return (
    <div className="App">
      <Header />
      <Row>
        <Sidebar />
        <Etudiants />
        <Formulaire />
      </Row>
    </div>
  );
}

export default App;
