import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import {
  Code2, Server, Shield, FileCode, Terminal, CheckCircle,
  ExternalLink, Database, Lock, Workflow, AlertTriangle, BookOpen,
  ArrowDown, ArrowRight, QrCode, Smartphone, Share2, Monitor
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
    a: "Since the record sharing is patient-initiated, consent is implicit. The patient scans the QR code and selects records, implying consent. The patient also sets a consent duration of up to 6 hours, which can be updated before expiry."
  },
  {
    q: "How is data encrypted during transfer?",
    a: "The QR code contains a URL Cert (public encryption key). Records are encrypted using this key and decrypted by the HIU using the corresponding private key. The HIE-CM gateway is data-blind."
  },
  {
    q: "What is the consent expiry duration?",
    a: "The patient sets the consent expiry, up to a maximum of 6 hours. The patient can also update the duration before it expires. After expiry, the URL containing the records becomes inaccessible."
  },
];

const userFlowSteps = [
  { icon: QrCode, title: "QR Code at Facility", desc: "QR code placed at the counter contains recipient information." },
  { icon: Smartphone, title: "Patient Scans QR", desc: "PHR app scans QR, receives recipient info and cert URL (public encryption key)." },
  { icon: FileCode, title: "Patient Selects Records", desc: "Patient selects records to share. PHR encrypts in FHIR format using the public key." },
  { icon: Share2, title: "PHR Sends to HIE-CM", desc: "PHR bundles patient info, recipient info, and encrypted records, sends via /share API." },
  { icon: Server, title: "HIE-CM Routes to HIU", desc: "HIE-CM identifies recipient, forwards encrypted payload. HIE-CM cannot read or store data." },
  { icon: Monitor, title: "HIU Decrypts & Displays", desc: "HIU decrypts data using its private key, displays records. Access lost once window is closed." },
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

      {/* User Flow Diagram */}
      <section className="py-12 bg-card">
        <div className="container">
          <SectionHeader title="User Flow — Technical Overview" subtitle="The end-to-end flow of Scan & Record Share from QR scan to record display." />
          <div className="max-w-5xl mx-auto mt-6">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {userFlowSteps.map((step, i) => (
                <div key={i} className="relative p-4 rounded-lg bg-muted border border-border">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                      <span className="text-primary-foreground font-bold text-[10px]">{i + 1}</span>
                    </div>
                    <step.icon className="w-4 h-4 text-tier-integrator" />
                  </div>
                  <h4 className="font-heading font-semibold text-xs mb-1">{step.title}</h4>
                  <p className="text-[11px] text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground text-center mt-4">
              The HIE-CM only logs transaction metadata (who sent to whom, with timestamp). It never reads, views, or stores health record data.
            </p>
          </div>
        </div>
      </section>

      {/* Architecture Overview */}
      <section className="py-12 bg-muted">
        <div className="container">
          <SectionHeader title="Architecture Overview" />
          <div className="max-w-4xl mx-auto mt-6">
            <div className="bg-card rounded-lg border border-border p-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-heading font-bold text-base mb-3">How Data Flows</h3>
                  <ol className="space-y-2.5 text-sm text-muted-foreground">
                    <li className="flex gap-2"><span className="text-primary font-bold shrink-0">1.</span> QR code at the facility counter contains recipient information and a cert URL (public encryption key).</li>
                    <li className="flex gap-2"><span className="text-primary font-bold shrink-0">2.</span> Patient's PHR app scans the QR, selects records, and encrypts them in FHIR format using the public key.</li>
                    <li className="flex gap-2"><span className="text-primary font-bold shrink-0">3.</span> The PHR bundles patient info (x-auth token), recipient details, and encrypted records — then sends this to the HIE-CM via the /share API.</li>
                    <li className="flex gap-2"><span className="text-primary font-bold shrink-0">4.</span> HIE-CM identifies the recipient and forwards the encrypted payload to the destination system (HIU). HIE-CM is data-blind — it cannot read, view, or store any records.</li>
                    <li className="flex gap-2"><span className="text-primary font-bold shrink-0">5.</span> The HIU decrypts the data using its private key and the FHIR bundle, displaying records in a separate window.</li>
                    <li className="flex gap-2"><span className="text-primary font-bold shrink-0">6.</span> Once the recipient closes the window, access to the shared records is lost. HIE-CM only logs transaction metadata.</li>
                  </ol>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-base mb-3">Key Components</h3>
                  <div className="space-y-3">
                    {[
                      { icon: Server, label: "HIE-CM (Gateway)", desc: "Data-blind consent manager — routes requests, logs metadata only" },
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

      {/* How is this different from M3? */}
      <section className="py-12 bg-card">
        <div className="container">
          <SectionHeader
            title="How Is Scan & Record Share Different from M3?"
            subtitle="Understanding the key distinction: patient-initiated push vs. facility-initiated pull."
          />
          <div className="max-w-4xl mx-auto mt-6">
            {/* Intro */}
            <div className="bg-muted rounded-lg border border-border p-5 mb-6">
              <p className="text-sm text-muted-foreground leading-relaxed">
                In the existing <strong>M3 (Health Information) flow</strong>, a healthcare provider (HIU) initiates a consent request to access a patient's records stored at a Health Information Provider (HIP). The patient approves consent via the HIE-CM, and the HIP then pushes encrypted records to the HIU. This requires both HIP and HIU to be <strong>M3 compliant</strong>, with full consent manager integration.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mt-3">
                <strong>Scan & Record Share</strong> fundamentally changes this — the <strong>patient initiates the sharing</strong> by scanning a QR code at the facility and selecting which records to push. Since the patient is in control, consent is implicit, and the integration requirements are significantly lighter.
              </p>
            </div>

            {/* Comparison table */}
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-primary text-primary-foreground">
                    <th className="text-left p-3 font-heading font-semibold">Aspect</th>
                    <th className="text-left p-3 font-heading font-semibold">M3 Flow (Health Information)</th>
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
                      aspect: "Consent mechanism",
                      m3: "Explicit consent via HIE-CM — patient approves remotely",
                      srs: "Implicit consent — patient physically selects and shares records"
                    },
                    {
                      aspect: "PHR / HIP requirement",
                      m3: "HIP must be M3 compliant with full callback implementation",
                      srs: "PHR app needs only M2 compliance + Record Share APIs"
                    },
                    {
                      aspect: "HIU requirement",
                      m3: "HIU must be M3 compliant with consent request flow",
                      srs: "HIU only needs to implement Record Share receive endpoints — no M3 needed"
                    },
                    {
                      aspect: "Data flow direction",
                      m3: "Pull model — HIU requests, HIP responds after consent",
                      srs: "Push model — Patient pushes records directly to recipient"
                    },
                    {
                      aspect: "Integration complexity",
                      m3: "Higher — requires consent flow, HIP callbacks, data transfer APIs",
                      srs: "Lower — QR scan, encrypt, push via single /share API"
                    },
                    {
                      aspect: "Consent duration",
                      m3: "Defined by consent artefact (can be long-term)",
                      srs: "Short-lived — up to 6 hours, set by the patient"
                    },
                    {
                      aspect: "Data persistence",
                      m3: "HIU may store data as per consent artefact terms",
                      srs: "No persistence — records are view-only, lost when window is closed"
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

            {/* Key takeaway */}
            <div className="mt-6 p-4 rounded-lg bg-accent/10 border border-accent/30">
              <h4 className="font-heading font-bold text-sm text-foreground mb-1.5 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-secondary" /> Key Takeaway for Integrators
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                If your application is not yet M3 compliant, you can still enable patients to share records with your platform through <strong>Scan & Record Share</strong>. PHR apps need M2 compliance with the Record Share API collection, and HIU systems only need to implement the receive and decrypt endpoints — <strong>no M3 certification required</strong>. This makes it a significantly faster path to enabling health data exchange at the point of care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Checklist */}
      <section className="py-12 bg-muted">
        <div className="container">
          <SectionHeader title="Integration Checklist" />
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-5 mt-6">
            <div className="p-5 rounded-lg bg-muted border border-border">
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
            <div className="p-5 rounded-lg bg-muted border border-border">
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
      <section className="py-12 bg-muted">
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
              <div key={i} className="p-4 rounded-lg bg-card border border-border flex items-start gap-3">
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
      <section className="py-12 bg-card">
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
              <div key={s.step} className="flex gap-3 items-start p-4 rounded-lg bg-muted border border-border">
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
      <section className="py-12 bg-muted">
        <div className="container">
          <SectionHeader title="Compliance Requirements" />
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-5 mt-6">
            {[
              { icon: Shield, title: "Data Privacy", items: ["Patient consent for every share", "No permanent storage by provider", "Time-bound access (up to 6 hours)", "Purpose limitation"] },
              { icon: FileCode, title: "Technical Standards", items: ["FHIR-compliant data bundles", "Encrypted data transfer", "ABHA-linked records", "Supported formats: PDF, JPG, PNG"] },
              { icon: AlertTriangle, title: "Do's & Don'ts", items: ["Do: Minimal data sharing", "Do: Interoperability (FHIR)", "Don't: Consentless access", "Don't: Permanent storage"] },
            ].map((c) => (
              <div key={c.title} className="p-5 rounded-lg bg-card border border-border">
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
      <section className="py-12 bg-card">
        <div className="container">
          <SectionHeader title="Technical FAQs" />
          <div className="max-w-3xl mx-auto mt-6">
            <Accordion type="single" collapsible className="space-y-2">
              {techFaqs.map((f, i) => (
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
