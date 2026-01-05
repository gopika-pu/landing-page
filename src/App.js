import './App.css';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Services from './Components/Services/Services';
import Intro from './Components/Intro/Intro';
import Feature from './Components/Feature/Feature';
function App() {
  return (
    <div className='main-app'>
      <Header />
      <Hero />
      <Services/>
      <Intro/>
      <Feature/>
    </div>
  ); 
}

export default App;