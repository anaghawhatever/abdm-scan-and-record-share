import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import {
  Code2, Server, Shield, FileCode, Terminal, CheckCircle,
  ExternalLink, Database, Lock, Workflow, BookOpen,
  ArrowRight, QrCode, Smartphone, Share2, Monitor
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
    a: "PHR applications must be at least M2-enabled. They need to integrate with the requisite APIs provided in the Record Share API collection."
  },
  {
    q: "What compliance level is needed for HMIS/LMIS solutions?",
    a: "HMIS/LMIS solutions acting as HIUs need to implement Record Share receive/decrypt endpoints. Full M3 enablement is not required for this flow."
  },
  {
    q: "What document formats are supported?",
    a: "Currently JPG, PNG, and PDF formats are supported. Records are wrapped in FHIR bundles mapped to the patient profile."
  },
  {
    q: "How does consent work in Scan & Record Share?",
    a: "Since the record sharing is patient-initiated, consent is implicit through the patient's physical action of scanning the QR code and selecting records. The patient also sets a consent duration of up to 6 hours, which can be updated before expiry."
  },
  {
    q: "How is data encrypted during transfer?",
    a: "The QR code contains a cert URL (public encryption key). Records are encrypted using this key and decrypted by the HIU using the corresponding private key. The ABDM gateway is data-blind."
  },
  {
    q: "How does consent work in the M3 flow?",
    a: "In the M3 flow, consent is still explicitly required — it is built into the flow as a consent artefact managed by the HIE-CM. M3 removes the additional step of the patient needing to be physically present, but does not remove the consent requirement itself."
  },
];

