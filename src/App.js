// import logo from './logo.svg';
import "./App.css";
import ContactUs from "./components/ContactUs";
import ContainerSection from "./components/ContainerSection";
import CounterSection from "./components/CounterSection";
import FooterSection from "./components/FooterSection";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Quiz from "./components/Quiz";
import StopWatch from "./components/StopWatch";


function App() {

  return (
    <div className="App">
     
       <Navbar/>
       <ContainerSection/>
       <Products/>
      <ContactUs/>
    <CounterSection/>
    <StopWatch/>
    <Quiz/>
       <FooterSection/>
       
     

    </div>
  );
}

export default App;
