import Hero from '../components/sections/Hero';
import ClientWork from '../components/sections/ClientWork';
import Services from '../components/sections/Services';
import Process from '../components/sections/Process';
import Projects from '../components/sections/Projects';
import Experience from '../components/sections/Experience';
import FAQ from '../components/sections/FAQ';
import Contact from '../components/sections/Contact';

const Home = () => {
    return (
        <main>
            <Hero />
            <ClientWork />
            <Services />
            <Process />
            <Projects />
            <Experience />
            <FAQ />
            <Contact />
        </main>
    );
};

export default Home;
