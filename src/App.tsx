import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { TopNav } from './components/TopNav';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Skills } from './pages/Skills';
import { Education } from './pages/Education';
import { Certificates } from './pages/Certificates';
import { Projects } from './pages/Projects';
import { Contact } from './pages/Contact';

function App() {
    return (
        <ThemeProvider>
            <Router basename="/portfolio_new_edition">
                <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
                    <TopNav />
                    <main className="">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/sobre-mi" element={<About />} />
                            <Route path="/habilidades" element={<Skills />} />
                            <Route path="/educacion" element={<Education />} />
                            <Route path="/certificados" element={<Certificates />} />
                            <Route path="/proyectos" element={<Projects />} />
                            <Route path="/contacto" element={<Contact />} />
                        </Routes>
                    </main>
                </div>
            </Router>
        </ThemeProvider>
    );
}

export default App;
