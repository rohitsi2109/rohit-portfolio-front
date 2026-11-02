import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import AllProjects from './pages/AllProjects';
import BookingProvider from './components/booking/BookingProvider';

function App() {
  return (
    <Router>
      <BookingProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<AllProjects />} />
          </Routes>
        </Layout>
      </BookingProvider>
    </Router>
  );
}

export default App;
