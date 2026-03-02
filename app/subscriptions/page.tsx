export default function SubscriptionsPage() {
    return (
      <main
        style={{
          minHeight: "100vh",
          background: "#fff",
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", Helvetica, Arial, sans-serif',
          padding: "40px 24px",
        }}
      >
        <a
          href="/"
          style={{
            display: "inline-block",
            color: "rgba(0,0,0,0.7)",
            textDecoration: "none",
            border: "1px solid rgba(0,0,0,0.10)",
            borderRadius: 12,
            padding: "10px 12px",
            background: "rgba(255,255,255,0.85)",
          }}
        >
          ← Home
        </a>
  
        <h1
          style={{
            marginTop: 28,
            fontSize: 44,
            letterSpacing: "-1px",
            fontWeight: 700,
            color: "#000",
          }}
        >
          Subscriptions
        </h1>
  
        <p style={{ marginTop: 10, color: "rgba(0,0,0,0.55)", maxWidth: 640 }}>
          This is where you’ll manage your plan. We’ll hook this up after the
          lookup flow is working.
        </p>
      </main>
    );
  }