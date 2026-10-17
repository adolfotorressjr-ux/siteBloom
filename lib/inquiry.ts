export type Inquiry = Record<string, FormDataEntryValue | string>;
// Replace this adapter with a validated server endpoint when submissions are configured.
// Never display a sent confirmation until that endpoint confirms delivery.
export async function submitInquiry(
  inquiry: Inquiry,
): Promise<{ summary: string }> {
  return {
    summary:
      "siteBloom — Project brief\n\n" +
      Object.entries(inquiry)
        .map(
          ([key, value]) =>
            `${key.toUpperCase()}\n${String(value) || "Not provided"}`,
        )
        .join("\n\n"),
  };
}
