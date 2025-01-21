"use client";
import { Mail } from "lucide-react";
import { MapPin } from "lucide-react";
import { MapPinPlus } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Collect form data
    const data = new FormData(e.target);
    const formData = Object.fromEntries(data.entries());

    // Define email templates
    // Define email templates
    const userEmailTemplate = `
  <!DOCTYPE html>
  <html>
  <head>
    <style>
      body {
        font-family: Arial, sans-serif;
        line-height: 1.6;
        background-color: #f9f9f9;
        margin: 0;
        padding: 0;
      }
      .email-container {
        max-width: 600px;
        margin: 20px auto;
        background: #ffffff;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        overflow: hidden;
      }
      .header {
        background-color: #0948B3;
        color: #ffffff;
        padding: 15px;
        text-align: center;
        font-size: 18px;
        font-weight: bold;
      }
      .content {
        padding: 20px;
        color: #333;
      }
      .footer {
        text-align: center;
        font-size: 14px;
        color: #777;
        padding: 10px;
        background: #f1f1f1;
      }
      .footer a {
        color: #0948B3;
        text-decoration: none;
      }
    </style>
  </head>
  <body>
    <div class="email-container">
      <div class="header">Thank You for Contacting DiniSoftBD</div>
      <div class="content">
        <p>Hi <strong>${formData.email}</strong>,</p>
        <p>
          Thank you for reaching out to us with the subject: <strong>${formData.subject}</strong>.
          We have received your message and will respond to your inquiry shortly.
        </p>
        <p>If you have additional questions, feel free to reply to this email.</p>
        <p>Regards,</p>
        <p><strong>DiniSoftBD Team</strong></p>
      </div>
      <div class="footer">
        © 2025 DiniSoftBD | <a href="https://dinisoftbd.com">Visit Our Website</a>
      </div>
    </div>
  </body>
  </html>
`;

    const ownerEmailTemplate = `
  <!DOCTYPE html>
  <html>
  <head>
    <style>
      body {
        font-family: Arial, sans-serif;
        line-height: 1.6;
        background-color: #f9f9f9;
        margin: 0;
        padding: 0;
      }
      .email-container {
        max-width: 600px;
        margin: 20px auto;
        background: #ffffff;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        overflow: hidden;
      }
      .header {
        background-color: #FF5722;
        color: #ffffff;
        padding: 15px;
        text-align: center;
        font-size: 18px;
        font-weight: bold;
      }
      .content {
        padding: 20px;
        color: #333;
      }
      .footer {
        text-align: center;
        font-size: 14px;
        color: #777;
        padding: 10px;
        background: #f1f1f1;
      }
      .footer a {
        color: #FF5722;
        text-decoration: none;
      }
    </style>
  </head>
  <body>
    <div class="email-container">
      <div class="header">New Message Received</div>
      <div class="content">
        <p><strong>Subject:</strong> ${formData.subject}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Message:</strong></p>
        <p>${formData.message}</p>
        <p>
          Please follow up promptly with the sender to address their inquiry.
        </p>
      </div>
      <div class="footer">
        © 2025 DiniSoftBD | <a href="https://dinisoftbd.com">Admin Panel</a>
      </div>
    </div>
  </body>
  </html>
`;

    try {
      // API call to send emails
      const response = await fetch("/api/sendmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: formData.email,
          subject: `Confirmation: ${formData.subject}`,
          text: formData.subject,
          html: userEmailTemplate,
        }),
      });

      const ownerResponse = await fetch("/api/sendmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: "sales@dinisoftbd.com", // Replace with the site owner's email
          subject: `New Inquiry: ${formData.subject}`,
          text: formData.subject,
          html: ownerEmailTemplate,
        }),
      });

      if (response.ok && ownerResponse.ok) {
        alert("Your message has been sent successfully!");
        setLoading(false);
      } else {
        setLoading(false);
        alert("Failed to send the message. Please try again later.");
      }
    } catch (error) {
      setLoading(false);
      console.error("Error sending emails:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="container mx-auto px-3 lg:px-6">
      <div className="grid grid-cols-12">
        {/* Contact Form Section */}
        <div className="col-span-12 lg:col-span-8 rounded-lg px-3 py-6 lg:p-10 shadow-sm bg-[#FAFAFA]">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">
            Send Us a Message
          </h2>
          <form className="space-y-4" onSubmit={handleFormSubmit}>
            <div>
              <input
                type="text"
                name="subject"
                placeholder="Enter Subject"
                className="w-full rounded-md border border-gray-300 px-4 py-3 focus:border-blue-500 outline-none transition-all duration-300 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Enter email"
                className="w-full rounded-md border border-gray-300 px-4 py-3 focus:border-blue-500 outline-none transition-all duration-300 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <textarea
                placeholder="Message"
                name="message"
                rows={6}
                className="w-full rounded-md border border-gray-300 px-4 py-3 focus:border-blue-500 outline-none transition-all duration-300 focus:ring-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="rounded-md bg-blue-600 px-6 py-2 text-white transition-colors hover:bg-blue-700 outline-none focus:ring-blue-500 focus:ring-offset-2"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        {/* Business Info Card */}
        <div className="col-span-12 lg:col-span-4 rounded-lg bg-[#0948B3] p-8 text-white shadow-lg">
          <h2 className="mb-6 text-2xl font-bold">
            Looking for a excellent Business idea?
          </h2>
          <p className="mb-8">
            Drop by anytime, we endeavour to answer all enquiries within 24
            hours on business days.
          </p>

          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <MapPinPlus size={28} />
              <div>
                <h3 className="font-semibold">Company Location</h3>
                <p className="text-sm text-white/90">
                  <b>DINISOFT BD</b> <br /> Modern Moor, (Mutual Trust Bank
                  Market), Ghashiapara Road, Dinajpur, Banglaedesh
                </p>
                <Link
                  className=" w-fit mt-2 flex items-center gap-2 px-2 py-1 bg-gradient-to-r from-purple-600 to-blue-500 hover:from-blue-500 text-white font-bold text-sm rounded-full shadow-lg  transition-all"
                  href="https://maps.app.goo.gl/yu97x7jA772jekqBA"
                  target="_blank"
                >
                  <MapPin className="w-4 h-4" /> DC Location
                </Link>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Mail size={22} />
              <div>
                <h3 className="font-semibold">Email Address</h3>
                <p className="text-sm text-white/90">sales@dinisoftbd.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
