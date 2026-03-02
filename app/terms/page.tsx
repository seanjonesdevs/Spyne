// app/terms/page.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

export default function TermsPage() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

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
            }}
          >
            Legal • Terms • Protection
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
            Terms of Service
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
            These Terms govern your access to and use of the Spyne website and
            services.
          </div>

          <div
            style={{
              marginTop: 10,
              fontSize: 13,
              color: "rgba(0,0,0,0.45)",
            }}
          >
            Effective Date:{" "}
            <strong style={{ color: "rgba(0,0,0,0.70)" }}>
              March 1, 2026
            </strong>
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
            padding: "28px 26px",
          }}
        >
          <SectionTitle title="1. Acceptance of Terms" />
          <Paragraph>
            By accessing or using Spyne (“Service”), you agree to these Terms
            of Service. If you do not agree, you must not use the Service.
          </Paragraph>

          <Divider />

          <SectionTitle title="2. Description of Service" />
          <Paragraph>
            Spyne provides phone number lookup information using third-party
            data providers and public sources. Results are provided for
            informational purposes only and may not be accurate, complete, or
            current.
          </Paragraph>

          <Divider />

          <SectionTitle title="3. Eligibility" />
          <Paragraph>
            You must be at least 18 years old and legally able to enter into a
            binding agreement to use the Service.
          </Paragraph>

          <Divider />

          <SectionTitle title="4. Prohibited Use" />
          <Paragraph>You agree NOT to use Spyne for:</Paragraph>

          <BulletList
            items={[
              "Harassment, stalking, intimidation, or threats.",
              "Discrimination or illegal surveillance.",
              "Violating any local, state, national, or international laws.",
              "Fraudulent or misleading purposes.",
              "Any purpose that could harm others.",
            ]}
          />

          <MiniNote>
            Violation may result in immediate termination and legal reporting.
          </MiniNote>

          <Divider />

          <SectionTitle title="5. No Guarantees or Warranties" />
          <Paragraph>
            The Service is provided “AS IS” and “AS AVAILABLE”.
          </Paragraph>

          <BulletList
            items={[
              "We do NOT guarantee accuracy.",
              "We do NOT guarantee availability.",
              "We do NOT guarantee completeness.",
            ]}
          />

          <Paragraph>You use the Service at your own risk.</Paragraph>

          <Divider />

          <SectionTitle title="6. Limitation of Liability" />
          <Paragraph>
            To the fullest extent permitted by law, Spyne shall NOT be liable
            for:
          </Paragraph>

          <BulletList
            items={[
              "Any damages.",
              "Loss of data.",
              "Loss of profits.",
              "Misuse of information.",
              "Any indirect or consequential damages.",
            ]}
          />

          <Divider />

          <SectionTitle title="7. Third-Party Data" />
          <Paragraph>
            Spyne relies on third-party providers. We do not control their data
            and are not responsible for its accuracy.
          </Paragraph>

          <Divider />

          <SectionTitle title="8. Termination" />
          <Paragraph>
            We may suspend or terminate access at any time without notice if we
            believe misuse has occurred.
          </Paragraph>

          <Divider />

          <SectionTitle title="9. Changes to Terms" />
          <Paragraph>
            We may update these Terms at any time. Continued use means you accept
            changes.
          </Paragraph>

          <Divider />

          <SectionTitle title="10. Governing Law" />
          <Paragraph>
            These Terms are governed by the laws of the United States and your
            local jurisdiction.
          </Paragraph>

          <Divider />

          <SectionTitle title="11. Contact" />
          <Paragraph>
            Contact: <strong>support@spynelookup.com</strong>
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
          These Terms protect Spyne from liability and define acceptable use.
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
        marginBottom: 10,
        color: "#000",
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
        fontSize: 14,
        marginBottom: 14,
        lineHeight: 1.7,
        color: "rgba(0,0,0,0.65)",
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
        marginLeft: 18,
        marginBottom: 16,
        color: "rgba(0,0,0,0.65)",
      }}
    >
      {items.map((item) => (
        <li key={item} style={{ marginBottom: 6 }}>
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
        margin: "18px 0",
      }}
    />
  );
}

function MiniNote({ children }: { children: React.ReactNode }) {
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
      }}
    >
      {children}
    </div>
  );
}