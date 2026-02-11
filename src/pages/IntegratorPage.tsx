import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import {
  Code2, Server, Shield, FileCode, Terminal, CheckCircle,
  ExternalLink, Database, Lock, Workflow, AlertTriangle, BookOpen
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const techFaqs = [
  {
    q: "What compliance level is needed for PHR applications?",
    a: "PHR applications must be at least M2 compliant. They need to integrate with the requisite APIs provided in the Record Share API collection."
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
      <section className="hero-gradient py-12 md:py-16">
        <div className="container text-primary-foreground">
          <p className="text-sm font-medium opacity-80 mb-2 uppercase tracking-wide">For Digital Solution Companies</p>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-heading font-extrabold max-w-3xl leading-tight">
            Integrate Scan & Record Share Into Your Platform
          </h1>
          <p className="text-base opacity-90 mt-3 max-w-2xl leading-relaxed">
            Build patient-initiated record sharing into your HMIS, PHR app, or health platform using ABDM APIs. Sandbox access is available now.
          </p>
          <div className="flex flex-wrap gap-3 mt-5">
            <a href="#" className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-5 py-2.5 rounded font-semibold text-sm hover:brightness-110 transition-all">
              <Terminal className="w-4 h-4" /> Access Sandbox
            </a>
            <a href="#" className="inline-flex items-center gap-2 bg-primary-foreground/15 text-primary-foreground border border-primary-foreground/30 px-5 py-2.5 rounded font-semibold text-sm hover:bg-primary-foreground/25 transition-all">
              <BookOpen className="w-4 h-4" /> API Documentation
            </a>
          </div>
        </div>
      </section>

      {/* Technical Flow */}
      <section className="py-12 bg-card">
        <div className="container">
          <SectionHeader title="How It Works — Technical Flow" />
          <div className="max-w-4xl mx-auto mt-6">
            <div className="bg-muted rounded-lg border border-border p-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-heading font-bold text-base mb-3">Architecture Overview</h3>
                  <ol className="space-y-2.5 text-sm text-muted-foreground">
                    <li className="flex gap-2"><span className="text-primary font-bold shrink-0">1.</span> QR code at facility contains Receiver ID and encryption public key</li>
                    <li className="flex gap-2"><span className="text-primary font-bold shrink-0">2.</span> Patient scans QR via ABDM-enabled PHR app, selects records and consent duration</li>
                    <li className="flex gap-2"><span className="text-primary font-bold shrink-0">3.</span> PHR app creates FHIR bundle with records, sends to HIE-CM</li>
                    <li className="flex gap-2"><span className="text-primary font-bold shrink-0">4.</span> HIE-CM generates consent artefacts and notifies HIU</li>
                    <li className="flex gap-2"><span className="text-primary font-bold shrink-0">5.</span> HIU receives encrypted data and decrypts it</li>
                    <li className="flex gap-2"><span className="text-primary font-bold shrink-0">6.</span> Doctor views records. Access expires on consent expiry</li>
                  </ol>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-base mb-3">Key Components</h3>
                  <div className="space-y-3">
                    {[
                      { icon: Server, label: "HIE-CM (Gateway)", desc: "Data-blind consent manager routing requests" },
                      { icon: Database, label: "HIP / PHR Locker", desc: "Source of patient health records" },
                      { icon: Workflow, label: "HIU (HMIS/LMIS)", desc: "Recipient system displaying records" },
                      { icon: Lock, label: "Encryption Layer", desc: "Public-private key based encryption" },
                    ].map((c) => (
                      <div key={c.label} className="flex gap-3 items-start">
                        <c.icon className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
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

      {/* Integration Checklist */}
      <section className="py-12 bg-muted">
        <div className="container">
          <SectionHeader title="Integration Checklist" />
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-5 mt-6">
            <div className="p-5 rounded-lg bg-card border border-border">
              <h3 className="font-heading font-bold text-base mb-3 flex items-center gap-2">
                <Code2 className="w-4 h-4 text-primary" /> For PHR Applications (HIP)
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {[
                  "Must be at least M2 compliant",
                  "Integrate Record Share API collection",
                  "Build front-end UI for record selection & sharing",
                  "Support scanning facility QR codes",
                  "Ensure shared records are ABHA-linked or self-uploaded",
                  "Send notification to HIE-CM confirming record delivery",
                ].map((item, i) => (
                  <li key={i} className="flex gap-2"><CheckCircle className="w-3.5 h-3.5 text-secondary shrink-0 mt-0.5" />{item}</li>
                ))}
              </ul>
            </div>
            <div className="p-5 rounded-lg bg-card border border-border">
              <h3 className="font-heading font-bold text-base mb-3 flex items-center gap-2">
                <Server className="w-4 h-4 text-primary" /> For HMIS/LMIS Solutions (HIU)
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {[
                  "Must be M3 compliant",
                  "Consume APIs from Record Share API collection",
                  "Build backend & front-end for receiving/viewing records",
                  "Ensure records inaccessible post consent expiry",
                  "Send acknowledgement to HIE-CM on record receipt",
                  "Implement on-share API endpoints",
                ].map((item, i) => (
                  <li key={i} className="flex gap-2"><CheckCircle className="w-3.5 h-3.5 text-secondary shrink-0 mt-0.5" />{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* API Reference — White-labelled */}
      <section className="py-12 bg-card">
        <div className="container">
          <SectionHeader title="API Reference Overview" subtitle="Key API categories for the Scan & Record Share integration." />
          <div className="max-w-3xl mx-auto mt-6 space-y-3">
            {[
              { category: "Record Share Initiation", desc: "APIs for PHR applications to initiate patient-controlled record sharing with a healthcare facility." },
              { category: "Record Share Callbacks", desc: "Callback APIs for the HIE-CM gateway to deliver records and status updates to the HIU." },
              { category: "Record Share Acknowledgement", desc: "APIs for the HIU to confirm receipt and acknowledge the record share transaction." },
              { category: "Record Share Notifications", desc: "Notification APIs to inform relevant parties about record share events and status changes." },
              { category: "Record Share Details", desc: "APIs to retrieve details of past record share transactions for audit and display." },
            ].map((api, i) => (
              <div key={i} className="p-4 rounded-lg bg-muted border border-border flex items-start gap-3">
                <div className="w-6 h-6 rounded bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-xs font-bold text-primary">{i + 1}</span>
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-sm">{api.category}</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">{api.desc}</p>
                </div>
              </div>
            ))}
            <p className="text-xs text-muted-foreground text-center pt-2">
              Sandbox environment available for testing. Detailed API specifications and Postman collections are provided upon sandbox registration.
            </p>
          </div>
        </div>
      </section>

      {/* Certification Pathway */}
      <section className="py-12 bg-muted">
        <div className="container">
          <SectionHeader title="Certification Pathway" />
          <div className="max-w-3xl mx-auto mt-6 flex flex-col gap-3">
            {[
              { step: "1", title: "Register on ABDM Sandbox", desc: "Create your developer account and get your Bridge ID from NHA." },
              { step: "2", title: "Develop & Integrate APIs", desc: "Implement the required endpoints from the Record Share API collection." },
              { step: "3", title: "Test in Sandbox", desc: "Validate the end-to-end flow in the sandbox environment." },
              { step: "4", title: "Submit for Compliance Review", desc: "Request NHA compliance verification for your integration." },
              { step: "5", title: "Go Live", desc: "Upon certification, deploy to the production environment." },
            ].map((s) => (
              <div key={s.step} className="flex gap-3 items-start p-4 rounded-lg bg-card border border-border">
                <div className="w-8 h-8 shrink-0 rounded-full bg-tier-integrator flex items-center justify-center">
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
      </section>

      {/* Compliance */}
      <section className="py-12 bg-card">
        <div className="container">
          <SectionHeader title="Compliance Requirements" />
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-5 mt-6">
            {[
              { icon: Shield, title: "Data Privacy", items: ["Patient consent for every share", "No permanent storage by provider", "Time-bound access only", "Purpose limitation"] },
              { icon: FileCode, title: "Technical Standards", items: ["FHIR-compliant data bundles", "Encrypted data transfer", "ABHA-linked records", "Supported formats: PDF, JPG, PNG"] },
              { icon: AlertTriangle, title: "Do's & Don'ts", items: ["Do: Minimal data sharing", "Do: Interoperability (FHIR)", "Don't: Consentless access", "Don't: Permanent storage"] },
            ].map((c) => (
              <div key={c.title} className="p-5 rounded-lg bg-muted border border-border">
                <c.icon className="w-6 h-6 text-primary mb-3" />
                <h3 className="font-heading font-semibold text-sm mb-2">{c.title}</h3>
                <ul className="space-y-1.5 text-xs text-muted-foreground">
                  {c.items.map((item, i) => (
                    <li key={i} className="flex gap-1.5"><CheckCircle className="w-3 h-3 text-secondary shrink-0 mt-0.5" />{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech FAQs */}
      <section className="py-12 bg-muted">
        <div className="container">
          <SectionHeader title="Technical FAQs" />
          <div className="max-w-3xl mx-auto mt-6">
            <Accordion type="single" collapsible className="space-y-2">
              {techFaqs.map((f, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-lg px-4 bg-card">
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
      <section className="py-12 bg-card border-t border-border">
        <div className="container text-center">
          <h2 className="text-xl md:text-2xl font-heading font-bold">Ready to Integrate?</h2>
          <p className="text-muted-foreground text-sm mt-2 max-w-md mx-auto">
            Start building with the Scan & Record Share APIs. Sandbox access is open for all registered Digital Solution Companies.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-5">
            <a href="#" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded font-semibold text-sm hover:brightness-110 transition-all">
              <Terminal className="w-4 h-4" /> Register for Sandbox
            </a>
            <a href="#" className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-5 py-2.5 rounded font-semibold text-sm hover:brightness-110 transition-all">
              <ExternalLink className="w-4 h-4" /> Developer Portal
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default IntegratorPage;
