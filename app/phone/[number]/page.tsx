// app/phone/[number]/page.tsx

async function getLookup(number: string) {
  const res = await fetch(
    `http://localhost:3000/api/lookup?number=${encodeURIComponent(number)}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Lookup failed");
  }

  return res.json();
}

export default async function PhoneResultPage({
  params,
}: {
  params: Promise<{ number: string }>;
}) {
  const { number } = await params;
  const data = await getLookup(number);

  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#ffffff",
        backgroundImage: `
          radial-gradient(
            circle at 50% 18%,
            rgba(0,122,255,0.10),
            rgba(0,122,255,0.05) 18%,
            rgba(0,122,255,0.025) 32%,
            transparent 60%
          )
        `,
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", Helvetica, Arial, sans-serif',
        padding: "28px 24px",
      }}
    >
      {/* Top bar */}
      <div
        style={{
          maxWidth: 920,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
        }}
      >
        <a
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            color: "rgba(0,0,0,0.75)",
            textDecoration: "none",
            border: "1px solid rgba(0,0,0,0.10)",
            borderRadius: 14,
            padding: "10px 12px",
            background: "rgba(255,255,255,0.85)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            boxShadow: "0 10px 28px rgba(0,0,0,0.06)",
          }}
        >
          <span style={{ fontSize: 16 }}>←</span>
          <span style={{ fontSize: 14, fontWeight: 600 }}>Home</span>
        </a>

        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          <div
            style={{
              fontSize: 12,
              color: "rgba(0,0,0,0.45)",
              letterSpacing: 0.2,
            }}
          >
            Report
          </div>
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: 999,
              background: "rgba(0,0,0,0.18)",
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 920, margin: "22px auto 0 auto" }}>
        {/* Number header */}
        <div style={{ textAlign: "center", padding: "26px 0 22px 0" }}>
          <div
            style={{
              fontSize: 13,
              color: "rgba(0,0,0,0.45)",
              letterSpacing: 0.3,
            }}
          >
            Phone Number
          </div>
          <h1
            style={{
              margin: "10px 0 0 0",
              fontSize: 44,
              fontWeight: 750,
              letterSpacing: "-1px",
              color: "#000",
            }}
          >
            {data.number || number}
          </h1>
        </div>

        {/* Report card */}
        <div
          style={{
            borderRadius: 24,
            border: "1px solid rgba(0,0,0,0.10)",
            background: "rgba(255,255,255,0.78)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            boxShadow: "0 18px 48px rgba(0,0,0,0.08)",
            padding: 18,
          }}
        >
          {/* Top row */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 12,
              justifyContent: "space-between",
              alignItems: "center",
              padding: "6px 6px 14px 6px",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: 12,
                  color: "rgba(0,0,0,0.45)",
                  letterSpacing: 0.2,
                }}
              >
                Possible Owner
              </div>
              <div
                style={{
                  marginTop: 6,
                  fontSize: 20,
                  fontWeight: 700,
                  color: "rgba(0,0,0,0.88)",
                }}
              >
                {data.possibleOwner || "Unknown"}
              </div>
            </div>

            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                border: "1px solid rgba(0,0,0,0.10)",
                borderRadius: 999,
                padding: "8px 12px",
                background: "rgba(255,255,255,0.7)",
              }}
            >
              <span style={{ fontSize: 12, color: "rgba(0,0,0,0.55)" }}>
                Spam Risk
              </span>
              <span
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  color: "rgba(0,0,0,0.80)",
                }}
              >
                {data.spamRisk || "Unknown"}
              </span>
            </div>
          </div>

          {/* Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              gap: 12,
            }}
          >
            <InfoCard label="Possible Age Range" value={data.ageRange || "—"} />
            <InfoCard label="Possible Location" value={data.location || "—"} />
            <InfoCard label="Carrier" value={data.carrier || "—"} />
            <InfoCard label="Line Type" value={data.lineType || "—"} />
          </div>

          {/* Footer note */}
          <div
            style={{
              marginTop: 14,
              padding: "10px 6px 4px 6px",
              fontSize: 12,
              color: "rgba(0,0,0,0.40)",
              lineHeight: 1.5,
            }}
          >
            Results may be approximate and are shown as possible matches.
          </div>
        </div>
      </div>
    </main>
  );
}

function InfoCard({ label, value }: { label: string; value: string }) {
  return (
    <div
      style={{
        borderRadius: 18,
        border: "1px solid rgba(0,0,0,0.10)",
        background: "rgba(255,255,255,0.72)",
        padding: 14,
        boxShadow: "0 10px 24px rgba(0,0,0,0.05)",
      }}
    >
      <div
        style={{
          fontSize: 12,
          color: "rgba(0,0,0,0.45)",
          letterSpacing: 0.2,
        }}
      >
        {label}
      </div>
      <div
        style={{
          marginTop: 6,
          fontSize: 16,
          fontWeight: 650,
          color: "rgba(0,0,0,0.86)",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {value}
      </div>
    </div>
  );
}