
 import './App.css';
 import Best from './projectcomponent/best/Best';
 import Navbar from "./projectcomponent/navbar/Navbar";
 import Hero from "./projectcomponent/hero/Hero"
import Feature from "./projectcomponent/featured/Feature"
 import Footer from './projectcomponent/footer/Footer';

// import Navbar from "./components/navbar/Navbar";
// import Chemo from "./components/chemoimg/Chemo";
// import Destination from "./components/destnation/Destination"
// import Hero from "./components/hero/Hero"
// import Search from "./components/search/Search"
// import Selectimg from "./components/selectimg/Selectimg"
// import Selcts from "./components/selects/Selcts"
//  import Header from "./Componentthree/Header/Header"


// import Footer from "./components/footer/Footer"



function App() {
  return (
     <>
      <Navbar/>
     <Hero/>
     <Best/>
     <Feature/>
     <Footer/> 
      {/* <Navbar/>
     
     <Hero/>
     <Chemo/>
     <Destination/>
     <Search/>
     <Selectimg/>
     <Selcts/> */}
     {/* <Footer/>  */}
     
   
    
     
     
    </>
  );
}

export default App;
