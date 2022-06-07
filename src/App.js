import './App.css';
import {Navbar, Footer} from "./component/component";
import RoutePath from './route/RoutePath';

function App() {

 (async function (){console.log( await fetch("/question"))})()
  return (
    <div className="App">
      <Navbar />
      <RoutePath />
      <Footer />
    </div>
  );
}

export default App;
