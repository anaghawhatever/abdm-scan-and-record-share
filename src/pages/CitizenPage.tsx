import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import {
  Heart, Shield, Clock, FileText, Smartphone, QrCode,
  CheckCircle, HelpCircle, Phone, ArrowRight, UserCheck,
  Lock, Eye, AlertCircle
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const steps = [
  {
    step: "1",
    title: "Get Your ABHA ID",
    desc: "Create your Ayushman Bharat Health Account (ABHA) ID if you don't have one. It's free and takes only a few minutes.",
    icon: UserCheck,
  },
  {
    step: "2",
    title: "Download a PHR App",
    desc: "Download an ABDM-enabled PHR application like ABHA App, Ekacare, or Aarogya One on your smartphone.",
    icon: Smartphone,
  },
  {
    step: "3",
    title: "Scan the QR Code",
    desc: "At the doctor's clinic, scan the QR code displayed at the reception or doctor's desk using your PHR app.",
    icon: QrCode,
  },
  {
    step: "4",
    title: "Select Your Records",
    desc: "Choose which health records to share — prescriptions, lab reports, or medical documents from your phone or health locker.",
    icon: FileText,
  },
  {
    step: "5",
    title: "Confirm & Share",
    desc: "Set the sharing duration (up to 6 hours) and confirm. Your records are shared securely with the doctor instantly.",
    icon: CheckCircle,
  },
];

const faqs = [
  {
    q: "What is Scan & Record Share?",
    a: "Scan & Record Share allows you to share your health records with a doctor by scanning a QR code at the healthcare facility, directly from your mobile phone. No printouts needed."
  },
  {
    q: "Do I need to carry printed reports for my consultation?",
    a: "No. You can digitally share your available health records from your phone during the consultation, reducing the need for physical copies."
  },
  {
    q: "What type of records can I share?",
    a: "You can share medical reports, prescriptions, lab results, and other health records that are available on your phone or linked to your digital health account (ABHA). Supported formats include PDF, JPG, and PNG."
  },
  {
    q: "Will the doctor see all my records automatically?",
    a: "No. Your selected records are shared only after you explicitly choose which ones to share. Nothing is accessed without your action. You have complete control."
  },
  {
    q: "Is my data secure?",
    a: "Yes. Records are shared securely using robust encryption. Data transfer happens directly between your PHR app and the hospital system through the ABDM gateway. The doctor can only view records for the duration you specify."
  },
  {
    q: "Can I use this every time I visit a new doctor?",
    a: "Yes. You can use this feature at any participating facility, especially when visiting a doctor for the first time or when prior records are important for care."
  },
  {
    q: "Do I need any special app or technical knowledge?",
    a: "You only need a smartphone with an ABDM-enabled PHR app and your health records. The process is designed to be simple — scan, select, share."
  },
  {
    q: "How long can the doctor access my records?",
    a: "You set the duration yourself, up to a maximum of 6 hours. After the set time, the doctor loses access to the shared records automatically."
  },
];

const CitizenPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="hero-gradient py-16 md:py-20">
        <div className="container text-primary-foreground">
          <span className="gov-badge !bg-primary-foreground/20 !text-primary-foreground mb-4 inline-block">
            For Citizens & Patients
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold max-w-3xl leading-tight">
            Your Health Records, Shared Your Way
          </h1>
          <p className="text-lg opacity-90 mt-4 max-w-2xl leading-relaxed">
            No more carrying stacks of paper reports. Share your medical records with your doctor in seconds by scanning a QR code — safe, private, and completely in your control.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-card">
        <div className="container">
          <SectionHeader badge="Benefits" title="How This Helps You" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {[
              { icon: Clock, title: "Save Time", desc: "No more searching for old reports or waiting in line. Share records instantly." },
              { icon: Shield, title: "Stay in Control", desc: "You decide what to share, with whom, and for how long. Nothing is shared without your action." },
              { icon: Lock, title: "Secure & Private", desc: "Your records are encrypted and shared securely. Access expires automatically." },
              { icon: Heart, title: "Better Care", desc: "Doctors get your complete health history for more accurate diagnosis and better treatment." },
            ].map((b) => (
              <div key={b.title} className="p-6 rounded-xl bg-background border border-border hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-abdm-blue-light flex items-center justify-center mb-4">
                  <b.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-base mb-2">{b.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-16 bg-background">
        <div className="container">
          <SectionHeader badge="Step by Step" title="How It Works" subtitle="Getting started is easy — follow these simple steps" />
          <div className="max-w-3xl mx-auto mt-8 space-y-6">
            {steps.map((s, i) => (
              <div key={s.step} className="flex gap-5 items-start p-6 rounded-xl bg-card border border-border">
                <div className="w-12 h-12 shrink-0 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-heading font-bold text-lg">{s.step}</span>
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg mb-1">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Your Rights */}
      <section className="py-16 bg-card">
        <div className="container">
          <SectionHeader badge="Your Rights" title="Your Data, Your Control" />
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 mt-8">
            {[
              { icon: Eye, title: "Right to Know", desc: "You can see exactly which records are being shared and with whom at all times." },
              { icon: Shield, title: "Right to Consent", desc: "Nothing is shared without your explicit action. You initiate the sharing process." },
              { icon: Clock, title: "Right to Time-limit", desc: "You set the duration. After the set time, access is automatically revoked." },
              { icon: AlertCircle, title: "Right to Redressal", desc: "If something goes wrong, you can report issues through the ABDM grievance portal or call the helpline." },
            ].map((r) => (
              <div key={r.title} className="flex gap-4 p-5 rounded-xl bg-background border border-border">
                <r.icon className="w-6 h-6 text-secondary shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading font-semibold text-base mb-1">{r.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-background">
        <div className="container">
          <SectionHeader badge="FAQ" title="Frequently Asked Questions" />
          <div className="max-w-3xl mx-auto mt-8">
            <Accordion type="single" collapsible className="space-y-2">
              {faqs.map((f, i) => (
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
          <h2 className="text-2xl md:text-3xl font-heading font-bold">Ready to Get Started?</h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
            Download an ABDM-enabled PHR app, create your ABHA ID, and start sharing records digitally.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <a href="#" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold text-sm hover:brightness-110 transition-all">
              <Smartphone className="w-4 h-4" /> Download ABHA App
            </a>
            <a href="#" className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-semibold text-sm hover:brightness-110 transition-all">
              <UserCheck className="w-4 h-4" /> Create ABHA ID
            </a>
          </div>
          <div className="mt-6 text-sm text-muted-foreground">
            <Phone className="w-4 h-4 inline mr-1" /> Need help? Call toll-free: <strong>14477</strong>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CitizenPage;
