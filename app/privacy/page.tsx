// app/privacy/page.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

export default function PrivacyPage() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

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
      }}
    >
      {/* Top-left menu (same as Home) */}
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

      <div
        style={{
          maxWidth: 920,
          margin: "0 auto",
          paddingTop: 40,
        }}
      >
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
              letterSpacing: 0.2,
            }}
          >
            Private • Instant • Secure
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
            Privacy Policy
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
            This Privacy Policy explains how Spyne (“Spyne,” “we,” “us,” or
            “our”) collects, uses, and shares information when you use our
            website and services (the “Service”).
          </div>

          <div
            style={{
              marginTop: 10,
              fontSize: 13,
              color: "rgba(0,0,0,0.45)",
            }}
          >
            Effective Date: <strong style={{ color: "rgba(0,0,0,0.70)" }}>March 1, 2026</strong>
          </div>
        </div>

        {/* Card */}
        <div
          style={{
            borderRadius: 26,
            border: "1px solid rgba(0,0,0,0.10)",
            background: "rgba(255,255,255,0.86)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            boxShadow: "0 18px 60px rgba(0,0,0,0.10)",
            padding: "28px 26px",
          }}
        >
          <SectionTitle title="1. What We Collect" />
          <Paragraph>
            We collect only what we need to operate the Service and improve
            reliability. Depending on how you use Spyne, this can include:
          </Paragraph>
          <BulletList
            items={[
              "Phone numbers you submit for lookup.",
              "Lookup results returned by third-party data providers (when available).",
              "Basic usage data such as pages viewed, timestamps, and approximate device/browser information.",
              "IP address and general location inferred from IP (approximate only).",
            ]}
          />

          <MiniNote>
            <strong>Important:</strong> We are not a credit reporting agency and
            we do not provide consumer reports. The Service is intended for
            informational purposes and may return approximate or incomplete
            results.
          </MiniNote>

          <Divider />

          <SectionTitle title="2. How We Use Information" />
          <Paragraph>We use the information we collect to:</Paragraph>
          <BulletList
            items={[
              "Provide lookup functionality and display results.",
              "Maintain security, prevent abuse, and enforce our Terms of Service.",
              "Monitor performance and fix bugs.",
              "Improve the Service and user experience.",
              "Respond to support requests and removal requests.",
            ]}
          />

          <Divider />

          <SectionTitle title="3. Data Sources & Accuracy" />
          <Paragraph>
            Information displayed through the Service may come from third-party
            data providers, telecommunications metadata sources, and/or publicly
            available sources. We do not guarantee the accuracy, completeness,
            or timeliness of any results. Results are shown as potential matches
            and may be outdated or incorrect.
          </Paragraph>

          <Divider />

          <SectionTitle title="4. Sharing & Disclosure" />
          <Paragraph>
            We do not sell your personal information in the traditional sense.
            We may share information in these limited circumstances:
          </Paragraph>
          <BulletList
            items={[
              "Service Providers: vendors who help us operate the Service (hosting, analytics, security).",
              "Data Providers: to fulfill your lookup request (we send the phone number to the provider and receive results).",
              "Legal & Safety: if required by law, subpoena, or to protect rights, safety, and prevent fraud/abuse.",
              "Business Transfers: if we are involved in a merger, acquisition, or asset sale.",
            ]}
          />

          <Divider />

          <SectionTitle title="5. Retention" />
          <Paragraph>
            We retain submitted phone numbers and lookup logs only as long as
            necessary for operating the Service, preventing abuse, complying
            with legal obligations, and resolving disputes. Retention periods
            may vary depending on the type of data and our security needs.
          </Paragraph>

          <Divider />

          <SectionTitle title="6. Security" />
          <Paragraph>
            We use reasonable administrative, technical, and physical safeguards
            designed to protect information. No system is 100% secure, so we
            cannot guarantee absolute security.
          </Paragraph>

          <Divider />

          <SectionTitle title="7. Your Choices & Removal Requests" />
          <Paragraph>
            If you believe information related to a phone number should be
            removed or restricted, you can submit a removal request through our{" "}
            <InlineLink
              onClick={() => {
                router.push("/remove");
              }}
            >
              Remove My Info
            </InlineLink>{" "}
            page. We may require verification to confirm you are authorized to
            make the request and to help prevent misuse.
          </Paragraph>

          <Divider />

          <SectionTitle title="8. Prohibited Use & Misuse" />
          <Paragraph>
            The Service may not be used for harassment, stalking, threats,
            discrimination, or any unlawful purpose. We may restrict access or
            block usage to protect users and comply with applicable laws.
          </Paragraph>

          <Divider />

          <SectionTitle title="9. Children’s Privacy" />
          <Paragraph>
            The Service is not intended for children under 13 (or the minimum
            age required by your jurisdiction). We do not knowingly collect
            information from children.
          </Paragraph>

          <Divider />

          <SectionTitle title="10. International Users" />
          <Paragraph>
            If you access the Service from outside the United States, you
            understand that your information may be processed and stored in the
            United States or other jurisdictions where our service providers
            operate.
          </Paragraph>

          <Divider />

          <SectionTitle title="11. Changes to This Policy" />
          <Paragraph>
            We may update this Privacy Policy from time to time. We will update
            the “Effective Date” above when changes are made. Continued use of
            the Service after changes become effective means you accept the
            updated policy.
          </Paragraph>

          <Divider />

          <SectionTitle title="12. Contact" />
          <Paragraph>
            Questions or requests? Contact us at{" "}
            <span style={{ color: "rgba(0,0,0,0.78)", fontWeight: 600 }}>
              support@spynelookup.com
            </span>
            .
          </Paragraph>
        </div>

        <div
          style={{
            marginTop: 16,
            textAlign: "center",
            fontSize: 12,
            color: "rgba(0,0,0,0.40)",
          }}
        >
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

function SectionTitle({ title }: { title: string }) {
  return (
    <h2
      style={{
        fontSize: 18,
        fontWeight: 700,
        letterSpacing: "-0.2px",
        margin: "0 0 10px 0",
        color: "rgba(0,0,0,0.92)",
      }}
    >
      {title}
    </h2>
  );
}

function Paragraph({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        margin: "0 0 14px 0",
        fontSize: 14,
        lineHeight: 1.75,
        color: "rgba(0,0,0,0.62)",
      }}
    >
      {children}
    </p>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul
      style={{
        margin: "0 0 16px 18px",
        padding: 0,
        color: "rgba(0,0,0,0.62)",
        fontSize: 14,
        lineHeight: 1.75,
      }}
    >
      {items.map((item) => (
        <li key={item} style={{ marginBottom: 8 }}>
          {item}
        </li>
      ))}
    </ul>
  );
}

function Divider() {
  return (
    <div
      style={{
        height: 1,
        background: "rgba(0,0,0,0.08)",
        margin: "18px 0 18px",
      }}
    />
  );
}

function MiniNote({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        marginTop: 10,
        marginBottom: 6,
        borderRadius: 16,
        border: "1px solid rgba(0,0,0,0.08)",
        background: "rgba(255,255,255,0.75)",
        padding: "12px 14px",
        color: "rgba(0,0,0,0.60)",
        fontSize: 13,
        lineHeight: 1.6,
      }}
    >
      {children}
    </div>
  );
}

function InlineLink({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      style={{
        border: "none",
        background: "transparent",
        padding: 0,
        margin: 0,
        cursor: "pointer",
        color: "rgba(0,122,255,0.95)",
        fontWeight: 600,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.textDecoration = "underline";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.textDecoration = "none";
      }}
    >
      {children}
    </button>
  );
}