import './App.css';
// import './CardTemplate/Cards'
import Nav from './navbar/nav';

import Cards from './CardTemplate/Cards';
 import Discover from './discover/Discover';
import Blog from './blog/blog';
import Footer from './footer/footer';

function App() {
  return (
    <>
     <Nav/>
    <Cards /> 
    <Discover/>
    
     <Blog/>
    <Footer/> 
    </>
  );
}

export default App;
