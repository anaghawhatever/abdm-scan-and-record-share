import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import {
  Landmark, Scale, TrendingUp, Map, Users, Building2,
  FileText, BarChart3, ArrowRight, CheckCircle, Shield,
  Target, Layers, Download, Phone, Globe, Award
} from "lucide-react";

const PolicyPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="hero-gradient py-16 md:py-20">
        <div className="container text-primary-foreground">
          <span className="gov-badge !bg-primary-foreground/20 !text-primary-foreground mb-4 inline-block">
            For Policy Stakeholders
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold max-w-3xl leading-tight">
            Enable Patient-Controlled Health Record Sharing Across Your State
          </h1>
          <p className="text-lg opacity-90 mt-4 max-w-2xl leading-relaxed">
            Scan & Record Share advances ABDM's vision of interoperable, consent-based health data exchange. Learn how your state or UT can adopt and scale this initiative.
          </p>
        </div>
      </section>

      {/* Policy Framework */}
      <section className="py-16 bg-card">
        <div className="container">
          <SectionHeader badge="Framework" title="Policy Framework & Legal Basis" />
          <div className="max-w-4xl mx-auto mt-8 grid md:grid-cols-2 gap-6">
            {[
              { icon: Scale, title: "Regulatory Foundation", desc: "Aligned with the Health Data Management Policy (HDMP) under ABDM, ensuring compliance with data protection norms, consent framework, and interoperability mandates." },
              { icon: Shield, title: "Data Governance", desc: "Built on principles of minimal data sharing, purpose limitation, time-bound access, and patient-first consent. The HIE-CM gateway is data-blind by design." },
              { icon: Globe, title: "Interoperability Standards", desc: "Uses FHIR (Fast Healthcare Interoperability Resources) standard for health data exchange, ensuring compatibility across all ABDM-compliant systems." },
              { icon: Layers, title: "ABDM Architecture Alignment", desc: "Integrates with existing ABDM building blocks — ABHA ID, PHR apps, Health Lockers, and HMIS/LMIS systems — requiring no new standalone infrastructure." },
            ].map((p) => (
              <div key={p.title} className="p-6 rounded-xl bg-background border border-border">
                <p.icon className="w-8 h-8 text-tier-policy mb-4" />
                <h3 className="font-heading font-semibold text-base mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits for States */}
      <section className="py-16 bg-background">
        <div className="container">
          <SectionHeader badge="Impact" title="Benefits for States & UTs" />
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6 mt-8">
            {[
              { icon: TrendingUp, title: "Improved Care Quality", desc: "Doctors receive comprehensive patient history at the point of care, reducing misdiagnosis and redundant tests." },
              { icon: Users, title: "Higher ABHA Utilization", desc: "Drives adoption of ABHA IDs and PHR apps as citizens see tangible value in their digital health identity." },
              { icon: BarChart3, title: "Measurable Outcomes", desc: "Track adoption via consent artefact counts, record sharing volumes, facility coverage, and user engagement metrics." },
              { icon: Building2, title: "No New Infrastructure", desc: "Leverages existing ABDM ecosystem. States only need to ensure HMIS/LMIS compliance and facility QR deployment." },
              { icon: Award, title: "Citizen Trust", desc: "Patient-controlled sharing builds public trust in digital health systems — a critical success factor for health digitization." },
              { icon: Target, title: "Policy Goal Alignment", desc: "Directly supports National Digital Health Blueprint goals of interoperable, consent-based health information exchange." },
            ].map((b) => (
              <div key={b.title} className="p-5 rounded-xl bg-card border border-border">
                <b.icon className="w-7 h-7 text-tier-policy mb-3" />
                <h3 className="font-heading font-semibold text-sm mb-1">{b.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Model */}
      <section className="py-16 bg-card">
        <div className="container">
          <SectionHeader badge="Rollout" title="Implementation Model & Phased Rollout" />
          <div className="max-w-3xl mx-auto mt-8 space-y-6">
            {[
              {
                phase: "Phase 1",
                title: "Gallery & Mobile Storage Sharing",
                status: "Current",
                items: [
                  "Share records from phone gallery/storage (PDF, JPG, PNG)",
                  "No size limit for shared records per session",
                  "All records categorized as 'Health Record Document'",
                  "APIs available for integrator onboarding",
                ],
              },
              {
                phase: "Phase 2",
                title: "Linked Health Records from PHR/Lockers",
                status: "Upcoming",
                items: [
                  "Share linked records from PHR apps and health lockers",
                  "Additional document type support based on Phase 1 learnings",
                  "File size limits introduced based on usage data",
                ],
              },
              {
                phase: "Phase 3",
                title: "Intelligent Record Classification",
                status: "Planned",
                items: [
                  "Auto-classify shared records into 7 HI types",
                  "Categories: Prescription, Diagnostic Report, Discharge Summary, Immunization, Health Document, Wellness Record, OP Consultation",
                ],
              },
            ].map((p) => (
              <div key={p.phase} className="p-6 rounded-xl bg-background border border-border">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-tier-policy text-primary-foreground">{p.phase}</span>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${p.status === "Current" ? "bg-secondary text-secondary-foreground" : "bg-muted text-muted-foreground"}`}>
                    {p.status}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-lg mb-3">{p.title}</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {p.items.map((item, i) => (
                    <li key={i} className="flex gap-2"><CheckCircle className="w-4 h-4 text-secondary shrink-0 mt-0.5" />{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* State Onboarding */}
      <section className="py-16 bg-background">
        <div className="container">
          <SectionHeader badge="Onboarding" title="State Onboarding Process" />
          <div className="max-w-3xl mx-auto mt-8">
            <div className="space-y-4">
              {[
                { step: "1", title: "Assess Readiness", desc: "Review existing HMIS/LMIS compliance levels (M2/M3) across state facilities" },
                { step: "2", title: "Engage Solution Providers", desc: "Connect with ABDM-certified HMIS vendors (CDAC, NIC, E Clinical) for integration support" },
                { step: "3", title: "Deploy Facility QR Codes", desc: "Generate and place QR codes containing facility/doctor IDs at healthcare touchpoints" },
                { step: "4", title: "Train Healthcare Workers", desc: "Orient doctors, nurses, and front-desk staff on the Scan & Share workflow" },
                { step: "5", title: "Launch & Monitor", desc: "Go live with pilot facilities, track adoption metrics, and scale progressively" },
              ].map((s) => (
                <div key={s.step} className="flex gap-4 items-start p-5 rounded-xl bg-card border border-border">
                  <div className="w-10 h-10 shrink-0 rounded-full bg-tier-policy flex items-center justify-center">
                    <span className="text-primary-foreground font-heading font-bold">{s.step}</span>
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-base">{s.title}</h4>
                    <p className="text-sm text-muted-foreground mt-0.5">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Governance */}
      <section className="py-16 bg-card">
        <div className="container">
          <SectionHeader badge="Governance" title="Governance & Accountability" />
          <div className="max-w-4xl mx-auto mt-8 grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-background border border-border">
              <h3 className="font-heading font-bold text-lg mb-4">Governance Model</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-2"><Landmark className="w-4 h-4 text-tier-policy shrink-0 mt-0.5" />NHA as the central governing body setting standards and policies</li>
                <li className="flex gap-2"><Building2 className="w-4 h-4 text-tier-policy shrink-0 mt-0.5" />State Health Departments as implementation partners</li>
                <li className="flex gap-2"><Users className="w-4 h-4 text-tier-policy shrink-0 mt-0.5" />Certified integrators as technology enablers</li>
                <li className="flex gap-2"><Shield className="w-4 h-4 text-tier-policy shrink-0 mt-0.5" />Patient consent as the foundational governance mechanism</li>
              </ul>
            </div>
            <div className="p-6 rounded-xl bg-background border border-border">
              <h3 className="font-heading font-bold text-lg mb-4">Key Performance Indicators</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-2"><BarChart3 className="w-4 h-4 text-tier-policy shrink-0 mt-0.5" />Number of record share transactions per facility</li>
                <li className="flex gap-2"><BarChart3 className="w-4 h-4 text-tier-policy shrink-0 mt-0.5" />Percentage of HMIS platforms with M3 compliance</li>
                <li className="flex gap-2"><BarChart3 className="w-4 h-4 text-tier-policy shrink-0 mt-0.5" />Number of facilities with QR codes deployed</li>
                <li className="flex gap-2"><BarChart3 className="w-4 h-4 text-tier-policy shrink-0 mt-0.5" />Patient adoption rate and satisfaction scores</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 abdm-gradient-subtle">
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold">Bring Scan & Record Share to Your State</h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
            Contact NHA to discuss implementation support, timelines, and state-specific rollout plans.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <a href="#" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold text-sm hover:brightness-110 transition-all">
              <Download className="w-4 h-4" /> Download Implementation Toolkit
            </a>
            <a href="#" className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-semibold text-sm hover:brightness-110 transition-all">
              <Phone className="w-4 h-4" /> Contact NHA
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PolicyPage;
