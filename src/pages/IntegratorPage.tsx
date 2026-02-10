import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import {
  Code2, Server, Shield, FileCode, Terminal, CheckCircle,
  ArrowRight, ExternalLink, GitBranch, Database, Lock,
  Workflow, AlertTriangle, BookOpen
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const apis = [
  { method: "POST", endpoint: "/api/hiecm/patient-record/v3/share", desc: "Initiate patient record sharing from PHR app to HIE-CM" },
  { method: "POST", endpoint: "/api/v3/patient-record/share (callback)", desc: "HIE-CM callback to HIU with record share status" },
  { method: "POST", endpoint: "/api/v3/hiecm/record-share/on-share", desc: "HIU acknowledgement of record share" },
  { method: "POST", endpoint: "/api/hiecm/patient-record/v3/on-share", desc: "HIU callback acknowledgement" },
  { method: "POST", endpoint: "/api/hiecm/patient-record/v3/share/notify", desc: "Record share notification" },
  { method: "GET", endpoint: "/api/hiecm/patient-record/v3/share/details", desc: "Get all record share details" },
];

const techFaqs = [
  {
    q: "What compliance level is needed for PHR applications?",
    a: "PHR applications must be at least M2 compliant. They need to integrate with the requisite APIs provided in the Record Share Postman Collection."
  },
  {
    q: "What compliance level is needed for HMIS/LMIS solutions?",
    a: "HMIS/LMIS solutions must be M3 compliant and integrate with the requisite APIs for patient-initiated sharing of records."
  },
  {
    q: "What document formats are supported?",
    a: "Currently JPG, PNG, and PDF formats are supported. Records are wrapped in FHIR bundles mapped to the patient profile."
  },
  {
    q: "How does consent work in this flow?",
    a: "Since the record sharing is patient-initiated, consent is implicit. The patient scans the QR code and selects records, implying consent. PHR apps can add explicit consent confirmation flows."
  },
  {
    q: "How is data encrypted during transfer?",
    a: "The QR code contains a URL Cert (public encryption key). Records are encrypted using this key and decrypted by the HIU using the corresponding private key. The HIE-CM gateway is data-blind."
  },
  {
    q: "What is the consent expiry duration?",
    a: "The patient sets the consent expiry, with a maximum of 6 hours. After expiry, the URL containing the records becomes inaccessible."
  },
];

const IntegratorPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="hero-gradient py-16 md:py-20">
        <div className="container text-primary-foreground">
          <span className="gov-badge !bg-primary-foreground/20 !text-primary-foreground mb-4 inline-block">
            For Integrators & Developers
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold max-w-3xl leading-tight">
            Integrate Scan & Record Share Into Your Platform
          </h1>
          <p className="text-lg opacity-90 mt-4 max-w-2xl leading-relaxed">
            Build patient-initiated record sharing into your HMIS, PHR app, or health platform using ABDM APIs. Sandbox access is available now.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <a href="#" className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold text-sm hover:brightness-110 transition-all shadow-lg">
              <Terminal className="w-4 h-4" /> Access Sandbox
            </a>
            <a href="#" className="inline-flex items-center gap-2 bg-primary-foreground/15 text-primary-foreground border border-primary-foreground/30 px-6 py-3 rounded-lg font-semibold text-sm hover:bg-primary-foreground/25 transition-all">
              <BookOpen className="w-4 h-4" /> API Documentation
            </a>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-card">
        <div className="container">
          <SectionHeader badge="Overview" title="How It Works — Technical Flow" />
          <div className="max-w-4xl mx-auto mt-8">
            <div className="bg-background rounded-2xl border border-border p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-heading font-bold text-lg mb-4">Architecture Overview</h3>
                  <ol className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex gap-3"><span className="text-primary font-bold">1.</span> QR code at facility contains Receiver ID (HIP/HPR ID), counter ID, and encryption public key</li>
                    <li className="flex gap-3"><span className="text-primary font-bold">2.</span> Patient scans QR via ABDM-enabled PHR app, selects records and consent duration</li>
                    <li className="flex gap-3"><span className="text-primary font-bold">3.</span> PHR app creates FHIR bundle with records as attachments, sends to HIE-CM</li>
                    <li className="flex gap-3"><span className="text-primary font-bold">4.</span> HIE-CM generates consent artefacts and notifies HIU</li>
                    <li className="flex gap-3"><span className="text-primary font-bold">5.</span> HIU receives encrypted data, decrypts using public-private key pair</li>
                    <li className="flex gap-3"><span className="text-primary font-bold">6.</span> Doctor views records. URL expires on consent expiry</li>
                  </ol>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg mb-4">Key Components</h3>
                  <div className="space-y-3">
                    {[
                      { icon: Server, label: "HIE-CM (Gateway)", desc: "Data-blind consent manager routing requests" },
                      { icon: Database, label: "HIP / PHR Locker", desc: "Source of patient health records" },
                      { icon: Workflow, label: "HIU (HMIS/LMIS)", desc: "Recipient system displaying records" },
                      { icon: Lock, label: "Encryption Layer", desc: "Public-private key based encryption" },
                    ].map((c) => (
                      <div key={c.label} className="flex gap-3 items-start">
                        <c.icon className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                        <div>
                          <div className="font-semibold text-sm">{c.label}</div>
                          <div className="text-xs text-muted-foreground">{c.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prerequisites */}
      <section className="py-16 bg-background">
        <div className="container">
          <SectionHeader badge="Prerequisites" title="Integration Checklist" />
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl bg-card border border-border">
              <h3 className="font-heading font-bold text-lg mb-4 flex items-center gap-2">
                <Code2 className="w-5 h-5 text-primary" /> For PHR Applications (HIP)
              </h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {[
                  "Must be at least M2 compliant",
                  "Integrate Record Share Postman Collection APIs",
                  "Build front-end UI for record selection & sharing",
                  "Support scanning facility QR codes",
                  "Ensure shared records are ABHA-linked or self-uploaded",
                  "Send notify to HIE-CM confirming record delivery",
                ].map((item, i) => (
                  <li key={i} className="flex gap-2"><CheckCircle className="w-4 h-4 text-secondary shrink-0 mt-0.5" />{item}</li>
                ))}
              </ul>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border">
              <h3 className="font-heading font-bold text-lg mb-4 flex items-center gap-2">
                <Server className="w-5 h-5 text-primary" /> For HMIS/LMIS Solutions (HIU)
              </h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {[
                  "Must be M3 compliant",
                  "Consume APIs from Record Share Postman Collection",
                  "Build backend & front-end for receiving/viewing records",
                  "Ensure records inaccessible post consent expiry",
                  "Send acknowledgement to HIE-CM on record receipt",
                  "Implement new on-share API endpoints",
                ].map((item, i) => (
                  <li key={i} className="flex gap-2"><CheckCircle className="w-4 h-4 text-secondary shrink-0 mt-0.5" />{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* API Reference */}
      <section className="py-16 bg-card">
        <div className="container">
          <SectionHeader badge="APIs" title="API Reference Overview" subtitle="Key endpoints for the Scan & Record Share flow" />
          <div className="max-w-4xl mx-auto mt-8 space-y-3">
            <div className="bg-background rounded-xl border border-border overflow-hidden">
              <div className="grid grid-cols-[80px_1fr_1fr] md:grid-cols-[80px_1fr_2fr] font-heading text-xs font-semibold text-muted-foreground px-5 py-3 border-b border-border bg-muted/50">
                <span>Method</span><span>Endpoint</span><span className="hidden md:block">Description</span>
              </div>
              {apis.map((api, i) => (
                <div key={i} className="grid grid-cols-[80px_1fr_1fr] md:grid-cols-[80px_1fr_2fr] px-5 py-3 border-b border-border last:border-0 text-sm items-center">
                  <span className="font-mono text-xs font-bold text-secondary">{api.method}</span>
                  <span className="font-mono text-xs text-foreground break-all">{api.endpoint}</span>
                  <span className="hidden md:block text-xs text-muted-foreground">{api.desc}</span>
                </div>
              ))}
            </div>
            <div className="text-center mt-4">
              <p className="text-xs text-muted-foreground">
                Base URLs — Sandbox: <code className="bg-muted px-2 py-0.5 rounded text-xs">https://dev.abdm.gov.in</code> | Production: <code className="bg-muted px-2 py-0.5 rounded text-xs">https://apis.abdm.gov.in</code>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certification */}
      <section className="py-16 bg-background">
        <div className="container">
          <SectionHeader badge="Certification" title="Certification Pathway" />
          <div className="max-w-3xl mx-auto mt-8">
            <div className="flex flex-col gap-4">
              {[
                { step: "1", title: "Register on ABDM Sandbox", desc: "Create your developer account and get Bridge ID (client ID) from NHA" },
                { step: "2", title: "Develop & Integrate APIs", desc: "Implement required endpoints from the Record Share API collection" },
                { step: "3", title: "Test in Sandbox", desc: "Validate end-to-end flow in the sandbox environment (dev.abdm.gov.in)" },
                { step: "4", title: "Submit for Compliance Review", desc: "Request NHA compliance verification for your integration" },
                { step: "5", title: "Go Live", desc: "Upon certification, deploy to production (apis.abdm.gov.in)" },
              ].map((s) => (
                <div key={s.step} className="flex gap-4 items-start p-5 rounded-xl bg-card border border-border">
                  <div className="w-10 h-10 shrink-0 rounded-full bg-tier-integrator flex items-center justify-center">
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

      {/* Compliance */}
      <section className="py-16 bg-card">
        <div className="container">
          <SectionHeader badge="Compliance" title="Compliance Requirements" />
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6 mt-8">
            {[
              { icon: Shield, title: "Data Privacy", items: ["Patient consent for every share", "No permanent storage by HSP", "Time-bound access only", "Purpose limitation"] },
              { icon: FileCode, title: "Technical Standards", items: ["FHIR-compliant data bundles", "Encrypted data transfer", "ABHA-linked records only", "Supported formats: PDF, JPG, PNG"] },
              { icon: AlertTriangle, title: "Do's & Don'ts", items: ["Do: Minimal data sharing", "Do: Interoperability (FHIR)", "Don't: Consentless access", "Don't: Permanent access or storage"] },
            ].map((c) => (
              <div key={c.title} className="p-6 rounded-xl bg-background border border-border">
                <c.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-heading font-semibold text-base mb-3">{c.title}</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {c.items.map((item, i) => (
                    <li key={i} className="flex gap-2"><CheckCircle className="w-3.5 h-3.5 text-secondary shrink-0 mt-0.5" />{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech FAQs */}
      <section className="py-16 bg-background">
        <div className="container">
          <SectionHeader badge="FAQ" title="Technical FAQs" />
          <div className="max-w-3xl mx-auto mt-8">
            <Accordion type="single" collapsible className="space-y-2">
              {techFaqs.map((f, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-xl px-5 bg-card">
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
      <section className="py-16 abdm-gradient-subtle">
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold">Ready to Integrate?</h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
            Start building with the Scan & Record Share APIs today. Sandbox access is open for all registered integrators.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <a href="#" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold text-sm hover:brightness-110 transition-all">
              <Terminal className="w-4 h-4" /> Register for Sandbox
            </a>
            <a href="#" className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-semibold text-sm hover:brightness-110 transition-all">
              <ExternalLink className="w-4 h-4" /> Developer Portal
            </a>
          </div>
          <p className="text-xs text-muted-foreground mt-4">
            Current integrators: ABHA PHR, Ekacare, Aarogya One, E Clinical PHR, CDAC, NIC
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default IntegratorPage;
