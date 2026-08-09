import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

export default function MainLayout() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Navbar />
      <motion.main
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
        key={location.pathname}
      >
        <Outlet />
      </motion.main>
      <Footer />
    </div>
  );
}