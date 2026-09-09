import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useReveal } from "./hooks/useReveal";
import { useI18n } from "./i18n/LanguageContext";

export default function App() {
  const { lang } = useI18n();
  useReveal(lang);

  return (
    <div className="min-h-screen bg-navy-950">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
