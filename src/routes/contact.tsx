import { createFileRoute } from "@tanstack/react-router";


export const Route = createFileRoute("/contact")({
  component: () => (
    <div className="p-2">
      <h3>Cafe Keeper Contact</h3>
      <p>We specialize businesses.</p>
    </div>
  ),
});
