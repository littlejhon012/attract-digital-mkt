/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { Portfolio } from './components/Portfolio';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#38bdf8]/30 selection:text-white font-sans overflow-x-hidden">
      <div className="fixed inset-0 z-[-1] bg-[radial-gradient(circle_at_top_right,#144272,#050505_50%),radial-gradient(circle_at_bottom_left,#0A2647,#050505_60%)]"></div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
