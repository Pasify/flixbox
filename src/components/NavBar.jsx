import { useState } from "react";
import Search from "./Search";
import Logo from "./Logo";
import NumResults from "./NumResults";

function NavBar({ children }) {
  const [query, setQuery] = useState("");
  return (
    <nav className="nav-bar">
      <Logo />
      {children}
    </nav>
  );
}

export default NavBar;
