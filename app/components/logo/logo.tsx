import logoStyles from "./logo.module.scss";
import Link from "next/link";

export default function Logo() {
  return (
    <h1 className={`${logoStyles.logo}`}>
      DAVID<span className={`${logoStyles.sub_logo}`}>OLUDE</span>
    </h1>
  );
}
