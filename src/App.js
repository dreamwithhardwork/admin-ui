import logo from './logo.svg';
import './App.css';
import Header from '../src/components-v1/header';
import SideMenu from '../src/components-v1/sidenav';
import Footer from '../src/components-v1/footer';
function App() {
  return (
    <div className="App">
       <Header></Header>
       
       <div style={{display:"flex"}}>
       <SideMenu></SideMenu>
       </div>

       
       <Footer></Footer>
    </div>
  );
}

export default App;
