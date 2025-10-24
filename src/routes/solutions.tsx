import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/solutions")({
  component: () => (
    <div className="p-2">
      <h3>Cafe Keeper Solutions</h3>
      <p>We specialize businesses.</p>
    </div>
  ),
});
