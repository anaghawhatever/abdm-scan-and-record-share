import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import heroImage from "@/assets/hero-illustration.jpg";
import {
  QrCode, Shield, Clock, Users, Heart, Building2, Code2,
  Landmark, ArrowRight, FileText, Activity, Smartphone,
  CheckCircle, Globe, TrendingUp
} from "lucide-react";

const stats = [
  { label: "ABHA IDs Created", value: "67 Cr+", icon: Users },
  { label: "Health Records Linked", value: "42 Cr+", icon: FileText },
  { label: "Verified Facilities", value: "3.2 L+", icon: Building2 },
  { label: "Integrators Onboarded", value: "1,200+", icon: Code2 },
];

const news = [
  { date: "Feb 2026", title: "Scan & Record Share APIs available for integration in Sandbox environment" },
  { date: "Jan 2026", title: "Phase 2 launch: Linked health records from PHR applications now shareable" },
  { date: "Dec 2025", title: "CDAC and NIC complete HMIS integration for Scan & Record Share" },
  { date: "Nov 2025", title: "ABHA PHR, Ekacare, Aarogya One begin PHR integration for record sharing" },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-secondary/20 blur-3xl" />
          <div className="absolute bottom-10 left-10 w-72 h-72 rounded-full bg-primary-foreground/10 blur-3xl" />
        </div>
        <div className="container relative py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-primary-foreground space-y-6 animate-fade-in-up">
              <span className="gov-badge !bg-primary-foreground/20 !text-primary-foreground">
                ABDM Initiative
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold leading-tight">
                Scan & Record Share
              </h1>
              <p className="text-lg md:text-xl opacity-90 leading-relaxed max-w-lg">
                Empowering patients to instantly share health records with doctors by simply scanning a QR code — secure, consented, and paperless.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  to="/citizens"
                  className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold text-sm hover:brightness-110 transition-all shadow-lg"
                >
                  <Heart className="w-4 h-4" /> I'm a Patient
                </Link>
                <Link
                  to="/integrators"
                  className="inline-flex items-center gap-2 bg-primary-foreground/15 text-primary-foreground border border-primary-foreground/30 px-6 py-3 rounded-lg font-semibold text-sm hover:bg-primary-foreground/25 transition-all"
                >
                  <Code2 className="w-4 h-4" /> I'm a Developer
                </Link>
                <Link
                  to="/policy"
                  className="inline-flex items-center gap-2 bg-primary-foreground/15 text-primary-foreground border border-primary-foreground/30 px-6 py-3 rounded-lg font-semibold text-sm hover:bg-primary-foreground/25 transition-all"
                >
                  <Landmark className="w-4 h-4" /> I'm a Policy Maker
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <img
                src={heroImage}
                alt="Patient scanning QR code to share health records with doctor"
                className="rounded-2xl shadow-2xl w-full object-cover max-h-[420px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What is Scan & Record Share */}
      <section className="py-16 md:py-20 bg-card">
        <div className="container">
          <SectionHeader
            badge="About"
            title="What is Scan & Record Share?"
            subtitle="A simple, patient-controlled way to share health records digitally at the point of care"
          />
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div className="text-center p-6 rounded-xl bg-background">
              <div className="w-14 h-14 rounded-full bg-abdm-blue-light flex items-center justify-center mx-auto mb-4">
                <QrCode className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">Scan</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Scan the QR code displayed at the healthcare facility using any ABDM-enabled PHR app on your smartphone.
              </p>
            </div>
            <div className="text-center p-6 rounded-xl bg-background">
              <div className="w-14 h-14 rounded-full bg-abdm-green-light flex items-center justify-center mx-auto mb-4">
                <FileText className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">Select</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Choose which health records to share — prescriptions, lab results, medical reports from your phone or health locker.
              </p>
            </div>
            <div className="text-center p-6 rounded-xl bg-background">
              <div className="w-14 h-14 rounded-full bg-abdm-orange-light flex items-center justify-center mx-auto mb-4">
                <Shield className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">Share</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Confirm and share securely. Records are available to the doctor only for the duration you specify — up to 6 hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Three-Tier Navigation Hub */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container">
          <SectionHeader
            badge="Explore"
            title="Find What's Relevant to You"
            subtitle="This initiative serves three key audiences — find your pathway below"
          />
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {/* Citizen */}
            <Link to="/citizens" className="group tier-card-citizen rounded-xl p-8 hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-full bg-tier-citizen flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-heading font-bold text-xl mb-2 text-foreground">Citizens & Patients</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Learn how Scan & Record Share makes your healthcare experience simpler, faster, and paperless. Understand your rights and controls.
              </p>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-tier-citizen group-hover:gap-2 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            {/* Integrator */}
            <Link to="/integrators" className="group tier-card-integrator rounded-xl p-8 hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-full bg-tier-integrator flex items-center justify-center mb-4">
                <Code2 className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-heading font-bold text-xl mb-2 text-foreground">Digital Health Integrators</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Access API docs, sandbox environment, integration pathways and compliance requirements for HMIS/PHR integration.
              </p>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-tier-integrator group-hover:gap-2 transition-all">
                Start Integrating <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            {/* Policy */}
            <Link to="/policy" className="group tier-card-policy rounded-xl p-8 hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-full bg-tier-policy flex items-center justify-center mb-4">
                <Landmark className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-heading font-bold text-xl mb-2 text-foreground">Policy Stakeholders</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Explore the policy framework, implementation roadmap, state onboarding process, and governance model.
              </p>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-tier-policy group-hover:gap-2 transition-all">
                View Framework <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 abdm-gradient-subtle">
        <div className="container">
          <SectionHeader badge="Impact" title="ABDM at a Glance" />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            {stats.map((s) => (
              <div key={s.label} className="stat-card">
                <s.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-2xl md:text-3xl font-heading font-extrabold text-primary">{s.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem */}
      <section className="py-16 md:py-20 bg-card">
        <div className="container">
          <SectionHeader
            badge="Ecosystem"
            title="How It Fits Within ABDM"
            subtitle="Scan & Record Share is part of the broader Ayushman Bharat Digital Mission health stack"
          />
          <div className="max-w-4xl mx-auto mt-8 bg-background rounded-2xl p-8 border border-border">
            <div className="grid md:grid-cols-5 gap-4 items-center text-center">
              {[
                { label: "ABHA ID", desc: "Unique Health ID", icon: Users },
                { label: "Health Locker", desc: "PHR Apps", icon: Smartphone },
                { label: "Scan & Share", desc: "This Initiative", icon: QrCode, highlight: true },
                { label: "HMIS/LMIS", desc: "Facility Software", icon: Activity },
                { label: "HIE-CM", desc: "Consent Manager", icon: Globe },
              ].map((item) => (
                <div key={item.label} className={`p-4 rounded-xl ${item.highlight ? "bg-primary text-primary-foreground shadow-lg scale-105" : "bg-muted"}`}>
                  <item.icon className={`w-6 h-6 mx-auto mb-2 ${item.highlight ? "" : "text-primary"}`} />
                  <div className="font-heading font-bold text-sm">{item.label}</div>
                  <div className={`text-xs mt-1 ${item.highlight ? "opacity-80" : "text-muted-foreground"}`}>{item.desc}</div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-6">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <ArrowRight className="w-3 h-3" />
                <span>Data flows securely between components via ABDM Gateway with patient consent</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container">
          <SectionHeader badge="Updates" title="News & Announcements" />
          <div className="grid md:grid-cols-2 gap-4 mt-6 max-w-4xl mx-auto">
            {news.map((item, i) => (
              <div key={i} className="flex gap-4 p-5 rounded-xl bg-card border border-border hover:shadow-md transition-shadow">
                <div className="text-xs font-semibold text-primary whitespace-nowrap pt-0.5">{item.date}</div>
                <p className="text-sm text-foreground leading-relaxed">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
