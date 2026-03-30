import { useState } from "react";
import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import {
  FileText, Download, Search, Calendar,
  Users, Code2, Landmark, BookOpen
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
  { title: "Scan & Record Share API Documentation", type: "Integration Document", audience: "Integrators", date: "2025-10", desc: "Complete API reference including endpoints, request/response formats, and authentication details." },
  { title: "Integrator Playbook", type: "Integration Document", audience: "Integrator", date: "2025-11", desc: "Comprehensive knowledge base with FAQs, user journeys, and beneficiary mapping." },
  { title: "Scan & Record Record Share API Collection", type: "Integration Document", audience: "Integrators", date: "2025-10", desc: "Ready-to-use API collection for testing all Record Share endpoints in sandbox." },
  { title: "Facility Playbook", type: "Integration Document", audience: "Policy", date: "2024-06", desc: "[PLACEHOLDER: Placeholder description]" },
  { title: "State Implementation Toolkit", type: "Guidelines", audience: "Policy", date: "2025-12", desc: "[PLACEHOLDER: State-specific rollout guide including facility readiness assessment and QR deployment checklist]" },
  { title: "IEC Material", type: "IEC", audience: "Citizens", date: "2025-12", desc: "[PLACEHOLDER: Visual guide explaining how citizens can use Scan & Record Share at healthcare facilities]" },
  { title: "Test cases", type: "Integration Document", audience: "Integrators", date: "2026-01", desc: "[PLACEHOLDER: Testcases for completing Integration.]" },
  { title: "Video Demo", type: "IEC", audience: "All", date: "2025-11", desc: "[PLACEHOLDER: Official NHA circular on Scan & Record Share adoption]" },
  { title: "Placeholder 1", type: "Training Material", audience: "Integrators", date: "2025-10", desc: "[PLACEHOLDER: Step-by-step guide for Digital Solution Companies to begin integration]" },
];

const types = ["All", "Guidelines", "IEC", "Integration Document", "Training Material", "Presentation", "Other"];
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
      <section className="hero-gradient py-12 md:py-16">
        <div className="container text-primary-foreground">
          <p className="text-sm font-medium opacity-80 mb-2 uppercase tracking-wide">Resource Library</p>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-heading font-extrabold max-w-3xl leading-tight">
            Resources & Documentation
          </h1>
          <p className="text-base opacity-90 mt-3 max-w-2xl leading-relaxed">
            Access IEC, guidelines, integration document, training material, and more.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 bg-card border-b border-border sticky top-11 z-40">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search resources..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-lg bg-muted border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>
            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="px-3 py-2 rounded-lg bg-muted border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
            >
              {types.map((t) => <option key={t} value={t}>{t === "All" ? "All Types" : t}</option>)}
            </select>
            <select
              value={audienceFilter}
              onChange={(e) => setAudienceFilter(e.target.value)}
              className="px-3 py-2 rounded-lg bg-muted border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
            >
              {audiences.map((a) => <option key={a} value={a}>{a === "All" ? "All Audiences" : `For ${a}`}</option>)}
            </select>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-10 bg-muted">
        <div className="container">
          <p className="text-xs text-muted-foreground mb-4">{filtered.length} resource{filtered.length !== 1 ? "s" : ""} found</p>
          <div className="grid md:grid-cols-2 gap-4">
            {filtered.map((r, i) => (
              <div key={i} className="p-5 rounded-lg bg-card border border-border hover:shadow-sm transition-shadow">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      <span className="gov-badge text-[10px]">{r.type}</span>
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-medium bg-muted text-muted-foreground">
                        {audienceIcon(r.audience)} {r.audience}
                      </span>
                    </div>
                    <h3 className="font-heading font-semibold text-sm mb-1">{r.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{r.desc}</p>
                    <span className="flex items-center gap-1 mt-2 text-[10px] text-muted-foreground">
                      <Calendar className="w-3 h-3" />{r.date}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-12">
              <FileText className="w-10 h-10 text-muted-foreground/50 mx-auto mb-3" />
              <p className="text-sm text-muted-foreground">No resources match your filters.</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default ResourcesPage;
