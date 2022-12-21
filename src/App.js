import './App.css';
import Nav from './components/Nav'
import ContentWrapper from './components/ContentWrapper'
import Footer from './components/Footer'
import { useSelector, useDispatch } from 'react-redux'
import { lightMode, darkMode} from './features/modeSlice'

function App() {
  const dispatch = useDispatch()
  const mode = useSelector( state => state.mode)
  return (
    <div style={{ backgroundColor: 'white', color: 'black' }} className="App">
      <Nav />
      <button onClick= {() => mode.darkMmode ? dispatch(lightMode()): dispatch(darkMode())} > {mode.darkMode ? "Light" : "Dark"} Mode </button>
      <ContentWrapper />
      <Footer />
    </div>
  );
}

export default App;
