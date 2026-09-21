/**
 * Enquiry submission service.
 *
 * This is intentionally decoupled from the form component so a real backend
 * (REST endpoint, CRM webhook, email service, etc.) can be wired in later
 * without touching any UI code — just replace the body of submitEnquiry.
 */
export async function submitEnquiry(payload) {
  // Simulate network latency for a realistic submitting state.
  await new Promise((resolve) => setTimeout(resolve, 900));

  // TODO: replace with a real API call, e.g.:
  // const res = await fetch("/api/enquiries", {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify(payload),
  // });
  // if (!res.ok) throw new Error("Failed to submit enquiry");
  // return res.json();

  return { success: true, id: `ENQ-${Date.now()}` };
}
