import { faHamburger } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header() {
  return (
    <div class="p-3 flex justify-between">
      <div>
        <h1 class="text-2xl font-bold">FAITH BAPTIST CHURCH</h1>
      </div>
      <div class="text-xl">
        <a href="/index" class="p-3 hover:text-secondary-dark">HOME</a>
        <a href="/about" class="p-3 hover:text-secondary-dark">ABOUT</a>
        <a href="/sermons" class="p-3 hover:text-secondary-dark">SERMONS</a>
        <FontAwesomeIcon icon={faHamburger} />
      </div>
    </div>
  );
}
