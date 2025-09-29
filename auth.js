// auth.js
(function(){
  const path = location.pathname;

  // Daftar halaman/folder publik:
  const publicPaths = [
    '/', '/index.html',
    '/pages/info.html',
    '/pages/portfolio.html',
    '/pages/contact.html',
    '/login.html'
  ];

  // Jika file ada dalam folder yang dilindungi:
  const protectedFolders = ['/anggota/', '/admin-pages/', '/super-admin/'];

  const isPublic = publicPaths.some(p => path === p || path.endsWith(p));
  const isProtected = protectedFolders.some(folder => path.startsWith(folder));

  if (isProtected && !localStorage.getItem('itc-user')) {
    location.href = '/login.html';
  }
})();
