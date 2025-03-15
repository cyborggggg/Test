addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  let url = new URL(request.url);
  let redirectUri = url.searchParams.get("redirect_uri") || "https://google.com"; // Default

  // Return a 302 Redirect
  return Response.redirect(redirectUri, 302);
}
