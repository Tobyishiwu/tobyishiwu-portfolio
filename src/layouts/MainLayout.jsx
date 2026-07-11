import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

function MainLayout() {
  return (
    <>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#030712] text-white">
        <Navbar />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default MainLayout;
