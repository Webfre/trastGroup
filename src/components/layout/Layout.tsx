import type { ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { ScrollToTop } from "./ScrollToTop";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="site-shell">
      <ScrollToTop />
      <Header />
      <main className="site-main">{children}</main>
      <Footer />
    </div>
  );
}
