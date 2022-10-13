import logo from './logo.svg';
import './App.css';
import Message from './components/Message';

function App () {
  const project = 'проект на React.js'
  const homework = 'Домашнее задание выполнено'
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Message name={project} homework={homework} />
      </header>
    </div>
  );
}

export default App;
