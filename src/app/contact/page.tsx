import React from "react";
import CallToAction from "@/components/callToAction";

export default function ContactPage() {
  return (
    <div>
      <div
        style={{
          background: "#fafafa",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "56px 16px",
          }}
        >
          <h1 style={{ margin: 0, fontWeight: 900, fontSize: 40 }}>
            Contact & Booking
          </h1>
          <p style={{ marginTop: 12, marginBottom: 0, maxWidth: 820, color: "#555" }}>
            Send us a message to book lessons, request pricing, or ask a quick question. You can also use the WhatsApp button for faster replies.
          </p>
        </div>
      </div>

      <section>
        <CallToAction />
      </section>
    </div>
  );
}
