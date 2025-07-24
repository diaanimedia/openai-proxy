export const config = {
  runtime: "edge",
  regions: [
    "sin1", "cdg1", "arn1", "dub1", "lhr1", "iad1", "sfo1",
    "pdx1", "cle1", "gru1", "hnd1", "icn1", "kix1", "bom1",
    "syd1", "fra1", "cpt1"
  ]
};

export default {
  async fetch(request: Request): Promise<Response> {
    const body = await request.text();

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body,
    });

    return response;
  }
};
