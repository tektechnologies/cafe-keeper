import { createFileRoute } from "@tanstack/react-router";
import Header from "../components/nav/HeaderMain";
import Main from "../components/main/MainSection";
import Footer from "../components/footer/FooterMain";
import React from "react";

export const Route = createFileRoute("/")({
  component: () => (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  ),
});
