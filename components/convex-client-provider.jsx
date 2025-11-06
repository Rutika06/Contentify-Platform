"use client";

import { ConvexReactClient } from "convex/react";

import { useAuth } from "@clerk/nextjs";
import { ConvexProviderWithClerk } from "convex/react-clerk";

const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL;

// Create client only if URL is provided
let convex = null;
if (convexUrl) {
  convex = new ConvexReactClient(convexUrl);
}

export function ConvexClientProvider({ children }) {
  // If no URL is provided, show a warning but still render children
  if (!convexUrl || !convex) {
    if (typeof window !== "undefined") {
      console.warn(
        "NEXT_PUBLIC_CONVEX_URL is not set. Please configure your Convex deployment URL.\n" +
        "Run 'npx convex dev' to start a local Convex deployment, or set NEXT_PUBLIC_CONVEX_URL in your .env.local file."
      );
    }
    // Return children without Convex provider if URL is missing
    return <>{children}</>;
  }

  return (
    <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
      {children}
    </ConvexProviderWithClerk>
  );
}
