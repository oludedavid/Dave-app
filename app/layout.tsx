import "./globals.css";
import Head from "next/head";
import Loader from "./loading";

import LayoutComponent from "./components/layout-component/layoutComponent";
import { Suspense } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Montserrat:wght@500;600;700;800;900&family=Open+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <LayoutComponent>
          <Suspense fallback={<Loader />}>
            <main style={{ paddingTop: "80px" }}>{children}</main>
          </Suspense>
        </LayoutComponent>
      </body>
    </html>
  );
}
