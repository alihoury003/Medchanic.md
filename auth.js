// ============================================================
// AUTH FUNCTIONS
// All signup, login, logout, and password reset logic.
// These talk directly to Appwrite — no fake storage here.
// ============================================================

import { account, ID } from "./appwrite.js";

// ---- SIGN UP ----
export async function signUp(name, email, password) {
  // Creates a real account in Appwrite with Argon2 password hashing
  await account.create(ID.unique(), email, password, name);
  // Immediately log in after signup
  await logIn(email, password);
}

// ---- LOG IN ----
export async function logIn(email, password) {
  await account.createEmailPasswordSession(email, password);
}

// ---- LOG OUT ----
export async function logOut() {
  await account.deleteSession("current");
}

// ---- GET CURRENT USER ----
// Returns the logged-in user, or null if nobody is logged in
export async function getCurrentUser() {
  try {
    return await account.get();
  } catch (err) {
    return null;
  }
}

// ---- FORGOT PASSWORD (Step 1) ----
// Sends a real password reset email via Appwrite
export async function sendPasswordReset(email) {
  // The URL below is where Appwrite will redirect the user after they
  // click the reset link in their email. Update this once you have
  // your real domain (e.g. https://medchanic.md/reset-password.html)
  const resetURL = `${window.location.origin}/pages/reset-password.html`;
  await account.createRecovery(email, resetURL);
}

// ---- FORGOT PASSWORD (Step 2) ----
// Called on the reset-password page after user clicks the email link
export async function confirmPasswordReset(userId, secret, newPassword) {
  await account.updateRecovery(userId, secret, newPassword);
}
