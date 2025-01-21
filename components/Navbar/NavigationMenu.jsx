const NavigationMenu = ({ navLinks, activeSection }) => {
  return (
    <div className="hidden md:ml-6 md:block">
      <div className="flex space-x-4">
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={link.href}
            className={`${
              activeSection === link.href ? 'bg-primary text-white' : 'text-[#5A6D75]'
            } px-3 py-2 rounded-md text-[15px] font-medium hover:bg-primary/10 transition-colors duration-300`}
          >
            {link.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default NavigationMenu;