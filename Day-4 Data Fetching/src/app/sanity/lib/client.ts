import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "hfuk26nt",  // Replace with your Sanity project ID
  dataset: "production",
  useCdn: true,
  apiVersion: "2025-01-12", // Use the latest API version
});

export default client;
