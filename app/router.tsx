// app/router.tsx
import { createRouter as createTanStackRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

//You won't have a routeTree.gen.ts file yet.
//This file will be generated when you run TanStack Start for the first time.

// Transtack start is an ssr framework
export function createRouter() {
  const router = createTanStackRouter({
    routeTree,
    scrollRestoration: true
  });

  return router;
}

declare module "@tanstack/react-router" {
  interface Register {
    router: ReturnType<typeof createRouter>;
  }
}
