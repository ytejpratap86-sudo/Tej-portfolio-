// EDIT EVERYTHING HERE. Leave a value "" to hide that link.
export const site = {
  name: "Tej Pratap", brand: "Tej Web Studio", location: "Kolkata, West Bengal, India",
  url: "https://example.com", // TODO: your real domain (SEO + sitemap)
  email: "", whatsapp: "", // whatsapp: digits with country code, e.g. 91XXXXXXXXXX
  github: "", linkedin: "",
  formEndpoint: "", // e.g. a Formspree URL. Empty = form reports "not configured".
  available: true,
};
export type Project = { slug: string; name: string; category: string; status: "Live"|"In development"|"Planned"; description: string; stack: string[]; live?: string; repo?: string };
export const categories = ["All Projects", "Business Websites", "SaaS", "AI Projects", "Web Applications"];
export const projects: Project[] = [
  { slug: "tej-web-studio", name: "Tej Web Studio", category: "Business Websites", status: "In development", description: "This portfolio and agency website.", stack: ["Next.js", "TypeScript", "Tailwind CSS"] },
  { slug: "cricket-side-arm-booking", name: "Cricket Side-Arm Booking Platform", category: "Web Applications", status: "In development", description: "A platform for booking cricket side-arm practice sessions.", stack: ["Next.js", "Supabase", "PostgreSQL"] },
  { slug: "wholesale-marketplace", name: "Wholesale Marketplace", category: "SaaS", status: "In development", description: "A marketplace connecting wholesale buyers and sellers.", stack: ["Next.js", "Node.js", "PostgreSQL"] },
  { slug: "ai-cricket-analysis", name: "AI Cricket Analysis Platform", category: "AI Projects", status: "Planned", description: "AI-assisted analysis of cricket play.", stack: ["Next.js", "API Integration", "Claude AI"] },
];
export const skills = { Frontend: ["HTML","CSS","JavaScript","React.js","Next.js","Tailwind CSS"], Backend: ["Node.js","API Integration"], Database: ["Supabase","PostgreSQL"], Tools: ["Git","GitHub","VS Code","Claude AI"] };
export const services = [
  ["Business Website Development","Fast, professional sites that present your business clearly."],
  ["E-commerce Website Development","Online stores built for smooth browsing and checkout."],
  ["SaaS Website Development","Marketing sites and app front-ends for software products."],
  ["Landing Page Development","Focused pages designed to turn visitors into enquiries."],
  ["AI-Powered Website Development","Websites that integrate AI features through APIs."],
  ["Website Redesign","Modernise an existing site without losing your brand."],
  ["Website Maintenance","Updates, fixes and improvements after launch."],
] as const;
export const process = [["Discovery","Understanding the client's requirements."],["Planning","Creating the website structure and design strategy."],["Development","Building the website using modern technologies."],["Testing","Checking responsiveness, functionality, and performance."],["Launch","Deploying the website and delivering the final product."]] as const;
// Add real reviews and set demo:false. Demo cards are labelled on screen.
export const testimonials = [{ name: "Client Name", role: "Designation", review: "Placeholder review text.", rating: 5, photo: "", demo: true }];
