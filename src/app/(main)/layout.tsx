import { ReactNode } from "react";
// import { Header } from "@/components/Header/Header";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      {/* <Header /> */}
      <main>{children}</main>
    </div>
  );
}
