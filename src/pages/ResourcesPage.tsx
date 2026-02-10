import { useState } from "react";
import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import {
  FileText, Download, Filter, Search, Calendar,
  Users, Code2, Landmark, BookOpen, ExternalLink
} from "lucide-react";

type Resource = {
  title: string;
  type: string;
  audience: string;
  date: string;
  desc: string;
};

const resources: Resource[] = [
  { title: "Scan & Record Share — Feature Introduction Deck", type: "Presentation", audience: "All", date: "2025-10", desc: "Overview of the initiative, user flows, development phases, and integration status." },
  { title: "Patient Record Share API Documentation", type: "Technical Specs", audience: "Integrators", date: "2025-10", desc: "Complete API reference including endpoints, request/response formats, and authentication details." },
  { title: "Scan & Record Share Knowledge Product", type: "Guidelines", audience: "All", date: "2025-11", desc: "Comprehensive knowledge base with FAQs, user journeys, content depth levels, and beneficiary mapping." },
  { title: "Record Share Postman Collection", type: "Technical Specs", audience: "Integrators", date: "2025-10", desc: "Ready-to-use Postman collection for testing all Record Share API endpoints in sandbox." },
  { title: "ABDM Health Data Management Policy", type: "Circulars & Guidelines", audience: "Policy", date: "2024-06", desc: "National policy framework governing health data privacy, consent, and interoperability standards." },
  { title: "State Implementation Toolkit", type: "Guidelines", audience: "Policy", date: "2025-12", desc: "[PLACEHOLDER: State-specific rollout guide including facility readiness assessment, QR deployment checklist, and training modules]" },
  { title: "Citizen Awareness Brochure — Scan & Share", type: "Training Materials", audience: "Citizens", date: "2025-12", desc: "[PLACEHOLDER: Simple, visual guide explaining how citizens can use Scan & Record Share at healthcare facilities]" },
  { title: "HMIS Integration Case Study — CDAC", type: "Case Studies", audience: "Integrators", date: "2026-01", desc: "[PLACEHOLDER: Detailed case study of CDAC's HMIS integration with Scan & Record Share including timeline, challenges, and outcomes]" },
  { title: "NHA Circular — Scan & Record Share Rollout", type: "Circulars & Guidelines", audience: "Policy", date: "2025-11", desc: "[PLACEHOLDER: Official NHA circular directing state health departments on Scan & Record Share adoption]" },
  { title: "Developer Onboarding Guide", type: "Technical Specs", audience: "Integrators", date: "2025-10", desc: "[PLACEHOLDER: Step-by-step guide for developers to register on ABDM Sandbox and begin integration]" },
];

const types = ["All", "Circulars & Guidelines", "Technical Specs", "Training Materials", "Case Studies", "Presentation", "Guidelines"];
const audiences = ["All", "Citizens", "Integrators", "Policy"];

const audienceIcon = (a: string) => {
  if (a === "Citizens") return <Users className="w-3.5 h-3.5" />;
  if (a === "Integrators") return <Code2 className="w-3.5 h-3.5" />;
  if (a === "Policy") return <Landmark className="w-3.5 h-3.5" />;
  return <BookOpen className="w-3.5 h-3.5" />;
};

const ResourcesPage = () => {
  const [typeFilter, setTypeFilter] = useState("All");
  const [audienceFilter, setAudienceFilter] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = resources.filter((r) => {
    if (typeFilter !== "All" && r.type !== typeFilter) return false;
    if (audienceFilter !== "All" && r.audience !== audienceFilter && r.audience !== "All") return false;
    if (search && !r.title.toLowerCase().includes(search.toLowerCase()) && !r.desc.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  return (
    <Layout>
      {/* Hero */}
      <section className="hero-gradient py-16 md:py-20">
        <div className="container text-primary-foreground">
          <span className="gov-badge !bg-primary-foreground/20 !text-primary-foreground mb-4 inline-block">
            Resource Library
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold max-w-3xl leading-tight">
            Resources & Documentation
          </h1>
          <p className="text-lg opacity-90 mt-4 max-w-2xl leading-relaxed">
            Access circulars, technical specifications, training materials, case studies, and more.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-card border-b border-border sticky top-[72px] z-40">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search resources..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-background border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>
            {/* Type Filter */}
            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="px-4 py-2.5 rounded-lg bg-background border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
            >
              {types.map((t) => <option key={t} value={t}>{t === "All" ? "All Types" : t}</option>)}
            </select>
            {/* Audience Filter */}
            <select
              value={audienceFilter}
              onChange={(e) => setAudienceFilter(e.target.value)}
              className="px-4 py-2.5 rounded-lg bg-background border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
            >
              {audiences.map((a) => <option key={a} value={a}>{a === "All" ? "All Audiences" : `For ${a}`}</option>)}
            </select>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-12 bg-background">
        <div className="container">
          <p className="text-sm text-muted-foreground mb-6">{filtered.length} resource{filtered.length !== 1 ? "s" : ""} found</p>
          <div className="grid md:grid-cols-2 gap-4">
            {filtered.map((r, i) => (
              <div key={i} className="p-6 rounded-xl bg-card border border-border hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap gap-2 mb-2">
                      <span className="gov-badge text-[10px]">{r.type}</span>
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium bg-muted text-muted-foreground">
                        {audienceIcon(r.audience)} {r.audience}
                      </span>
                    </div>
                    <h3 className="font-heading font-semibold text-base mb-1">{r.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
                    <div className="flex items-center gap-3 mt-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{r.date}</span>
                    </div>
                  </div>
                  <button className="shrink-0 p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <FileText className="w-12 h-12 text-muted-foreground/50 mx-auto mb-4" />
              <p className="text-muted-foreground">No resources match your filters. Try adjusting your search.</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default ResourcesPage;
