import { createFileRoute } from "@tanstack/react-router";
import React from "react";

export const Route = createFileRoute("/about")({
  component: () => (
    <div className="p-2">
      <h3>About Cafe Keeper</h3>
      <p>We specialize businesses.</p>
    </div>
  ),
});
