
import './App.css';
import Header from '../src/components-v1/header';
import SideMenu from '../src/components-v1/sidenav';
import Footer from '../src/components-v1/footer';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from '../src/reducer/rootReducer';

const store = createStore(rootReducer)

function App() {
  return (
    <Provider store={store}>

    
    <div className="App">

      {/*-------------------- header section -------------------------*/}
       <Header></Header>

       {/*-------------------- middle section -------------------------*/}
       <div style={{display:"flex"}}>
       <SideMenu></SideMenu>
      </div>
       
       {/*-------------------- footer section -------------------------*/}
       <Footer></Footer>
    </div>

    </Provider>
  );
}

export default App;
