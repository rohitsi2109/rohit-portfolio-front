import Hero from '../components/sections/Hero';
import Experience from '../components/sections/Experience';
import Projects from '../components/sections/Projects';
import Contact from '../components/sections/Contact';
import Services from '../components/sections/Services';
import Achievements from '../components/sections/Achievements';
import ClientWork from '../components/sections/ClientWork';

const Home = () => {
    return (
        <main>
            <Hero />
            <Experience />
            <ClientWork />
            <Services />
            <Achievements />
            <Projects />
            <Contact />
        </main>
    );
};

export default Home;
