import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/Navbar';
import Category from './components/Category';
function App() {
  return (
    <>
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Category category="general" />} />
        <Route path="/business" element={<Category category="business" />} />
        <Route path="/entertainment" element={<Category category="entertainment" />} />
        <Route path="/health" element={<Category category="health" />} />
        <Route path="/science" element={<Category category="science" />} />
        <Route path="/sports" element={<Category category="sports" />} />
        <Route path="/technology" element={<Category category="technology" />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
