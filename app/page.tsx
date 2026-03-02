"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState("");

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
        height: "100vh",
        backgroundColor: "#ffffff",
        backgroundImage: `
          radial-gradient(
            circle at 50% 45%,
            rgba(0,122,255,0.12),
            rgba(0,122,255,0.06) 20%,
            rgba(0,122,255,0.03) 35%,
            transparent 60%
          )
        `,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", Helvetica, Arial, sans-serif',
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
            border: "1px solid rgba(0,0,0,0.12)", // stronger
            background: "rgba(255,255,255,0.85)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 22,
            color: "rgba(0,0,0,0.85)", // darker icon
            cursor: "pointer",
            boxShadow: "0 6px 18px rgba(0,0,0,0.08)", // tiny shadow
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

        {/* Dropdown */}
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
          </div>
        )}
      </div>

      {/* Logo */}
      <h1
        style={{
          fontSize: 64,
          fontWeight: 700,
          letterSpacing: "-1.5px",
          marginBottom: 24,
          color: "#000",
        }}
      >
        Spyne
      </h1>

      {/* Search */}
      <div style={{ width: 420, maxWidth: "90vw" }}>
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
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                const cleaned = searchValue.replace(/[^\d+]/g, "");
                if (!cleaned) return;
                router.push(`/phone/${encodeURIComponent(cleaned)}`);
              }
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
            marginTop: 14,
            fontSize: 13,
            color: "rgba(0,0,0,0.40)",
            textAlign: "center",
            letterSpacing: 0.2,
          }}
        >
          Private • Instant • Secure
        </div>

        <div
          style={{
            marginTop: 10,
            fontSize: 12,
            color: "rgba(0,0,0,0.48)",
            textAlign: "center",
            letterSpacing: 1.2,
            textTransform: "uppercase",
          }}
        >
          Name • Age Range • General Location • Carrier
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