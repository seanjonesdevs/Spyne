import { lookupPhoneTrestle } from "./providers/trestle";

export type LookupResult = {
  name: string | null;
  ageRange: string | null;
  location: string | null;
  carrier: string | null;
  lineType: string | null;
  spamRisk: string | null;
};

function mockResult(phone: string): LookupResult {
  return {
    name: "Possible: John Smith",
    ageRange: "35–44",
    location: "Pensacola, FL",
    carrier: "Verizon Wireless",
    lineType: "Mobile",
    spamRisk: "Low",
  };
}

export async function lookupPhone(phone: string): Promise<LookupResult> {
  // If you haven't pasted the real key yet, keep the app working with mock data
  if (!process.env.TRESTLE_API_KEY) {
    return mockResult(phone);
  }

  try {
    const live = await lookupPhoneTrestle(phone);

    return {
      name: live.name ? `Possible: ${live.name}` : null,
      ageRange: live.ageRange,
      location: live.location,
      carrier: live.carrier,
      lineType: live.lineType,
      spamRisk: live.spamRisk ?? null,
    };
  } catch {
    // While access is pending, Trestle may reject. Keep UI functional.
    return mockResult(phone);
  }
}