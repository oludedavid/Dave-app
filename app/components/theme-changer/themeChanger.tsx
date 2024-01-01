import { useTheme } from "next-themes";
import { IoMoonOutline } from "react-icons/io5";
import { IoMoonSharp } from "react-icons/io5";
export default function ThemeChanger() {
  const { theme, setTheme } = useTheme();
  //he current theme is: {theme}
  return (
    <div className="">
      {theme === "dark" ? (
        <button onClick={() => setTheme("light")}>
          <IoMoonOutline size={40} className="text-white " />
        </button>
      ) : (
        <button onClick={() => setTheme("dark")}>
          <IoMoonSharp size={40} />
        </button>
      )}
    </div>
  );
}
