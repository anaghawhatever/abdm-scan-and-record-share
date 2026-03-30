import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import {
  Scale, TrendingUp, Users, Building2,
  CheckCircle, Shield, Target, Download, Phone, Award, QrCode, ExternalLink
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "How do I generate a Scan & Record Share QR code for my facility?", a: "QR codes are generated through the ABDM facility registration portal. Each QR encodes the facility\u2019s recipient information and a public encryption key (cert URL). Contact both, NHA and your HMIS provider for the QR generation tool." },
  { q: "Does my facility need M3 enablement for Scan & Record Share?", a: "No. Scan & Record Share is a patient-initiated flow. Your HMIS needs to implement the Record Share receive/decrypt endpoints. Full M3 enablement is not required for this specific feature." },
  { q: "What compliance level must our HMIS/LMIS have?", a: "Your HMIS/LMIS must be ABDM-registered and integrated with the Record Share API collection. M2-enabled PHR apps on the patient side handle the sharing." },
  { q: "How is patient consent handled?", a: "Consent is implicit — the patient physically scans the QR code and selects which records to share. They also set a duration (up to 6 hours, updatable before expiry). No separate consent artefact is needed." },
  { q: "What happens after the consent duration expires?", a: "Post expiry, the shared records can no longer be accessed by the doctor or facility. Access is automatically revoked." },
  { q: "Is any patient data stored at the facility?", a: "No. Records are view-only and displayed in a temporary window. Once closed, access is lost. The ABDM gateway also does not store any health record data." },
  { q: "What support does NHA provide for state-level rollout?", a: "NHA provides implementation toolkits, technical assistance for HMIS integration, QR code generation tools, and training materials for healthcare workers." },
  { q: "Can private facilities also adopt Scan & Record Share?", a: "Yes. Any ABDM-registered facility — public or private — can adopt Scan & Record Share by ensuring their HMIS integrates the required APIs and deploying facility QR codes." },
];

const PolicyPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="hero-gradient py-12 md:py-16">
        <div className="container text-primary-foreground">
          <p className="text-sm font-medium opacity-80 mb-2 uppercase tracking-wide">For Facilities & States</p>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-heading font-extrabold max-w-3xl leading-tight">
            Implement Scan & Record Share at Your Facility or State
          </h1>
          <p className="text-base opacity-90 mt-3 max-w-2xl leading-relaxed">
            Enable patient-controlled health record sharing across your healthcare facilities. Learn how your facility or state can adopt and scale this initiative under ABDM.
          </p>
        </div>
      </section>

      {/* Benefits — First */}
      <section className="py-12 bg-card">
        <div className="container">
          <SectionHeader title="Benefits for Facilities & States" />
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-5 mt-6">
            {[
              { icon: TrendingUp, title: "Improved Care Quality", desc: "Doctors receive comprehensive patient history at the point of care, reducing misdiagnosis and redundant tests." },
              { icon: Users, title: "Higher ABHA Utilization", desc: "Drives adoption of ABHA and PHR apps as citizens see tangible value in their digital health identity." },
              { icon: Building2, title: "No New Infrastructure", desc: "Leverages existing ABDM ecosystem. Facilities only need HMIS integration and QR deployment." },
              { icon: Award, title: "Citizen Trust", desc: "Patient-controlled sharing builds public trust in digital health systems — a critical success factor." },
              { icon: Target, title: "Policy Goal Alignment", desc: "Directly supports National Digital Health Blueprint goals of interoperable, consent-based health information exchange." },
              { icon: Shield, title: "Data Security", desc: "Records are encrypted end-to-end and access expires automatically (up to 6 hours), ensuring patient data remains protected." },
            ].map((b) => (
              <div key={b.title} className="p-4 rounded-lg bg-muted border border-border">
                <b.icon className="w-5 h-5 text-tier-policy mb-2" />
                <h3 className="font-heading font-semibold text-sm mb-1">{b.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Get Started — Second */}
      <section className="py-12 bg-muted">
        <div className="container">
          <SectionHeader title="How to Get Started" subtitle="A step-by-step process for facilities and states to adopt Scan & Record Share." />
          <div className="max-w-3xl mx-auto mt-6">
            <div className="space-y-3">
              {[
                { step: "1", title: "Assess Readiness", desc: "Review existing HMIS/LMIS integration levels across your healthcare facility." },
                { step: "2", title: "Engage Solution Providers", desc: "Connect with ABDM-certified Digital Solution Companies for integration support." },
                { step: "3", title: "Deploy Facility QR Codes", desc: "Generate and place QR codes containing facility and doctor IDs at healthcare touchpoints." },
                { step: "4", title: "Train Healthcare Workers", desc: "Orient doctors, nurses, and front-desk staff on the Scan & Record Share workflow." },
                { step: "5", title: "Launch, Socialize & Monitor", desc: "Go live with pilot facilities, create awareness through IEC materials, track adoption metrics, and scale progressively." },
              ].map((s) => (
                <div key={s.step} className="flex gap-3 items-start p-4 rounded-lg bg-card border border-border">
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
            <div className="mt-5 p-4 rounded-lg bg-accent/10 border border-accent/20">
              <p className="text-sm font-semibold text-foreground mb-1">Interested in adopting Scan & Record Share?</p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                If your HMIS provider says this feature is not feasible, please reach out to us directly. We can help assess your setup and connect you with integration-ready solution companies.
                Contact us at <a href="mailto:integration.support@abdm.gov.in" className="text-primary underline hover:no-underline font-medium">integration.support@abdm.gov.in</a> or call <strong>14477</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-12 bg-card">
        <div className="container">
          <SectionHeader title="Frequently Asked Questions" subtitle="Common questions from facilities and state administrators." />
          <div className="max-w-3xl mx-auto mt-6">
            <Accordion type="single" collapsible className="space-y-2">
              {faqs.map((f, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-lg px-4 bg-muted">
                  <AccordionTrigger className="text-sm font-semibold text-left hover:no-underline">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-muted border-t border-border">
        <div className="container text-center">
          <h2 className="text-xl md:text-2xl font-heading font-bold">Bring Scan & Record Share to Your Facility or State</h2>
          <p className="text-muted-foreground text-sm mt-2 max-w-md mx-auto">
            Contact us at integration.support@abdm.gov.in to discuss implementation support, timelines, and facility or state-specific plans.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-5">
            <a href="#" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded font-semibold text-sm hover:brightness-110 transition-all">
              <Download className="w-4 h-4" /> Download Implementation Toolkit
            </a>
           
          </div>
        </div>
      </section>

      {/* Policy Framework — Bottom */}
      <section className="py-12 bg-card">
        <div className="container">
          <SectionHeader title="Policy & Regulatory Framework" />
          <div className="max-w-4xl mx-auto mt-6 grid md:grid-cols-2 gap-5">
            {[
              { icon: Scale, title: "Regulatory Foundation", desc: "Aligned with the Health Data Management Policy (HDMP) under ABDM, ensuring compliance with data protection norms and consent framework." },
              { icon: Shield, title: "Data Governance", desc: "Built on principles of minimal data sharing, purpose limitation, time-bound access (up to 6 hours, updatable by the patient), and patient-first consent. The ABDM gateway is data-blind by design." },
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
    </Layout>
  );
};

export default PolicyPage;
