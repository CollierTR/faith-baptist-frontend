import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { faX } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const [navOpen, toggleNav] = useState(false)
  return (
    <div className="p-3 flex justify-between relative">
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
        <div className="bg-primary text-primary-dark absolute flex flex-col gap-5 top-0 right-0 ">
          <FontAwesomeIcon onClick={() => {toggleNav(false)}} icon={faX} />
          <a href="">BIBLICAL COUNSELING</a>
          <a href="">RESOURCES</a>
          <a href="/contact">CONTACT</a>
        </div>
      }
    </div>
  );
}
