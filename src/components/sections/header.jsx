function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-[#0a0a0a] text-[#f3f4f6] h-16 flex items-center px-20">
      <nav>
        <ul className="flex space-x-4">
          <li>
            <a href="#about" className="hover:underline">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:underline">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
