import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import AllProjects from './pages/AllProjects';
import ChatWidget from './components/chat/ChatWidget';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<AllProjects />} />
        </Routes>
      </Layout>
      <ChatWidget />
    </Router>
  );
}

export default App;
