export async function lookupPhoneTrestle(phone: string) {
    const res = await fetch(
      `https://api.trestleiq.com/3.2/phone?phone=${phone}`,
      {
        headers: {
          accept: "application/json",
          "x-api-key": process.env.TRESTLE_API_KEY!,
        },
      }
    );
  
    if (!res.ok) {
      throw new Error("Lookup failed");
    }
  
    const data = await res.json();
  
    const owner = data.owners?.[0];
  
    return {
      name: owner
        ? `${owner.first_name || ""} ${owner.last_name || ""}`.trim()
        : null,
  
      ageRange: owner?.age_range || null,
  
      location: owner?.current_addresses?.[0]
        ? `${owner.current_addresses[0].city}, ${owner.current_addresses[0].state}`
        : null,
  
      carrier: data.carrier || null,
  
      lineType: data.line_type || null,
  
      spamRisk: "Low", // optional for now
    };
  }