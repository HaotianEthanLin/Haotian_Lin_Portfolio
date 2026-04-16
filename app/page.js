import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#FAF7F2]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <Intro />
        <About />
      </div>
      <Footer />
    </main>
  );
}
