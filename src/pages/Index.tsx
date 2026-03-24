import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import {
  QrCode, Shield, Clock, Users, Heart, Building2, Code2,
  Landmark, ArrowRight, FileText, Smartphone, Play, Info
} from "lucide-react";
import flowQr from "@/assets/flow-qr-facility.jpg";
import flowScan from "@/assets/flow-patient-scan.jpg";
import flowSelect from "@/assets/flow-select-records.jpg";
import flowShare from "@/assets/flow-share-confirm.jpg";
import flowDoctor from "@/assets/flow-doctor-view.jpg";

const stats = [
  { label: "ABHA Numbers Created", value: "[XX] Cr+", icon: Users },
  { label: "Health Records Linked", value: "[XX] Cr+", icon: FileText },
  { label: "Verified Facilities", value: "[XX] L+", icon: Building2 },
  { label: "Integrators Onboarded", value: "[X,XXX]+", icon: Code2 },
];

const flowSteps = [
  { img: flowQr, caption: "QR Code at Facility", desc: "A QR code containing recipient information is placed at the clinic or hospital counter." },
  { img: flowScan, caption: "Patient Scans QR Code", desc: "Patient uses a PHR app to scan the QR code, receiving recipient details and encryption key." },
  { img: flowSelect, caption: "Select Records from Health Locker", desc: "Patient selects health records — lab reports, prescriptions, X-rays — from their PHR Health Locker." },
  { img: flowShare, caption: "Confirm & Share", desc: "Patient sets consent duration (up to 6 hours, updatable before expiry) and taps Share. Records are encrypted and sent securely." },
  { img: flowDoctor, caption: "Doctor Views Records", desc: "The doctor's HMIS receives the same records instantly, displayed on their screen for the consultation." },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient relative">
        <div className="container py-14 md:py-20">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="text-primary-foreground space-y-5">
              <h1 className="text-3xl md:text-4xl lg:text-[44px] font-heading font-extrabold leading-tight">
                Scan & Record Share
              </h1>
              <p className="text-base md:text-lg opacity-90 leading-relaxed max-w-lg">
                Empowering patients to instantly share health records with doctors/health workers/facilities by simply scanning a QR code — secure, consented, and paperless.
              </p>
              <div className="flex flex-wrap gap-3 pt-1">
                <Link
                  to="/citizens"
                  className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-5 py-2.5 rounded font-semibold text-sm hover:brightness-110 transition-all"
                >
                  <Heart className="w-4 h-4" /> I'm a Citizen
                </Link>
                <Link
                  to="/integrators"
                  className="inline-flex items-center gap-2 bg-primary-foreground/15 text-primary-foreground border border-primary-foreground/30 px-5 py-2.5 rounded font-semibold text-sm hover:bg-primary-foreground/25 transition-all"
                >
                  <Code2 className="w-4 h-4" /> I'm a Digital Solution Company
                </Link>
                <Link
                  to="/policy"
                  className="inline-flex items-center gap-2 bg-primary-foreground/15 text-primary-foreground border border-primary-foreground/30 px-5 py-2.5 rounded font-semibold text-sm hover:bg-primary-foreground/25 transition-all"
                >
                  <Landmark className="w-4 h-4" /> I'm a Facility / State
                </Link>
              </div>
            </div>
            {/* Video Placeholder */}
            <div className="hidden lg:block">
              <div className="rounded-lg overflow-hidden bg-foreground/20 aspect-video flex items-center justify-center relative border border-primary-foreground/20">
                <div className="text-center text-primary-foreground">
                  <div className="w-16 h-16 rounded-full bg-primary-foreground/20 flex items-center justify-center mx-auto mb-3 cursor-pointer hover:bg-primary-foreground/30 transition-colors">
                    <Play className="w-7 h-7 ml-1" />
                  </div>
                  <p className="text-sm opacity-80">[Demo Video Placeholder]</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-14 md:py-16 bg-card">
        <div className="container">
          <SectionHeader
            title="About Scan & Record Share"
            subtitle="A simpler, patient-controlled way to share health records quickly and digitally with a doctor or at a facility via PHR app."
          />
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            {[
              { icon: QrCode, title: "Scan", desc: "Scan the QR code displayed at the healthcare facility using any ABDM-enabled PHR app on your smartphone.", color: "text-primary" },
              { icon: FileText, title: "Select", desc: "Choose which health records to share — prescriptions, lab results, or medical documents from your phone or locker.", color: "text-secondary" },
              { icon: Shield, title: "Share", desc: "Confirm and share securely. Records are available to the doctor only for the duration you specify as Expiry (up to 6 hours).", color: "text-accent" },
            ].map((item) => (
              <div key={item.title} className="text-center p-6 rounded-lg bg-muted">
                <item.icon className={`w-8 h-8 ${item.color} mx-auto mb-3`} />
                <h3 className="font-heading font-semibold text-base mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Three-Tier Navigation Hub */}
      <section className="py-14 md:py-16 bg-muted">
        <div className="container">
          <SectionHeader
            title="Find What's Relevant to You"
            subtitle="This initiative serves three key audiences — find your pathway below."
          />
          <div className="grid md:grid-cols-3 gap-5 mt-6">
            <Link to="/citizens" className="group tier-card-citizen rounded-lg p-6 hover:shadow-md transition-all">
              <Heart className="w-6 h-6 text-tier-citizen mb-3" />
              <h3 className="font-heading font-bold text-lg mb-1.5">Citizens & Patients</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                Learn how Scan & Record Share makes your healthcare experience simpler and paperless.
              </p>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-tier-citizen group-hover:gap-2 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            <Link to="/integrators" className="group tier-card-integrator rounded-lg p-6 hover:shadow-md transition-all">
              <Code2 className="w-6 h-6 text-tier-integrator mb-3" />
              <h3 className="font-heading font-bold text-lg mb-1.5">Digital Solution Companies</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                Access API documentation, sandbox environment, and integration pathways for your platform.
              </p>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-tier-integrator group-hover:gap-2 transition-all">
                Start Integrating <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            <Link to="/policy" className="group tier-card-policy rounded-lg p-6 hover:shadow-md transition-all">
              <Landmark className="w-6 h-6 text-tier-policy mb-3" />
              <h3 className="font-heading font-bold text-lg mb-1.5">Facilities & States</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                Explore how your facility or state can adopt and implement Scan & Record Share.
              </p>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-tier-policy group-hover:gap-2 transition-all">
                View Details <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats — ABDM at a Glance */}
      <section className="py-14 bg-card border-y border-border">
        <div className="container">
          <SectionHeader title="ABDM at a Glance" subtitle="These numbers reflect the broader ABDM ecosystem that powers Scan & Record Share." />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            {stats.map((s) => (
              <div key={s.label} className="stat-card">
                <s.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                <div className="text-2xl md:text-3xl font-heading font-extrabold text-primary">{s.value}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-muted-foreground mt-4 flex items-center justify-center gap-1.5">
            <Info className="w-3.5 h-3.5" /> These are ABDM-wide statistics. Scan & Record Share-specific metrics will be updated here in real-time as adoption grows. This section is optional and can be removed.
          </p>
        </div>
      </section>

      {/* How It Fits Within ABDM — Visual Flow */}
      <section className="py-14 md:py-16 bg-muted">
        <div className="container">
          <SectionHeader
            title="How It Works — Patient Journey"
            subtitle="Scan & Record Share enables patients to digitally share health records with their doctor in five simple steps."
          />
          <div className="max-w-5xl mx-auto mt-8">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {flowSteps.map((step, i) => (
                <div key={i} className="flex flex-col items-center text-center relative">
                  <div className="w-full aspect-square rounded-lg overflow-hidden bg-card border border-border mb-3 shadow-sm">
                    <img src={step.img} alt={step.caption} className="w-full h-full object-cover" />
                  </div>
                  <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center mb-2">
                    <span className="text-primary-foreground font-heading font-bold text-xs">{i + 1}</span>
                  </div>
                  <h4 className="font-heading font-semibold text-xs mb-1">{step.caption}</h4>
                  <p className="text-[11px] text-muted-foreground leading-relaxed">{step.desc}</p>
                  {i < flowSteps.length - 1 && (
                    <ArrowRight className="hidden md:block w-5 h-5 text-primary absolute -right-4 top-[40%]" />
                  )}
                </div>
              ))}
            </div>
            <p className="text-center text-xs text-muted-foreground mt-6">
              Data flows securely between components via the ABDM Gateway. The gateway is data-blind — it cannot read or store any health records.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
