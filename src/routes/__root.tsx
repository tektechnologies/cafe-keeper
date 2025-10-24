import { createFileRoute, Outlet } from "@tanstack/react-router";
import Header from "../components/nav/HeaderMain.tsx";
import Footer from "../components/footer/FooterMain.tsx";

export const Route = createFileRoute("/")({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
