import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function Header({ path }) {
  const isActive = (href) =>
    href === "/" ? path === "/" : path.startsWith(href);
  const [navOpen, toggleNav] = useState(false);

  const navLinks = [
    { href: "/", text: "Home" },
    { href: "/sermons", text: "Sermons" },
    {
      href: "/resources",
      text: "Resources",
      subLinks: [
        { href: "/blog", text: "Blog" },
        { href: "/resources/links", text: "Links" },
        { href: "https://classichymns.org/", text: "Hymn App" },
        { href: "/resources/counseling", text: "Biblical Counseling" },
      ],
    },
    { href: "/about", text: "About" },
    { href: "/contact", text: "Contact" },
  ];

  return (
    <div className="py-4 px-8 lg:px-16 bg-white flex justify-between items-center relative shadow-md">


      <div className="w-20 relative hidden lg:block">
        <a href="/">
          <img src="/imgs/Church-Logo-Color.png" alt="Faith Baptist Church Logo" />
        </a>
      </div>


      <div className="text-2xl text-accent font-serif relative block lg:hidden">
        <a href="/">
          <p>Faith Baptist Church</p>
        </a>
      </div>



      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center gap-5 font-serif text-xl text-primary-dark">
        {navLinks.map((link) => (
          <div key={link.href} className="relative group">
            <a
              href={link.href}
              className={`${
                isActive(link.href)
                  ? "underline underline-offset-4 decoration-accent decoration-2"
                  : ""
              } hover:text-secondary-dark py-2`}
            >
              {link.text}
            </a>
            {link.subLinks && (
              <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-0 py-2 w-fit z-10">
                {link.subLinks.map((subLink) => (
                  <a
                    key={subLink.href}
                    href={subLink.href}
                    className="block px-4 py-2 text-primary-dark text-nowrap hover:bg-gray-100"
                  >
                    {subLink.text}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>



      {/* Mobile Navigation */}
      <div className="lg:hidden">
        <button onClick={() => toggleNav(!navOpen)} className="text-2xl">
          <FontAwesomeIcon icon={navOpen ? faX : faBars} />
        </button>
      </div>



      {!navOpen && (
        <div className="lg:hidden absolute z-50 top-full min-h-screen right-0 w-full bg-white shadow-md">
          <nav className="flex  flex-col items-center gap-12 py-12 font-serif text-3xl text-primary-dark">
            {navLinks.map((link) => (
              <div key={link.href} className="w-full text-center">
                {link.subLinks ? (
                  <div className="relative">
                    <button className="w-full hover:text-secondary-dark">
                      {link.text}
                    </button>
                    <div className="bg-white rounded-md mt-2 py-2 w-full">
                      {link.subLinks.map((subLink) => (
                        <a
                          key={subLink.href}
                          href={subLink.href}
                          className="block px-4 py-2 text-primary-dark hover:bg-gray-100"
                        >
                          {subLink.text}
                        </a>
                      ))}
                    </div>
                  </div>
                ) : (
                  <a
                    href={link.href}
                    className={`${
                      isActive(link.href)
                        ? "underline underline-offset-4 decoration-accent decoration-2"
                        : ""
                    } w-full block hover:text-secondary-dark`}
                  >
                    {link.text}
                  </a>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}



    </div>
  );
}
