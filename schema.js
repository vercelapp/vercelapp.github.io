document.addEventListener("DOMContentLoaded", () => {
  const metaDescription = document.querySelector('meta[name="description"]')?.content || "Unknown Title";
  const firstImage = document.querySelector('img')?.src || "https://example.com/photos/1x1/photo.jpg";

  const getRandomDate = () => {
    const year = 2024;
    const month = Math.floor(Math.random() * 12); // 0-11
    const day = Math.ceil(Math.random() * 28); // 1-28
    const hour = Math.floor(Math.random() * 24); // 0-23
    const minute = Math.floor(Math.random() * 60); // 0-59
    const second = Math.floor(Math.random() * 60); // 0-59
    return new Date(year, month, day, hour, minute, second).toISOString();
  };

  const randomDatePublished = getRandomDate();
  const randomDateModified = getRandomDate();

  const authorLinks = ["/index.html", "/index.html"];
  const authorNames = ["Alice Smith", "Bob Johnson", "Charlie Brown", "Diana Prince", "Ethan Hunt", "Fiona Gallagher", "George Lucas", "Helen Mirren", "Ian McKellen", "Julia Roberts"];

  const getRandomName = () => {
    return authorNames[Math.floor(Math.random() * authorNames.length)];
  };

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
        "name": getRandomName(),
        "url": authorLinks[0]
      },
      {
        "@type": "Person",
        "name": getRandomName(),
        "url": authorLinks[1]
      }
    ]
  };

  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(schemaData, null, 2);
  document.head.appendChild(script);
});
