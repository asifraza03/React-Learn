// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform'
 
function App() {
  return (
    <>
    <Navbar title="Asif raza" home="Vinayak Nagar"/>
    <div className='container'>
    <Textform heading="Enter the text to Analyze"/>
   
    </div>
    </>
  )
}

export default App;
 