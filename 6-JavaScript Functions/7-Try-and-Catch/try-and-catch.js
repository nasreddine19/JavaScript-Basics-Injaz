// ==============================================
// (7) Try and Catch
// ==============================================

/**
 * DEFINITION:
 * Error handling mechanism that prevents program crashes.
 */

try {
  // Potentially dangerous code
  const result = 10 / 0;
  if (!isFinite(result)) {
    throw new Error("Division by zero!");
  }
} catch (error) {
  console.error("Caught error:", error.message);
} finally {
  console.log("This always runs");
}
