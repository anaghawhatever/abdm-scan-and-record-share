import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import {
  Scale, TrendingUp, Users, Building2,
  CheckCircle, Shield, Target, Download, Phone, Award
} from "lucide-react";

const PolicyPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="hero-gradient py-12 md:py-16">
        <div className="container text-primary-foreground">
          <p className="text-sm font-medium opacity-80 mb-2 uppercase tracking-wide">For States & Union Territories</p>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-heading font-extrabold max-w-3xl leading-tight">
            Implement Scan & Record Share in Your State
          </h1>
          <p className="text-base opacity-90 mt-3 max-w-2xl leading-relaxed">
            Enable patient-controlled health record sharing across your healthcare facilities. Learn how your state or UT can adopt and scale this initiative under ABDM.
          </p>
        </div>
      </section>

      {/* Policy Framework */}
      <section className="py-12 bg-card">
        <div className="container">
          <SectionHeader title="Policy Framework & Legal Basis" />
          <div className="max-w-4xl mx-auto mt-6 grid md:grid-cols-2 gap-5">
            {[
              { icon: Scale, title: "Regulatory Foundation", desc: "Aligned with the Health Data Management Policy (HDMP) under ABDM, ensuring compliance with data protection norms and consent framework." },
              { icon: Shield, title: "Data Governance", desc: "Built on principles of minimal data sharing, purpose limitation, time-bound access, and patient-first consent. The HIE-CM gateway is data-blind by design." },
            ].map((p) => (
              <div key={p.title} className="p-5 rounded-lg bg-muted border border-border">
                <p.icon className="w-6 h-6 text-tier-policy mb-3" />
                <h3 className="font-heading font-semibold text-sm mb-1.5">{p.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits for States */}
      <section className="py-12 bg-muted">
        <div className="container">
          <SectionHeader title="Benefits for States & UTs" />
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-5 mt-6">
            {[
              { icon: TrendingUp, title: "Improved Care Quality", desc: "Doctors receive comprehensive patient history at the point of care, reducing misdiagnosis and redundant tests." },
              { icon: Users, title: "Higher ABHA Utilization", desc: "Drives adoption of ABHA IDs and PHR apps as citizens see tangible value in their digital health identity." },
              { icon: Building2, title: "No New Infrastructure", desc: "Leverages existing ABDM ecosystem. States only need to ensure HMIS/LMIS compliance and facility QR deployment." },
              { icon: Award, title: "Citizen Trust", desc: "Patient-controlled sharing builds public trust in digital health systems — a critical success factor." },
              { icon: Target, title: "Policy Goal Alignment", desc: "Directly supports National Digital Health Blueprint goals of interoperable, consent-based health information exchange." },
              { icon: Shield, title: "Data Security", desc: "Records are encrypted end-to-end and access expires automatically, ensuring patient data remains protected." },
            ].map((b) => (
              <div key={b.title} className="p-4 rounded-lg bg-card border border-border">
                <b.icon className="w-5 h-5 text-tier-policy mb-2" />
                <h3 className="font-heading font-semibold text-sm mb-1">{b.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* State Onboarding */}
      <section className="py-12 bg-card">
        <div className="container">
          <SectionHeader title="How to Get Started" subtitle="A step-by-step process for states and UTs to adopt Scan & Record Share." />
          <div className="max-w-3xl mx-auto mt-6">
            <div className="space-y-3">
              {[
                { step: "1", title: "Assess Readiness", desc: "Review existing HMIS/LMIS compliance levels (M2/M3) across state healthcare facilities." },
                { step: "2", title: "Engage Solution Providers", desc: "Connect with ABDM-certified Digital Solution Companies for integration support." },
                { step: "3", title: "Deploy Facility QR Codes", desc: "Generate and place QR codes containing facility and doctor IDs at healthcare touchpoints." },
                { step: "4", title: "Train Healthcare Workers", desc: "Orient doctors, nurses, and front-desk staff on the Scan & Record Share workflow." },
                { step: "5", title: "Launch & Monitor", desc: "Go live with pilot facilities, track adoption metrics, and scale progressively." },
              ].map((s) => (
                <div key={s.step} className="flex gap-3 items-start p-4 rounded-lg bg-muted border border-border">
                  <div className="w-8 h-8 shrink-0 rounded-full bg-tier-policy flex items-center justify-center">
                    <span className="text-primary-foreground font-heading font-bold text-sm">{s.step}</span>
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-sm">{s.title}</h4>
                    <p className="text-xs text-muted-foreground mt-0.5">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-muted border-t border-border">
        <div className="container text-center">
          <h2 className="text-xl md:text-2xl font-heading font-bold">Bring Scan & Record Share to Your State</h2>
          <p className="text-muted-foreground text-sm mt-2 max-w-md mx-auto">
            Contact NHA to discuss implementation support, timelines, and state-specific rollout plans.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-5">
            <a href="#" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded font-semibold text-sm hover:brightness-110 transition-all">
              <Download className="w-4 h-4" /> Download Implementation Toolkit
            </a>
            <a href="#" className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-5 py-2.5 rounded font-semibold text-sm hover:brightness-110 transition-all">
              <Phone className="w-4 h-4" /> Contact NHA
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PolicyPage;