const userFlowSteps = [
  { icon: QrCode, title: "QR Code at Facility", desc: "QR code at counter contains recipient info and cert URL." },
  { icon: Smartphone, title: "Patient Scans QR", desc: "PHR app scans QR, receives recipient details and public key." },
  { icon: FileCode, title: "Select & Encrypt", desc: "Patient selects records. PHR encrypts in FHIR format using public key." },
  { icon: Share2, title: "Send via /share API", desc: "PHR bundles and sends metadata + encrypted records to ABDM gateway." },
  { icon: Server, title: "Gateway Routes", desc: "ABDM gateway identifies recipient, forwards encrypted payload. Cannot read data." },
  { icon: Monitor, title: "HIU Displays", desc: "HIU decrypts and displays records. Access lost when window is closed." },
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
              <Terminal className="w-4 h-4" /> Register for Sandbox
            </a>
            <a href="#" className="inline-flex items-center gap-2 bg-primary-foreground/15 text-primary-foreground border border-primary-foreground/30 px-5 py-2.5 rounded font-semibold text-sm hover:bg-primary-foreground/25 transition-all">
              <BookOpen className="w-4 h-4" /> Sandbox Documentation
            </a>
          </div>
        </div>
      </section>

      {/* Architecture Overview — Centerpiece */}
      <section className="py-12 bg-card">
        <div className="container">
          <SectionHeader title="Architecture Overview" subtitle="The end-to-end data flow of Scan & Record Share." />
          <div className="max-w-5xl mx-auto mt-6">
            <div className="bg-muted rounded-lg border border-border p-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-heading font-bold text-base mb-3">Data Flow</h3>
                  <ol className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex gap-2"><span className="text-primary font-bold shrink-0">1.</span> QR code at facility contains recipient info and cert URL (public encryption key).</li>
                    <li className="flex gap-2"><span className="text-primary font-bold shrink-0">2.</span> PHR app scans QR, patient selects records, PHR encrypts them in FHIR format using the public key.</li>
                    <li className="flex gap-2"><span className="text-primary font-bold shrink-0">3.</span> PHR bundles patient info (x-auth token), recipient details, and encrypted records — sends to ABDM gateway via /share API.</li>
                    <li className="flex gap-2"><span className="text-primary font-bold shrink-0">4.</span> ABDM gateway identifies recipient and forwards encrypted payload. Gateway is data-blind — cannot read, view, or store records.</li>
                    <li className="flex gap-2"><span className="text-primary font-bold shrink-0">5.</span> HIU decrypts data using its private key and displays records. Once window is closed, access is lost.</li>
                    <li className="flex gap-2"><span className="text-primary font-bold shrink-0">6.</span> Gateway only logs transaction metadata (who sent to whom, timestamp).</li>
                  </ol>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-base mb-3">Key Components</h3>
                  <div className="space-y-3">
                    {[
                      { icon: Server, label: "ABDM Gateway (HIE-CM)", desc: "Data-blind consent manager — routes requests, logs metadata only" },
                      { icon: Database, label: "HIP / PHR Locker", desc: "Source of patient health records (PHR application)" },
                      { icon: Workflow, label: "HIU (HMIS/LMIS)", desc: "Recipient system — decrypts and displays shared records" },
                      { icon: Lock, label: "Encryption Layer", desc: "Public-private key encryption via QR cert URL" },
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

      {/* Integration Flow — Tighter */}
      <section className="py-12 bg-muted">
        <div className="container">
          <SectionHeader title="Scan & Record Share - Integration Flow" />
          <div className="max-w-6xl mx-auto mt-6">
            <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
              {userFlowSteps.map((step, i) => (
                <div key={i} className="relative p-3 rounded-lg bg-card border border-border text-center">
                  <div className="flex items-center justify-center gap-1.5 mb-1.5">
                    <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                      <span className="text-primary-foreground font-bold text-[9px]">{i + 1}</span>
                    </div>
                    <step.icon className="w-3.5 h-3.5 text-tier-integrator" />
                  </div>
                  <h4 className="font-heading font-semibold text-[11px] mb-0.5">{step.title}</h4>
                  <p className="text-[10px] text-muted-foreground leading-relaxed">{step.desc}</p>
          
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* M3 Comparison — Tighter */}
      <section className="py-12 bg-card">
        <div className="container">
          <SectionHeader
            title="Scan & Record Share vs. M3 Flow"
            subtitle="Understanding the key distinction: patient-initiated push vs. facility-initiated pull."
          />
          <div className="max-w-4xl mx-auto mt-6">
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-primary text-primary-foreground">
                    <th className="text-left p-3 font-heading font-semibold">Aspect</th>
                    <th className="text-left p-3 font-heading font-semibold">M3 Flow</th>
                    <th className="text-left p-3 font-heading font-semibold">Scan & Record Share</th>
                  </tr>
                </thead>
                <tbody className="bg-card">
                  {[
                    {
                      aspect: "Who initiates?",
                      m3: "Facility / HIU initiates a consent request",
                      srs: "Patient initiates by scanning a QR code"
                    },
                    {
                      aspect: "Consent",
                      m3: "Explicit consent required — built into the flow via HIE-CM consent artefact. M3 removes an additional click, not the consent requirement.",
                      srs: "Implicit consent — patient physically selects and shares records at the point of care"
                    },
                    {
                      aspect: "PHR / HIP requirement",
                      m3: "HIP must be M3-enabled with full callback implementation",
                      srs: "PHR app needs only M2 enablement + Record Share APIs"
                    },
                    {
                      aspect: "Data flow",
                      m3: "Pull model — HIU requests, HIP responds after consent",
                      srs: "Push model — Patient pushes records directly to recipient"
                    },
                    {
                      aspect: "Consent duration",
                      m3: "Defined by consent artefact (can be long-term)",
                      srs: "Short-lived — up to 6 hours, set and updatable by the patient"
                    },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-card" : "bg-muted/50"}>
                      <td className="p-3 font-semibold text-foreground border-t border-border">{row.aspect}</td>
                      <td className="p-3 text-muted-foreground border-t border-border">{row.m3}</td>
                      <td className="p-3 text-muted-foreground border-t border-border">{row.srs}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground mt-4 leading-relaxed">
              <strong>Note:</strong> In both flows, consent is required. The M3 flow embeds consent as a formal artefact managed by the ABDM gateway. Scan & Record Share uses implicit consent through the patient's physical action. M3 removes the need for the patient to be present — it does not remove the consent requirement itself.
            </p>
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
                  "Must be at least M2-enabled",
                  "Integrate Record Share API collection",
                  "Build front-end UI for record selection & sharing",
                  "Support scanning facility QR codes",
                  "Ensure shared records are ABHA-linked or self-uploaded",
                  "Send notification to ABDM gateway confirming record delivery",
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
                  "Implement Record Share receive/decrypt endpoints",
                  "Consume APIs from Record Share API collection",
                  "Build front-end for receiving/viewing shared records",
                  "Ensure records are inaccessible post consent expiry",
                  "Send acknowledgement to ABDM gateway on record receipt",
                  "Implement on-share API endpoints",
                ].map((item, i) => (
                  <li key={i} className="flex gap-2"><CheckCircle className="w-3.5 h-3.5 text-secondary shrink-0 mt-0.5" />{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* API Reference */}
      <section className="py-12 bg-card">
        <div className="container">
          <SectionHeader title="API Reference Overview" subtitle="Key API categories for the Scan & Record Share integration." />
          <div className="max-w-3xl mx-auto mt-6 space-y-3">
            {[
              { category: "Record Share Initiation", desc: "APIs for PHR applications to initiate patient-controlled record sharing with a healthcare facility." },
              { category: "Record Share Callbacks", desc: "Callback APIs for the ABDM gateway to deliver records and status updates to the HIU." },
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
            <div className="text-center pt-3">
              <a href="#" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded font-semibold text-sm hover:brightness-110 transition-all">
                <ExternalLink className="w-4 h-4" /> View Full API Documentation
              </a>
              <p className="text-xs text-muted-foreground mt-2">
                Sandbox environment available for testing. Detailed API specifications and Postman collections are provided upon sandbox registration.
              </p>
            </div>
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
              { icon: Shield, title: "Data Privacy", items: ["Patient consent for every share", "No permanent storage by provider", "Time-bound access (up to 6 hours)", "Purpose limitation"] },
              { icon: FileCode, title: "Technical Standards", items: ["FHIR-compliant data bundles", "Encrypted data transfer", "ABHA-linked records", "Supported formats: PDF, JPG, PNG"] },
              { icon: Lock, title: "Do's & Don'ts", items: ["Do: Minimal data sharing", "Do: Interoperability (FHIR)", "Don't: Consentless access", "Don't: Permanent storage"] },
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
              <ExternalLink className="w-4 h-4" /> Sandbox Documentation
            </a>
          </div>
          <p className="text-xs text-muted-foreground mt-4">
            Have integration queries? Reach out to us at <a href="mailto:integration.support@abdm.gov.in" className="text-primary underline hover:no-underline font-medium">integration.support@abdm.gov.in</a>
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default IntegratorPage;
