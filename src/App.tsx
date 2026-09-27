import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { JoinModal } from './components/ui/JoinModal';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { ProgramsPage } from './pages/ProgramsPage';
import { TrainersPage } from './pages/TrainersPage';
import { MembershipPage } from './pages/MembershipPage';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';

const PAGE_TITLES: Record<string, string> = {
  '/': 'VOLT FITNESS — Train Beyond Limits',
  '/about': 'About Us — VOLT FITNESS',
  '/programs': 'Training Programs — VOLT FITNESS',
  '/trainers': 'Master Trainers — VOLT FITNESS',
  '/membership': 'Membership Plans — VOLT FITNESS',
  '/contact': 'Contact Us — VOLT FITNESS',
};

function DocumentTitleHandler() {
  const location = useLocation();

  useEffect(() => {
    const title = PAGE_TITLES[location.pathname] || '404 - Page Not Found — VOLT FITNESS';
    document.title = title;
  }, [location.pathname]);

  return null;
}

export function App() {
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);

  return (
    <BrowserRouter>
      <DocumentTitleHandler />
      <div className="min-h-screen bg-[#08090B] text-slate-100 font-sans selection:bg-[#E8FF00] selection:text-[#08090B] flex flex-col justify-between">
        {/* Sticky Header Navbar */}
        <Navbar onOpenJoinModal={() => setIsJoinModalOpen(true)} />

        {/* Main Route Content */}
        <main id="main-content" className="flex-1">
          <Routes>
            <Route path="/" element={<Home onOpenJoinModal={() => setIsJoinModalOpen(true)} />} />
            <Route path="/about" element={<About onOpenJoinModal={() => setIsJoinModalOpen(true)} />} />
            <Route path="/programs" element={<ProgramsPage onOpenJoinModal={() => setIsJoinModalOpen(true)} />} />
            <Route path="/trainers" element={<TrainersPage onOpenJoinModal={() => setIsJoinModalOpen(true)} />} />
            <Route path="/membership" element={<MembershipPage onOpenJoinModal={() => setIsJoinModalOpen(true)} />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* Reusable Footer */}
        <Footer />

        {/* Enrollment Demo Modal */}
        <JoinModal
          isOpen={isJoinModalOpen}
          onClose={() => setIsJoinModalOpen(false)}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;

