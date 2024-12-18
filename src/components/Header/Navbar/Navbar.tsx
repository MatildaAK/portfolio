const Navbar = () => {
  return (
    <nav>
      <div className="flex justify-center hidden sm:flex h-24 text-xl font-semibold">
        <div className="flex items-center space-x-6">
          <a
            href="/"
            className="mr-24"
          >
            Matilda Källström
          </a>
          <a
            href="#"
          >
            About
          </a>
          <a
            href="#"
          >
            Experience
          </a>
          <a
            href="#"
          >
            Projects
          </a>
          <a
            href="#"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
