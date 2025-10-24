import { createFileRoute } from "@tanstack/react-router";
import Main from "../components/main/MainSection.tsx";

export const Route = createFileRoute("/")({
  component: Main,
});
