import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 py-3 sm:py-4 flex justify-between items-center">
        {/* 로고 */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="오로지 로고" className="h-8 sm:h-10 w-auto" />
        </Link>

        {/* 네비게이션 */}
        <nav className="space-x-4 sm:space-x-6 text-sm sm:text-base text-gray-700 font-medium">
          <Link to="/services" className="hover:text-blue-600 transition">서비스</Link>
          <Link to="/portfolio" className="hover:text-blue-600 transition">포트폴리오</Link>
          <Link to="/contact" className="hover:text-blue-600 transition">견적 문의</Link>
        </nav>
      </div>
    </header>
  );
}