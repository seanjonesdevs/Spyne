// app/remove/page.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

export default function RemovePage() {
  const router = useRouter();

  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Close menu when clicking outside
  useEffect(() => {
    function onDocMouseDown(e: MouseEvent) {
      if (!menuOpen) return;
      const target = e.target as Node;
      if (menuRef.current && !menuRef.current.contains(target)) {
        setMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", onDocMouseDown);
    return () => document.removeEventListener("mousedown", onDocMouseDown);
  }, [menuOpen]);

  function cleanNumber(v: string) {
    return v.replace(/[^\d+]/g, "");
  }

  function onSubmit() {
    const cleaned = cleanNumber(phone);
    if (!cleaned) return;
    // For now: UI-only. Later we’ll post to an API route and email/log the request.
    setSubmitted(true);
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#ffffff",
        backgroundImage: `
          radial-gradient(
            circle at 50% 20%,
            rgba(0,122,255,0.12),
            rgba(0,122,255,0.06) 20%,
            rgba(0,122,255,0.03) 35%,
            transparent 62%
          )
        `,
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", Helvetica, Arial, sans-serif',
        padding: "48px 20px 80px",
        boxSizing: "border-box",
        color: "#000",
      }}
    >
      {/* Top-left menu */}
      <div
        ref={menuRef}
        style={{
          position: "absolute",
          top: 20,
          left: 20,
        }}
      >
        <button
          aria-label="Open menu"
          onClick={() => setMenuOpen((v) => !v)}
          style={{
            width: 46,
            height: 46,
            borderRadius: 14,
            border: "1px solid rgba(0,0,0,0.12)",
            background: "rgba(255,255,255,0.85)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 22,
            color: "rgba(0,0,0,0.85)",
            cursor: "pointer",
            boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
            transition: "transform 120ms ease, box-shadow 120ms ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-1px)";
            e.currentTarget.style.boxShadow = "0 10px 24px rgba(0,0,0,0.10)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0px)";
            e.currentTarget.style.boxShadow = "0 6px 18px rgba(0,0,0,0.08)";
          }}
        >
          ≡
        </button>

        {menuOpen && (
          <div
            style={{
              marginTop: 10,
              width: 220,
              borderRadius: 16,
              border: "1px solid rgba(0,0,0,0.10)",
              background: "rgba(255,255,255,0.92)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              boxShadow: "0 16px 40px rgba(0,0,0,0.12)",
              padding: 8,
            }}
          >
            <MenuItem
              label="Home"
              onClick={() => {
                setMenuOpen(false);
                router.push("/");
              }}
            />
            <MenuItem
              label="Subscriptions"
              onClick={() => {
                setMenuOpen(false);
                router.push("/subscriptions");
              }}
            />
            <div
              style={{
                height: 1,
                background: "rgba(0,0,0,0.08)",
                margin: "6px 8px",
              }}
            />
            <MenuItem
              label="Privacy"
              onClick={() => {
                setMenuOpen(false);
                router.push("/privacy");
              }}
            />
            <MenuItem
              label="Terms"
              onClick={() => {
                setMenuOpen(false);
                router.push("/terms");
              }}
            />
            <MenuItem
              label="Remove My Info"
              onClick={() => {
                setMenuOpen(false);
                router.push("/remove");
              }}
            />
          </div>
        )}
      </div>

      <div style={{ maxWidth: 920, margin: "0 auto", paddingTop: 40 }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 26 }}>
          <div
            style={{
              display: "inline-block",
              padding: "6px 12px",
              borderRadius: 999,
              border: "1px solid rgba(0,0,0,0.08)",
              background: "rgba(255,255,255,0.7)",
              boxShadow: "0 10px 28px rgba(0,0,0,0.06)",
              fontSize: 12,
              color: "rgba(0,0,0,0.55)",
            }}
          >
            Privacy • Removal • Control
          </div>

          <h1
            style={{
              marginTop: 18,
              fontSize: 56,
              fontWeight: 700,
              letterSpacing: "-1.4px",
              color: "#000",
              marginBottom: 10,
            }}
          >
            Remove My Info
          </h1>

          <div
            style={{
              fontSize: 14,
              color: "rgba(0,0,0,0.55)",
              lineHeight: 1.6,
              maxWidth: 760,
              margin: "0 auto",
            }}
          >
            Enter the phone number you want removed from results shown in Stalkr.
          </div>

          <div
            style={{
              marginTop: 10,
              fontSize: 13,
              color: "rgba(0,0,0,0.45)",
            }}
          >
            We’ll review and process removal requests as required by applicable
            laws and provider policies.
          </div>
        </div>

        {/* Card */}
        <div
          style={{
            borderRadius: 26,
            border: "1px solid rgba(0,0,0,0.10)",
            background: "rgba(255,255,255,0.86)",
            backdropFilter: "blur(16px)",
            boxShadow: "0 18px 60px rgba(0,0,0,0.10)",
            padding: "26px 24px",
          }}
        >
          {!submitted ? (
            <>
              <div style={{ maxWidth: 520, margin: "0 auto" }}>
                <Label>Phone Number</Label>

                <div
                  style={{
                    borderRadius: 18,
                    border: "1px solid rgba(0,0,0,0.10)",
                    background: "#fff",
                    boxShadow:
                      "0 1px 1px rgba(0,0,0,0.04), 0 10px 30px rgba(0,0,0,0.06)",
                    padding: 4,
                  }}
                >
                  <input
                    placeholder="Enter phone number"
                    inputMode="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") onSubmit();
                    }}
                    style={{
                      width: "100%",
                      height: 56,
                      borderRadius: 14,
                      border: "1px solid transparent",
                      outline: "none",
                      paddingLeft: 18,
                      paddingRight: 18,
                      fontSize: 16,
                      color: "#000",
                      background: "transparent",
                    }}
                  />
                </div>

                <div
                  style={{
                    display: "flex",
                    gap: 10,
                    marginTop: 14,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <button
                    onClick={onSubmit}
                    style={{
                      width: "100%",
                      maxWidth: 520,
                      height: 54,
                      borderRadius: 16,
                      border: "1px solid rgba(0,0,0,0.10)",
                      background: "rgba(0,122,255,0.92)",
                      color: "#fff",
                      fontSize: 15,
                      fontWeight: 700,
                      cursor: "pointer",
                      boxShadow: "0 12px 28px rgba(0,122,255,0.18)",
                      transition: "transform 120ms ease, box-shadow 120ms ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-1px)";
                      e.currentTarget.style.boxShadow =
                        "0 16px 34px rgba(0,122,255,0.22)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0px)";
                      e.currentTarget.style.boxShadow =
                        "0 12px 28px rgba(0,122,255,0.18)";
                    }}
                  >
                    Submit Request
                  </button>
                </div>

                <MiniNote style={{ marginTop: 16 }}>
                  <strong>Note:</strong> This is a removal request form. It does
                  not verify ownership of the phone number. If additional
                  verification is required, we may contact you using the details
                  you provide through support.
                </MiniNote>

                <Divider />

                <div
                  style={{
                    fontSize: 13,
                    color: "rgba(0,0,0,0.55)",
                    lineHeight: 1.7,
                  }}
                >
                  <strong>What happens next?</strong>
                  <ul style={{ marginTop: 10, marginLeft: 18 }}>
                    <li style={{ marginBottom: 6 }}>
                      We log the request and review it.
                    </li>
                    <li style={{ marginBottom: 6 }}>
                      If your number appears in provider data, we submit a
                      suppression request where supported.
                    </li>
                    <li style={{ marginBottom: 6 }}>
                      Some information may still appear through third-party
                      sources outside Stalkr.
                    </li>
                  </ul>
                </div>

                <div
                  style={{
                    marginTop: 14,
                    fontSize: 13,
                    color: "rgba(0,0,0,0.45)",
                    textAlign: "center",
                  }}
                >
                  Questions? Email <strong>support@stalkr.com</strong>
                </div>
              </div>
            </>
          ) : (
            <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
              <div
                style={{
                  display: "inline-block",
                  padding: "10px 14px",
                  borderRadius: 999,
                  border: "1px solid rgba(0,0,0,0.10)",
                  background: "rgba(255,255,255,0.75)",
                  boxShadow: "0 14px 36px rgba(0,0,0,0.08)",
                  fontSize: 13,
                  color: "rgba(0,0,0,0.65)",
                }}
              >
                Request received
              </div>

              <h2
                style={{
                  marginTop: 14,
                  fontSize: 26,
                  fontWeight: 800,
                  letterSpacing: "-0.6px",
                  marginBottom: 8,
                }}
              >
                We got it.
              </h2>

              <p
                style={{
                  fontSize: 14,
                  color: "rgba(0,0,0,0.60)",
                  lineHeight: 1.7,
                  marginBottom: 18,
                }}
              >
                Your removal request has been submitted for:{" "}
                <strong>{cleanNumber(phone) || "your phone number"}</strong>
              </p>

              <MiniNote style={{ textAlign: "left" }}>
                <strong>Next steps:</strong> We’ll review the request and process
                it according to our Privacy Policy and provider capabilities.
                Some providers require additional verification for suppression.
              </MiniNote>

              <div style={{ display: "flex", justifyContent: "center", gap: 10 }}>
                <button
                  onClick={() => {
                    setPhone("");
                    setSubmitted(false);
                  }}
                  style={{
                    height: 48,
                    padding: "0 16px",
                    borderRadius: 14,
                    border: "1px solid rgba(0,0,0,0.12)",
                    background: "rgba(255,255,255,0.85)",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                    cursor: "pointer",
                    fontSize: 14,
                    fontWeight: 700,
                    color: "rgba(0,0,0,0.78)",
                    boxShadow: "0 10px 26px rgba(0,0,0,0.08)",
                  }}
                >
                  Submit another
                </button>

                <button
                  onClick={() => router.push("/")}
                  style={{
                    height: 48,
                    padding: "0 16px",
                    borderRadius: 14,
                    border: "1px solid rgba(0,0,0,0.12)",
                    background: "rgba(0,122,255,0.92)",
                    color: "#fff",
                    cursor: "pointer",
                    fontSize: 14,
                    fontWeight: 800,
                    boxShadow: "0 12px 28px rgba(0,122,255,0.18)",
                  }}
                >
                  Back to Home
                </button>
              </div>
            </div>
          )}
        </div>

        <div
          style={{
            marginTop: 16,
            textAlign: "center",
            fontSize: 12,
            color: "rgba(0,0,0,0.40)",
          }}
        >
          For details, see the Privacy Policy and Terms of Service.
        </div>
      </div>
    </main>
  );
}

function MenuItem({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      style={{
        width: "100%",
        textAlign: "left",
        padding: "10px 12px",
        borderRadius: 12,
        border: "1px solid transparent",
        background: "transparent",
        cursor: "pointer",
        fontSize: 14,
        color: "rgba(0,0,0,0.86)",
        transition: "background 120ms ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "rgba(0,0,0,0.05)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "transparent";
      }}
    >
      {label}
    </button>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        fontSize: 12,
        color: "rgba(0,0,0,0.55)",
        letterSpacing: 0.2,
        marginBottom: 8,
        textAlign: "left",
      }}
    >
      {children}
    </div>
  );
}

function Divider() {
  return (
    <div
      style={{
        height: 1,
        background: "rgba(0,0,0,0.08)",
        margin: "18px 0",
      }}
    />
  );
}

function MiniNote({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
}) {
  return (
    <div
      style={{
        border: "1px solid rgba(0,0,0,0.08)",
        borderRadius: 14,
        padding: 12,
        marginBottom: 12,
        background: "rgba(255,255,255,0.7)",
        fontSize: 13,
        color: "rgba(0,0,0,0.65)",
        ...style,
      }}
    >
      {children}
    </div>
  );
}