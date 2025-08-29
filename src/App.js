import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import { ThemeProvider } from './context/ThemeContext';
import { Helmet } from 'react-helmet-async';


export default function App() {
return (
    <>

<ThemeProvider>
<Router>
<Helmet>
<title>Rabia — Web Developer Portfolio</title>
<meta name="description" content="Portfolio showcasing projects, skills, and experience in React, Node, and modern web development." />
</Helmet>
<div className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100 transition-colors">
<Header />
<main className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
<Routes>
<Route path="/" element={<Home />} />
<Route path="/projects" element={<Projects />} />
<Route path="/about" element={<About />} />
<Route path="/contact" element={<Contact />} />
<Route path="*" element={<NotFound />} />
</Routes>
</main>
<Footer />
</div>
</Router>
</ThemeProvider>
</>
);
}