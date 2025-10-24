import { createFileRoute } from "@tanstack/react-router";
import React from "react";

export const Route = createFileRoute("/pricing")({
  component: () => (
    <div className="p-2">
      <h3>Cafe Keeper Pricing</h3>
      <p>We specialize businesses.</p>
    </div>
  ),
});
