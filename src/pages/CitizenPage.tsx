import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import {
  Heart, Shield, Clock, FileText, Smartphone, QrCode,
  CheckCircle, Phone, UserCheck, Lock, Eye, AlertCircle
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const steps = [
  { step: "1", title: "Get Your ABHA ID", desc: "Create your Ayushman Bharat Health Account (ABHA) ID if you don't have one. It's free and takes only a few minutes.", icon: UserCheck },
  { step: "2", title: "Download a PHR App", desc: "Download an ABDM-enabled PHR application like ABHA App, Ekacare, or Aarogya One on your smartphone.", icon: Smartphone },
  { step: "3", title: "Scan the QR Code", desc: "At the doctor's clinic, scan the QR code displayed at the reception or doctor's desk using your PHR app.", icon: QrCode },
  { step: "4", title: "Select Your Records", desc: "Choose which health records to share — prescriptions, lab reports, or medical documents from your phone.", icon: FileText },
  { step: "5", title: "Confirm & Share", desc: "Set the sharing duration (up to 6 hours) and confirm. Your records are shared securely with the doctor instantly.", icon: CheckCircle },
];

const faqs = [
  { q: "What is Scan & Record Share?", a: "It allows you to share your health records with a doctor by scanning a QR code at the healthcare facility, directly from your mobile phone. No printouts needed." },
  { q: "Do I need to carry printed reports?", a: "No. You can digitally share your available health records from your phone during the consultation." },
  { q: "What type of records can I share?", a: "Medical reports, prescriptions, lab results, and other health records available on your phone or linked to your ABHA. Supported formats include PDF, JPG, and PNG." },
  { q: "Will the doctor see all my records automatically?", a: "No. Only the records you explicitly select are shared. Nothing is accessed without your action." },
  { q: "Is my data secure?", a: "Yes. Records are encrypted and shared securely through the ABDM gateway. The doctor can only view records for the duration you specify." },
  { q: "How long can the doctor access my records?", a: "You set the duration yourself, up to a maximum of 6 hours. After that, access is automatically revoked." },
];

const CitizenPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="hero-gradient py-12 md:py-16">
        <div className="container text-primary-foreground">
          <p className="text-sm font-medium opacity-80 mb-2 uppercase tracking-wide">For Citizens & Patients</p>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-heading font-extrabold max-w-3xl leading-tight">
            Your Health Records, Shared Your Way
          </h1>
          <p className="text-base opacity-90 mt-3 max-w-2xl leading-relaxed">
            No more carrying stacks of paper reports. Share your medical records with your doctor in seconds by scanning a QR code — safe, private, and in your control.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 bg-card">
        <div className="container">
          <SectionHeader title="How This Helps You" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-6">
            {[
              { icon: Clock, title: "Save Time", desc: "No more searching for old reports. Share records instantly." },
              { icon: Shield, title: "Stay in Control", desc: "You decide what to share, with whom, and for how long." },
              { icon: Lock, title: "Secure & Private", desc: "Your records are encrypted. Access expires automatically." },
              { icon: Heart, title: "Better Care", desc: "Doctors get your complete history for accurate diagnosis." },
            ].map((b) => (
              <div key={b.title} className="p-5 rounded-lg bg-muted border border-border">
                <b.icon className="w-6 h-6 text-primary mb-3" />
                <h3 className="font-heading font-semibold text-sm mb-1.5">{b.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-12 bg-muted">
        <div className="container">
          <SectionHeader title="How It Works" subtitle="Getting started is easy — follow these simple steps." />
          <div className="max-w-3xl mx-auto mt-6 space-y-3">
            {steps.map((s) => (
              <div key={s.step} className="flex gap-3 items-start p-4 rounded-lg bg-card border border-border">
                <div className="w-8 h-8 shrink-0 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-heading font-bold text-sm">{s.step}</span>
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-sm">{s.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed mt-0.5">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Your Rights */}
      <section className="py-12 bg-card">
        <div className="container">
          <SectionHeader title="Your Data, Your Control" />
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-5 mt-6">
            {[
              { icon: Eye, title: "Right to Know", desc: "You can see exactly which records are being shared and with whom." },
              { icon: Shield, title: "Right to Consent", desc: "Nothing is shared without your explicit action." },
              { icon: Clock, title: "Right to Time-limit", desc: "You set the duration. Access is automatically revoked after." },
              { icon: AlertCircle, title: "Right to Redressal", desc: "Report issues through the ABDM grievance portal or call 14477." },
            ].map((r) => (
              <div key={r.title} className="flex gap-3 p-4 rounded-lg bg-muted border border-border">
                <r.icon className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading font-semibold text-sm mb-0.5">{r.title}</h4>
                  <p className="text-muted-foreground text-xs leading-relaxed">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-12 bg-muted">
        <div className="container">
          <SectionHeader title="Frequently Asked Questions" />
          <div className="max-w-3xl mx-auto mt-6">
            <Accordion type="single" collapsible className="space-y-2">
              {faqs.map((f, i) => (
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
          <h2 className="text-xl md:text-2xl font-heading font-bold">Ready to Get Started?</h2>
          <p className="text-muted-foreground text-sm mt-2 max-w-md mx-auto">
            Download an ABDM-enabled PHR app, create your ABHA ID, and start sharing records digitally.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-5">
            <a href="#" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded font-semibold text-sm hover:brightness-110 transition-all">
              <Smartphone className="w-4 h-4" /> Download ABHA App
            </a>
            <a href="#" className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-5 py-2.5 rounded font-semibold text-sm hover:brightness-110 transition-all">
              <UserCheck className="w-4 h-4" /> Create ABHA ID
            </a>
          </div>
          <p className="text-xs text-muted-foreground mt-4">
            <Phone className="w-3.5 h-3.5 inline mr-1" /> Need help? Call toll-free: <strong>14477</strong>
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default CitizenPage;
