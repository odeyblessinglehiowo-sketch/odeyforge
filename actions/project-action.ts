"use server";

import { resend } from "@/lib/resend";

import ProjectInquiryEmail from "@/emails/project-inquiry";
import ProjectConfirmationEmail from "@/emails/project-confirmation";

export async function submitProjectInquiry(
  formData: FormData
) {
  try {
    const website = formData.get("website");

    // Honeypot Spam Protection

    if (website) {
      return {
        success: false,
      };
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
      return {
        success: false,
        message: "Please complete all required fields.",
      };
    }

    // Email To OdeyForge

    await resend.emails.send({
      from: "onboarding@resend.dev",
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

    return {
      success: true,
      message:
        "Your inquiry has been submitted successfully.",
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
      message:
        "Something went wrong. Please try again.",
    };
  }
}