import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.dmtn.com.br";

  return [
    { url: baseUrl, lastModified: new Date(), priority: 1.0 },
    { url: `${baseUrl}/sobre`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/solucoes`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/cases/kl-facilities`, lastModified: new Date(), priority: 0.6 },
    { url: `${baseUrl}/cases/infomercados`, lastModified: new Date(), priority: 0.6 },
    { url: `${baseUrl}/cases/pedidos-express`, lastModified: new Date(), priority: 0.6 },
    { url: `${baseUrl}/cases/boletoflex`, lastModified: new Date(), priority: 0.6 },
    { url: `${baseUrl}/cases/rfid`, lastModified: new Date(), priority: 0.6 },
    { url: `${baseUrl}/cases/crm`, lastModified: new Date(), priority: 0.6 },
    { url: `${baseUrl}/cases/mgl-engenharia`, lastModified: new Date(), priority: 0.6 },
  ];
}
