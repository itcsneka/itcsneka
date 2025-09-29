self.addEventListener("fetch", (event) => {
  if (event.request.mode === "navigate") {
    const url = new URL(event.request.url);

    const publicPaths = [
      '/', '/index.html',
      '/pages/info.html',
      '/pages/portfolio.html',
      '/pages/contact.html',
      '/login.html'
    ];

    const protectedFolders = ['/anggota/', '/admin-pages/', '/super-admin/'];

    const isPublic = publicPaths.some(p => url.pathname === p || url.pathname.endsWith(p));
    const isProtected = protectedFolders.some(folder => url.pathname.startsWith(folder));

    const cookie = event.request.headers.get("cookie") || "";
    const isLoggedIn = cookie.includes("itc-user=");

    if (isProtected && !isLoggedIn) {
      event.respondWith(Response.redirect("/login.html"));
      return;
    }
  }
});
