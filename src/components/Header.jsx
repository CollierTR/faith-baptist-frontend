import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { faX } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const [navOpen, toggleNav] = useState(false)
  return (
    <div className="p-3 flex justify-between relative shadow-md">
      <div>
        <h1 className="text-2xl font-bold"><a href="/">FAITH BAPTIST CHURCH</a></h1>
      </div>
      <div className="text-xl">
        <a href="/" className="p-3 hover:text-secondary-dark">HOME</a>
        <a href="/about" className="p-3 hover:text-secondary-dark">ABOUT</a>
        <a href="/sermons" className="pl-3 pr-6 hover:text-secondary-dark">SERMONS</a>
        <FontAwesomeIcon onClick={() => {toggleNav(true)}} icon={faBars} />
      </div>
      { 
        navOpen &&
        <div className="bg-background text-primary-dark absolute rounded-2xl flex flex-col gap-3 top-0 right-0 pb-3 drop-shadow-xl">
          <div className="flex justify-end text-xl pr-3 pt-4 hover:text-red-400">
            <FontAwesomeIcon onClick={() => {toggleNav(false)}} icon={faX} />
          </div>
          <a href="/biblical-counseling" className="text-2xl px-6 pb-3 hover:text-secondary-dark">BIBLICAL COUNSELING</a>
          <a href="/resources" className="text-2xl px-6 pb-3 hover:text-secondary-dark">RESOURCES</a>
          <a href="/contact" className="text-2xl px-6 pb-3 hover:text-secondary-dark">CONTACT</a>
        </div>
      }
    </div>
  );
}
