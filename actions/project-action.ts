"use server";

import { resend } from "@/lib/resend";

import ProjectInquiryEmail from "@/emails/project-inquiry";
import ProjectConfirmationEmail from "@/emails/project-confirmation";

export async function submitProjectInquiry(
  formData: FormData
): Promise<void> {
  try {
    const website = formData.get("website");

    // Honeypot Spam Protection
    if (website) {
      return;
    }

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const company = formData.get("company") as string;
    const projectType = formData.get("projectType") as string;
    const budget = formData.get("budget") as string;
    const timeline = formData.get("timeline") as string;
    const description = formData.get("description") as string;

    if (
      !name ||
      !email ||
      !projectType ||
      !budget ||
      !description
    ) {
      throw new Error("Required fields missing");
    }

    // Email To OdeyForge

    await resend.emails.send({
  from: "OdeyForge <info@odeyforge.com>",
  to: "info@odeyforge.com",
  subject: `New Project Inquiry — ${name}`,
  react: ProjectInquiryEmail({
    name,
    email,
    phone,
    company,
    projectType,
    budget,
    timeline,
    description,
  }),
});

    // Confirmation Email To Client

    await resend.emails.send({
      from: "OdeyForge <noreply@odeyforge.com>",
      to: email,
      subject: "We've Received Your Inquiry",
      react: ProjectConfirmationEmail({
        name,
      }),
    });

    console.log(
      `New project inquiry submitted by ${name} (${email})`
    );
  } catch (error) {
    console.error("Project inquiry failed:", error);

    throw new Error("Failed to submit inquiry");
  }
}