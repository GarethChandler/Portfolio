function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-transparent backdrop-blur-md text-[#8093F1] h-16 flex items-center px-20 justify-between z-1">
      <h2 className="text-3xl font-bold">Gareth Chandler</h2>
      <nav>
        <ul className="flex space-x-8 text-Lg">
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
            <a href="#timeline" className="hover:underline">
              Timeline
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
