import './App.css';
import Common from './helpers/common';
import Router from './router/Router';

function App(props) {
  return (
    <div className="App">
      <Router {...props} />
    </div>
  );
}

export default Common(App);
