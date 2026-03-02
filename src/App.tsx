/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import Marquee from './components/Marquee';
import About from './components/About';
import Sectors from './components/Sectors';
import Problem from './components/Problem';
import Arsenal from './components/Arsenal';
import Advantage from './components/Advantage';
import ProofOfWork from './components/ProofOfWork';
import FAQ from './components/FAQ';
import Insights from './components/Insights';
import Footer from './components/Footer';

export default function App() {
  return (
    <main className="min-h-screen bg-background text-white selection:bg-accent selection:text-black font-sans">
      <Navbar />
      <Hero />
      <StatsBar />
      <Marquee />
      <About />
      <Sectors />
      <Problem />
      <Arsenal />
      <Advantage />
      <ProofOfWork />
      <FAQ />
      <Insights />
      <Footer />
    </main>
  );
}
