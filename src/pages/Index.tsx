import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import {
  QrCode, Shield, Clock, Users, Heart, Building2, Code2,
  Landmark, ArrowRight, FileText, Activity, Smartphone,
  Globe, Play
} from "lucide-react";

const stats = [
  { label: "ABHA IDs Created", value: "67 Cr+", icon: Users },
  { label: "Health Records Linked", value: "42 Cr+", icon: FileText },
  { label: "Verified Facilities", value: "3.2 L+", icon: Building2 },
  { label: "Integrators Onboarded", value: "1,200+", icon: Code2 },
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
                Empowering patients to instantly share health records with doctors by simply scanning a QR code — secure, consented, and paperless.
              </p>
              <div className="flex flex-wrap gap-3 pt-1">
                <Link
                  to="/citizens"
                  className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-5 py-2.5 rounded font-semibold text-sm hover:brightness-110 transition-all"
                >
                  <Heart className="w-4 h-4" /> I'm a Patient
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
                  <Landmark className="w-4 h-4" /> I'm a State / UT
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

      {/* What is Scan & Record Share */}
      <section className="py-14 md:py-16 bg-card">
        <div className="container">
          <SectionHeader
            title="About Scan & Record Share"
            subtitle="A simple, patient-controlled way to share health records digitally at the point of care."
          />
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            {[
              { icon: QrCode, title: "Scan", desc: "Scan the QR code displayed at the healthcare facility using any ABDM-enabled PHR app on your smartphone.", color: "text-primary" },
              { icon: FileText, title: "Select", desc: "Choose which health records to share — prescriptions, lab results, or medical documents from your phone.", color: "text-secondary" },
              { icon: Shield, title: "Share", desc: "Confirm and share securely. Records are available to the doctor only for the duration you specify.", color: "text-accent" },
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
              <h3 className="font-heading font-bold text-lg mb-1.5">States & UTs</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                Explore how your state or UT can adopt and implement Scan & Record Share.
              </p>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-tier-policy group-hover:gap-2 transition-all">
                View Details <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-14 bg-card border-y border-border">
        <div className="container">
          <SectionHeader title="ABDM at a Glance" />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
            {stats.map((s) => (
              <div key={s.label} className="stat-card">
                <s.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                <div className="text-2xl md:text-3xl font-heading font-extrabold text-primary">{s.value}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem */}
      <section className="py-14 md:py-16 bg-muted">
        <div className="container">
          <SectionHeader
            title="How It Fits Within ABDM"
            subtitle="Scan & Record Share is part of the broader Ayushman Bharat Digital Mission health stack."
          />
          <div className="max-w-4xl mx-auto mt-6 bg-card rounded-lg p-6 border border-border">
            <div className="grid grid-cols-5 gap-3 items-center text-center">
              {[
                { label: "ABHA ID", desc: "Unique Health ID", icon: Users, highlight: false },
                { label: "Health Locker", desc: "PHR Apps", icon: Smartphone, highlight: false },
                { label: "Scan & Share", desc: "This Initiative", icon: QrCode, highlight: true },
                { label: "HMIS / LMIS", desc: "Facility Software", icon: Activity, highlight: false },
                { label: "HIE-CM", desc: "Consent Manager", icon: Globe, highlight: false },
              ].map((item) => (
                <div key={item.label} className={`p-3 rounded-lg ${item.highlight ? "bg-primary text-primary-foreground" : "bg-muted"}`}>
                  <item.icon className={`w-5 h-5 mx-auto mb-1.5 ${item.highlight ? "" : "text-primary"}`} />
                  <div className="font-heading font-bold text-xs">{item.label}</div>
                  <div className={`text-[10px] mt-0.5 ${item.highlight ? "opacity-80" : "text-muted-foreground"}`}>{item.desc}</div>
                </div>
              ))}
            </div>
            <p className="text-center text-xs text-muted-foreground mt-4">
              Data flows securely between components via the ABDM Gateway with patient consent.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
