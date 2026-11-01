export const dynamic = "force-static";
import type { MetadataRoute } from "next";
import { site, projects } from "@/data/site";
export default function sitemap(): MetadataRoute.Sitemap { return [site.url, ...projects.map(p => `${site.url}/projects/${p.slug}`)].map(url => ({ url })); }
