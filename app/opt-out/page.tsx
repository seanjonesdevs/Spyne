"use client";

import { useState } from "react";

export default function OptOutPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main style={container}>
      <h1 style={title}>Remove Your Information</h1>

      {!submitted ? (
        <>
          <p style={text}>
            Enter your phone number to request removal of your information.
          </p>

          <input
            placeholder="Enter your phone number"
            style={input}
          />

          <button
            style={button}
            onClick={() => setSubmitted(true)}
          >
            Submit Request
          </button>
        </>
      ) : (
        <p style={text}>
          Your removal request has been submitted.
        </p>
      )}
    </main>
  );
}

const container = {
  maxWidth: 500,
  margin: "0 auto",
  padding: "60px 20px",
  textAlign: "center" as const,
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "SF Pro Display", Helvetica, Arial',
};

const title = {
  fontSize: 36,
  fontWeight: 700,
};

const text = {
  marginTop: 20,
  fontSize: 15,
};

const input = {
  marginTop: 20,
  width: "100%",
  height: 50,
  borderRadius: 12,
  border: "1px solid rgba(0,0,0,0.15)",
  padding: "0 15px",
};

const button = {
  marginTop: 15,
  width: "100%",
  height: 50,
  borderRadius: 12,
  border: "none",
  background: "#007AFF",
  color: "#fff",
  fontWeight: 600,
};