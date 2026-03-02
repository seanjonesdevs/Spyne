import { lookupPhone } from "@/lib/lookup";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const raw = searchParams.get("number") || "";

  // Normalize: keep digits only (allows inputs like (850) 687-6102)
  const digits = raw.replace(/\D/g, "");

  // Basic validation (US-style 10 digits). Prevents wasting paid lookups.
  if (digits.length !== 10) {
    return Response.json(
      { error: "Invalid phone number. Please enter a 10-digit number." },
      { status: 400 }
    );
  }

  try {
    const result = await lookupPhone(digits);

    return Response.json(result, {
      headers: {
        "Cache-Control": "no-store",
      },
    });
  } catch (err) {
    return Response.json(
      { error: "Lookup failed. Please try again." },
      { status: 500 }
    );
  }
}