import './assets/css/App.css';
import NavBar from './components/NavBar.js';
import WeatherPanel from './components/WeatherPanel';


function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <WeatherPanel></WeatherPanel>

    </div>
  );
}

export default App;
