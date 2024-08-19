import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header'; 
import Footer from './components/footer'; 
import './App.css';
import HomePage from './HomePage';
import MembershipSection from './MembershipSection';
import Learnmore from './learnmore';
import Blog from './blog'

function App() {
  return (
    <Router>
      <div>
      <Header />
     
       
          <HomePage />
          <MembershipSection />
          <Learnmore />
          <Blog />

          <Footer />
      </div>
    
    </Router>
  );
}

export default App;
