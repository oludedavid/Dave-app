"use-client";
import NavigationMenu from "../navigation-component/navBar";
import ThemeChanger from "../theme-changer/themeChanger";
import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  return (
    <header className={`w-screen`}>
      <NavigationMenu />
    </header>
  );
}
