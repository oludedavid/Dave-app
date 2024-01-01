import Link from "next/link";
import buttonStyles from "./button.module.css";

export default function Button({
  children,
  className,
  href,
}: {
  children: React.ReactNode;
  className: string;
  href: string;
}) {
  const buttonClassName =
    className === "draw"
      ? `${buttonStyles.btn} ${buttonStyles.draw}`
      : `${buttonStyles.btn} ${buttonStyles.draw} ${buttonStyles.meet}`;

  return (
    <Link href={href} className={`${buttonClassName} w-5/6`}>
      {children}
    </Link>
  );
}
