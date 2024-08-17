import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import './App.css';


function Home() {
  return (
    <div className='text-black'>
      <h1>Welcome to the Home Page</h1>
      <p>This is the homepage of the website.</p>
    </div>
  );
}


function App() {
  return (
    <Router>
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add more routes here for other pages */}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
