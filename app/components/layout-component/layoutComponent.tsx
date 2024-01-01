"use client";
import Header from "../Header/header";
import Footer from "../footer-component/footer";
import { Providers } from "@/app/providers/providers";

export default function LayoutComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <div className={`flex flex-col justify-center items-center`}>
        <Header />
        {children}
        <Footer />
      </div>
    </Providers>
  );
}
