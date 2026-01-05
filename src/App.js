import './App.css';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Services from './Components/Services/Services';
import Intro from './Components/Intro/Intro';
function App() {
  return (
    <div className='main-app'>
      <Header />
      <Hero />
      <Services/>
      <Intro/>
    </div>
  ); 
}

export default App;