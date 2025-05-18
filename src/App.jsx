import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Navbar from './Components/Navbar';
import {About, Contact, Home, Skills} from './Pages';
import Titanic from '../src/Image/Titanic.mp3'
import { particlesCursor} from 'https://unpkg.com/threejs-toys@0.0.8 /build/threejs-toys.module.cdn.min.js'
import sakura from './assets/sakura.mp3'
   
const App = ()=> {
   
  return (
     <main className='bg-slate-300/20 h-[100vh]'>
      {/* <audio controls loop autoPlay >
        <source src={sakura} type='audio/mp3' />
      </audio> */}
        <Router>
           <Navbar/>
           <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/skills' element={<Skills/>}/>
            <Route path='/contact' element={<Contact/>}/>
           </Routes>
        </Router>
     </main>
  );
}

export default App
