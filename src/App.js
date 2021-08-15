import './App.css';
import Header from './Components/Header/index';
import Slider from './Components/Slider/index'
import Undergraduate from './Components/Undergraduate/index';
import Map from "./Components/Map/index";
import Partners from "./Components/Partners/index";
import Footer from "./Components/Footer/index";
import Copyright from './Components/Copyright/index';


function App() {
  return (
    <div className="App">
     <Header/>
     <Slider/>
     <Undergraduate/>
     <Map/>
     <Partners/>
     <Footer/>
     <Copyright/>
    </div>
  );
}

export default App;
