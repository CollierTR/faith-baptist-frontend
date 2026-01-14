import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { faX } from "@fortawesome/free-solid-svg-icons";

export default function Header({ path }) {
  const isActive = (href) =>
    href === "/"
      ? path === "/"
      : path.startsWith(href);
  const [navOpen, toggleNav] = useState(false);

  return (
    <div className="p-3 flex justify-between place-items-center relative shadow-md">
      <div>
        <h1 className="text-lg text-accent lg:text-2xl text-nowrap font-bold">
          <a href="/">FAITH BAPTIST CHURCH</a>
        </h1>
      </div>

      {/* sect: Desktop display only */}
      <div className="text-xl text-primary-dark">
        <div className="lg:flex gap-5 hidden">
          <a href="/" className={ isActive("/") ? "underline underline-offset-4 decoration-accent decoration-2" : "" }>
            Home
          </a>
          <a href="/sermons" className={ isActive("/sermons") ? "underline underline-offset-4 decoration-accent decoration-2" : "" }>
            Sermons
          </a>
          <a href="/about" className={ isActive("/about") ? "underline underline-offset-4 decoration-accent decoration-2" : "" }>
            About
          </a>
          <a href="/contact" className={ isActive("/contact") ? "underline underline-offset-4 decoration-accent decoration-2" : "" }>
            Contact
          </a>
        </div>
         {/* <FontAwesomeIcon
          onClick={() => {
            toggleNav(true);
          }}
          icon={faBars}
          className="inline-block hover:text-secondary-dark cursor-pointer hidden"
        /> */}
      </div>

      {
        // sect: This is for the Hamburger Menu
        navOpen && (
          <div className="parchment-background text-primary-dark text-xl lg:text-2xl absolute rounded-2xl flex flex-col gap-3 top-0 right-0 pb-3 drop-shadow-xl">
            <div className="flex justify-end text-2xl pr-3 pt-4 hover:text-red-400">
              <FontAwesomeIcon
                onClick={() => {
                  toggleNav(false);
                }}
                icon={faX}
                className="cursor-pointer"
              />
            </div>
            <a
              href="/"
              className="block lg:hidden px-6 pb-3 hover:text-secondary-dark"
            >
              HOME
            </a>
            <a
              href="/about"
              className="block lg:hidden px-6 pb-3 hover:text-secondary-dark"
            >
              ABOUT
            </a>
            <a
              href="/sermons"
              className="block lg:hidden px-6 pb-3 hover:text-secondary-dark"
            >
              SERMONS
            </a>
            <a
              href="/biblical-counseling"
              className="px-6 pb-3 hover:text-secondary-dark"
            >
              BIBLICAL COUNSELING
            </a>
            <a
              href="/resources"
              className="px-6 pb-3 hover:text-secondary-dark"
            >
              RESOURCES
            </a>
            
          </div>
        )
      }
    </div>
  );
}
