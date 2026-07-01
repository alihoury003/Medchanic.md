// ============================================================
// APPWRITE CONFIGURATION
// This file connects your website to your Appwrite backend.
// Your Project ID and Endpoint are already filled in below.
// ============================================================

import { Client, Account, ID } from "https://cdn.jsdelivr.net/npm/appwrite@16/+esm";

const client = new Client()
  .setEndpoint("https://nyc.cloud.appwrite.io/v1")
  .setProject("6a427cd000140ae72eb1");

export const account = new Account(client);
export { ID };
