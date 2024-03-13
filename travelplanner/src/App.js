import React  from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Removed unnecessary imports

import Nav from './navbar/nav';
import Cards from './CardTemplate/Cards';
import Discover from './discover/Discover';
import Blog from './blog/blog';
import Footer from './footer/footer';
import NoMatch from './NoMatch'; // Optional catch-all route for unmatched paths
import SignUpForm from './components/signup';
import LoginForm from './components/login';
import Daysplan from './Daysplan/Daysplan';
import Roadmap from './SpotDetails/Roadmap';
// ... rest of your code
function App() {
  return (
    <Router>
      <div>
        {/* Your other components (Navbar, etc.) here */}  
        <Routes>
          {/* Route for signup */}
          <Route path='/' element={
          <><Nav/>
                  <Cards/>
                  <Discover/>
                  <Blog/>
                  <Footer/> </>
                
        }/>
           <Route path='/home' element={
          <><Nav/>
                  <Cards/>
                  <Discover/>
                  <Blog/>
                  <Footer/> </>
                
        }/>
          {/* <Route path='/' element={<Cards/>}/> */}
          <Route path='/' element={<Nav/>}/>
          {/* <Route path='/home' element={<Nav/>}/> */}

          <Route path="/signup" element={<SignUpForm />} />
           <Route path="/login" element={<LoginForm />} />
           <Route path="/Roadmap" element={<Roadmap />} />

        </Routes>
      </div>
    </Router> 

    
  );
}
export default App;