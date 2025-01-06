document.addEventListener("DOMContentLoaded", () => {
  const metaDescription = document.querySelector('meta[name="description"]')?.content || "Unknown Title";
  const firstImage = document.querySelector('img')?.src || "https://example.com/photos/1x1/photo.jpg";
  const randomDatePublished = new Date(2024, Math.floor(Math.random() * 12), Math.ceil(Math.random() * 28), Math.floor(Math.random() * 24), Math.floor(Math.random() * 60), Math.floor(Math.random() * 60)).toISOString();
  const randomDateModified = new Date(2024, Math.floor(Math.random() * 12), Math.ceil(Math.random() * 28), Math.floor(Math.random() * 24), Math.floor(Math.random() * 60), Math.floor(Math.random() * 60)).toISOString();
  const authorLinks = Array.from(document.querySelectorAll('a[href*="/index.html"]')).map(() => "/index.html");

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": metaDescription,
    "image": [
      firstImage
    ],
    "datePublished": randomDatePublished,
    "dateModified": randomDateModified,
    "author": [
      {
        "@type": "Person",
        "name": "Jane Doe",
        "url": authorLinks[0] || "/index.html"
      },
      {
        "@type": "Person",
        "name": "John Doe",
        "url": authorLinks[1] || "/index.html"
      }
    ]
  };

  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(schemaData, null, 2);
  document.head.appendChild(script);
});
