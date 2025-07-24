export default {
  async fetch(request: Request) {
    const url = new URL(request.url);
    const targetUrl = 'https://api.openai.com' + url.pathname;

    const apiKey = 'sk-...'; // Replace this safely or use env vars

    const response = await fetch(targetUrl, {
      method: request.method,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: request.body,
    });

    return new Response(await response.text(), {
      status: response.status,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  },
};
